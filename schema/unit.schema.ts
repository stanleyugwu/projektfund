import { ISchema } from "@/types/validator";

export const __PurchaseUnitSchema : ISchema = {
    rules: {
        units: 'required|numeric|min:1',
        method: 'required|in:wallet,paystack'
    },

    attributes: {
        units: 'Number of Units',
        method: "Payment Method"
    }
}

export const __ListUnitSchema:ISchema ={
    rules:{
        units: 'required|numeric|min:1',
        unit_id: 'required:string',
        unit_price: 'required|numeric|min:1'
    },
    attributes:{
        units: 'Number of Units',
        unit_id: 'Unit ID',
        unit_price: 'Price per unit'
    }
}