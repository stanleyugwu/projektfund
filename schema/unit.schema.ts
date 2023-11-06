import { ISchema } from "@/types/validator";

export const __PurchaseUnitSchema : ISchema = {
    rules: {
        units: 'required|numeric',
        method: 'required|in:wallet,paystack'
    },

    attributes: {
        units: 'Number of Units',
        method: "Payment Method"
    }
}