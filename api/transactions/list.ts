'use server'

import roles from "@/lib/roles";
import Transactions from "@/models/Transactions";
import { checkUserRole } from "@/services/auth";

export async function listTransactions (){
    await checkUserRole(roles.superadmin)
    const transactions = await Transactions.find() 
    return transactions
}