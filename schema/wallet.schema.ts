import { ISchema } from "@/types/validator";

export const __WalletDepositSchema : ISchema = {
    rules: {
        amount: 'required|numeric|min:100',
    },

    attributes: {
        amount: 'Deposit amount',
    }
}

export const __WalletWithdrawalSchema : ISchema = {
    rules:  __WalletDepositSchema.rules,

    attributes: {
        amount: 'Withdrawal amount',
    }
}