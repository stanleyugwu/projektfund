'use server'

import roles from "@/lib/roles";
import { status } from "@/lib/status";
import Transactions from "@/models/Transactions";
import { authUser, checkUserRole } from "@/services/auth";

export async function listTransactions (){
    await checkUserRole(roles.superadmin)
    const transactions = await Transactions.find() 
    return transactions
}

export async function userTransactions (){
    const user = await authUser()

    const transactions = await Transactions.find({user: user.id, status: status.success}) 
    return transactions
}