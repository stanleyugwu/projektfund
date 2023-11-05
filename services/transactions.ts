import { status } from "@/lib/status"
import Token from "@/lib/token"
import Transactions from "@/models/Transactions"
import { IStatus } from "@/types/status"
import { ITransaction } from "@/types/transaction"

export const transactionType = {
    unit: {
        description: 'Property Unit Purchase'
    },
    deposit: {
        description: 'Wallet Deposit'
    },
    withdrawal: {
        description: 'Funds Withdrawal'
    }
}

export const createTransaction = async ({...data} : Omit<ITransaction, 'id' | 'reference'>) => {
    const reference = await Token.random('transactions', 'reference')
    const transaction = await Transactions.create({
        ...data, reference,
        status: data.status ?? status.pending
    })
    return await Transactions.findById(transaction.id).populate('user')    
}