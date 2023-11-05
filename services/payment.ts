'use server'

import Transactions from "@/models/Transactions"
import User from "@/models/User"
import { IPaymentData } from "@/types/paystack"
import { ITransaction } from "@/types/transaction"
import { IUser } from "@/types/user"
import { authUser } from "./auth"
import database from "./database"
import { status } from "@/lib/status"

const baseUrl = process.env.PAYSTACK_BASE_URL
const secretKey = process.env.PAYSTACK_SECRET
const publicKey = process.env.PAYSTACK_PUBLIC

export const setPaystackPaymentData = (transaction: ITransaction) : IPaymentData => {
    const amount = transaction.amount * 100
    return {
        amount,
        email: (transaction.user as IUser).email,
        key: publicKey!,
        ref: transaction.reference
    }
}

export async function verify(reference: string){
    await database()
    const user = await authUser();

    const transaction = await Transactions.findOne({reference})
    if(!transaction) return {status: false, error: 'The requested transaction does not exist!'}

    const url = `${baseUrl}/transaction/verify/${reference}`

    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+secretKey}
    })

    if(transaction && transaction.user_id == user._id){
        if(req.ok) {
            const data = await req.json()

            if(data.status) {
                transaction.status = status.success
                await transaction.save()                
                return {status: true, transaction: transaction}
            }    
        }
        
        return {status: false, error: 'The payment could not be verified at the moment! Please contact support.'}
    } 

    return {status: false, error: 'Your transaction could not be completed! Please try again or contact support.'}
} 