'use server'

import { status } from "@/lib/status"
import Token from "@/lib/token"
import Property from "@/models/Property"
import Transactions from "@/models/Transactions"
import Unit from "@/models/Unit"
import User from "@/models/User"
import { authUser } from "@/services/auth"
import { transactionType } from "@/services/transactions"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const baseUrl = process.env.PAYSTACK_BASE_URL
const secretKey = process.env.PAYSTACK_SECRET
const publicKey = process.env.PAYSTACK_PUBLIC

export async function initiatePurchase(state: any, formData: FormData){
    const body = Object.fromEntries(formData.entries())

    const units = formData.get('units')

    const purchasedUnits = parseInt(units?.toString() as unknown as string)
    const user = await authUser();

    const property = await Property.findById(body.property_id)
    if(!property) return {status: false, message: 'Invalid Property Selected'} 

    const reference = await Token.random('transactions', 'refrence')

    const amount = property.unit_price * purchasedUnits
    
    const unit = await Unit.create({
        user: user._id,
        property: property,
        unit_cost: property.unit_price,
        units: purchasedUnits,
        status: status.pending
    })

    await Transactions.create({
        user_id: user._id,
        status: status.pending,
        amount: amount,
        reference: reference,
        purpose: transactionType.unit.description,
        transactable: unit._id,
        transactable_type: 'Unit'
    });

    const payment = {
        ref: reference,
        email: user.email,
        amount: (amount * 100),
        key: publicKey
    }

    return {status: true, payment}
}

export async function verifyPurchase(reference: string){
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
            console.log(data)
            if(data.status) {
                transaction.status = data.data.status
                await transaction.save()                
                return {status: true, success: "Payment Completed", transaction: transaction._id}
            }    
        }
        
        return {status: false, error: 'The payment could not be verified at the moment! Please contact support.'}
    } 

    return {status: false, error: 'Your transaction could not be completed! Please try again or contact support.'}
}

export async function purchaseUnits(transaction_id: string) {

}