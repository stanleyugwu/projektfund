'use server'

import { status } from "@/lib/status"
import Token from "@/lib/token"
import Property from "@/models/Property"
import Transactions from "@/models/Transactions"
import User from "@/models/User"
import { transactionType } from "@/services/transactions"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const baseUrl = process.env.PAYSTACK_BASE_URL
const secretKey = process.env.PAYSTACK_SECRET
const publicKey = process.env.PAYSTACK_PUBLIC

export async function initiatePurchase(state: any, formData: FormData){
    const body = Object.fromEntries(formData.entries())
    const units = formData.get('units')
    
    const cookieStore = cookies()
    const user_id = cookieStore.get('authorization')

    if(!user_id) return redirect('/login');

    const user = await User.findById(user_id)
    if(!user) return redirect('/login')

    const property = await Property.findById(state.data.property_id)
    if(!property) return {status: false, message: 'Invalid Property Selected'} 

    const reference = Token.random('transactions', 'refrence')

    const amount = property.unit_price * parseInt(units?.toString() as unknown as string)

    await Transactions.create({
        user_id: body._id,
        status: status.pending,
        amount: amount,
        reference: reference,
        purpose: transactionType.unit
    });

    return {status: true, payment: {
        reference: reference,
        email: user.email,
        amount: (amount * 100), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.PAYSTACK_PUBLIC_KEY,
    }}
}

export async function verifyPurchase(reference: string){
    const url = `${baseUrl}/transaction/verify/${reference}`
    const req = await fetch(url, {
        headers: {
            "Authorization": "Bearer "+secretKey
        }
    })

    const transaction = await Transactions.findById(reference)

    if(transaction){
        if(req.ok) {
            const data = await req.json()
            if(data.status) {
                transaction.status = data.data.status
                await transaction.save()                
                return {status: true, success: "Payment Completed"}
            }    
        }
        
        return {status: false, error: 'The payment could not be verified at the moment! Please contact admin.'}
    } 

    return {status: false, error: 'The payment could not be verified at the moment! Please contact admin.'}
}