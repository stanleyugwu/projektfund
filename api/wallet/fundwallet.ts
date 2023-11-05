'use server'

import response from "@/lib/response"
import { status } from "@/lib/status"
import { getFormDataAsJson } from "@/lib/utils"
import Transactions from "@/models/Transactions"
import { authUser } from "@/services/auth"
import database from "@/services/database"
import { setPaystackPaymentData } from "@/services/payment"
import { createTransaction } from "@/services/transactions"

export async function initiateWalletFunding(state: any, formData: FormData){
    await database()

    const body = getFormDataAsJson(formData)
    const user = await authUser()

    const transaction = await createTransaction({
        user: user.id,
        amount: body.amount,
        purpose: "Wallet Deposit",
    })

    const paymentData = setPaystackPaymentData(transaction)
    
    return response.success().json({
        payment: paymentData
    });
}

export async function completeWalletFunding(transaction_id: string){
    await database()

    const user = await authUser()

    const transaction = await Transactions.findById(transaction_id)
    if(user.id != transaction?.user) return response.error().json({message: 'Transaction failed'})
    if(transaction.status !== status.success) return response.error().json("You transaction was not completed!")
    
    user.wallet.main_balance += transaction.amount;
    user.save() 

    return response.success().json('Wallet funding successful!', {user: user})
}