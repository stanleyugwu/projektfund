import { status } from "@/lib/status";
import Token from "@/lib/token";
import Transactions from "@/models/Transactions";
import { IStatus } from "@/types/status";
import { ITransaction } from "@/types/transaction";

export const transactionType = {
  unit: {
    name: "unit",
    description: "Property Slot Purchase",
  },
  deposit: {
    name: "deposit",
    description: "Wallet Deposit",
  },
  withdrawal: {
    name: "withdrawal",
    description: "Funds Withdrawal",
  },
};

export const transactionSymbolColor = (transaction: ITransaction) => {
  if (transaction.purpose == transactionType.withdrawal.description)
    return { symbol: "-", color: "text-destructive" };
  if (transaction.purpose == transactionType.deposit.description)
    return { symbol: "+", color: "text-green-500" };
  if (
    transaction.purpose == transactionType.unit.description &&
    transaction.payment_method == "wallet"
  )
    return { symbol: "-", color: "text-destructive" };
};
// Omit<ITransaction, 'id' | 'reference' | 'createdAt' >
export const createTransaction = async ({ ...data }: any) => {
  const reference = await Token.random("transactions", "reference");
  const transaction = await Transactions.create({
    ...data,
    reference,
    status: data.status ?? status.pending,
  });
  return await Transactions.findById(transaction.id).populate("user");
};
