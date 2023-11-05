'use server'

import response from "@/lib/response"
import { getFormDataAsJson } from "@/lib/utils"
import Withdrawal from "@/models/Withdrawal"
import { authUser } from "@/services/auth"
import database from "@/services/database"
import { createTransaction, transactionType } from "@/services/transactions"

export async function initiateWithdrawal (state: string, formData: FormData) {
    await database()

    const body = getFormDataAsJson(formData)
    const user = await authUser()

    if(user.wallet.main_bal < body.amount) return response.error().json({amount: "Insufficient funds"})

    const withdrawal = await Withdrawal.create({
        user: user.id,
        amount: body.amount,
    })

    const transaction = await createTransaction({
        amount: body.amount,
        purpose: transactionType.withdrawal.description,
        user: user.id,
        transactable: withdrawal.id,
        transactable_type: 'Withdrawal'
    })

    withdrawal.transaction = transaction.id
    await withdrawal.save()

    return response.success().json("You withdrawal was initated successfully! Your funds are on its way!")

}