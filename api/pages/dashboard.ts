import { status } from "@/lib/status";
import Property from "@/models/Property";
import Transactions from "@/models/Transactions";
import User from "@/models/User"
import { transactionType } from "@/services/transactions";

export const getDataSummary = async () => {
    const users = await User.count();
    const properties = await Property.count()
    const payments = (await Transactions.find({paymentMethod: 'card', status: status.success})).reduce((prev, curr) => prev + curr.amount, 0)
    const withdrawals = (await Transactions.find({type: transactionType.withdrawal.name, status: status.success})).reduce((prev, curr) => prev + curr.amount, 0)
    return {
        payments, users, properties, withdrawals
    }
}