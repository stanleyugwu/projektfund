'use server'

import Transactions from "@/models/Transactions"
import User from "@/models/User"
import { IPaymentData } from "@/types/paystack"
import { ITransaction } from "@/types/transaction"
import { IUser } from "@/types/user"
import { authUser } from "./auth"
import database from "./database"
import { status } from "@/lib/status"
import Banks from "@/models/Banks"

const baseUrl = process.env.PAYSTACK_BASE_URL
const secretKey = process.env.PAYSTACK_SECRET
const publicKey = process.env.PAYSTACK_PUBLIC

export const fetchBanks = async () => {
    await database()
    const url = `${baseUrl}/bank`

    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+secretKey}
    })

    if(req.ok) {
        const data = await req.json()
        if(data.status){
            const banks : any[] = data.data
            await Promise.all(banks.map((item => {
                return Banks.create({
                    name: item.name,
                    code: item.code
                })
            })))
        }
    }
}

export const getBanks = async () => {
    const banks = await Banks.find()
    return JSON.parse(JSON.stringify(banks))
}

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
    if(!transaction) return {status: false, error: 'The requested transaction was not found!'}
    if(transaction.user != user.id) return {status: false, error: 'The requested transaction does not belong to the current user. Please try again or contact support.'}

    const url = `${baseUrl}/transaction/verify/${reference}`
    
    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+secretKey}
    })
    
    if(req.ok) {
        const data = await req.json()
        
        if(data.status) {
            transaction.status = status.success
            await transaction.save()                
            console.timeStamp('Transaction Verified')
            return {status: true, transaction: transaction}
        }    
    }
    
    return {status: false, error: 'The payment could not be verified at the moment! Please contact support.'}
} 