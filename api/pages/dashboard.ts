'use server'

import { status } from "@/lib/status";
import Property from "@/models/Property";
import Transactions from "@/models/Transactions";
import User from "@/models/User"
import { transactionType } from "@/services/transactions";
import database from '@/services/database'
import { authUser } from "@/services/auth";
import Unit from "@/models/Unit";

export const getDataSummary = async () => {
    await database()
    const users = await User.count();
    const properties = await Property.count()
    const payments = (await Transactions.find({paymentMethod: 'card', status: status.success})).reduce((prev, curr) => prev + curr.amount, 0)
    const withdrawals = (await Transactions.find({type: transactionType.withdrawal.name, status: status.success})).reduce((prev, curr) => prev + curr.amount, 0)
    return {
        payments, users, properties, withdrawals
    }
}

export const getUserDashboard = async () => {
    await database()
    const user = await authUser()
    const investments = await Unit.find({user: user.id}).populate('property')
    const totalValue = investments.reduce((prev: number, curr: any) => {
        const investment = curr.available_units * curr.property.unit_price
        return investment + prev
    }, 0)
    return {
        investments: investments.length, 
        totalValue
    }
}