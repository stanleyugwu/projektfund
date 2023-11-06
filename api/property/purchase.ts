'use server'

import response from "@/lib/response"
import { status } from "@/lib/status"
import Token from "@/lib/token"
import Property from "@/models/Property"
import Transactions from "@/models/Transactions"
import Unit from "@/models/Unit"
import User from "@/models/User"
import { __PurchaseUnitSchema } from "@/schema/unit.schema"
import { authUser } from "@/services/auth"
import database from "@/services/database"
import { transactionType } from "@/services/transactions"
import Validator from '@/lib/validator'
import { Transaction } from "mongodb"

const baseUrl = process.env.PAYSTACK_BASE_URL
const secretKey = process.env.PAYSTACK_SECRET
const publicKey = process.env.PAYSTACK_PUBLIC

export async function initiatePurchase(state: any, formData: FormData){
    await database()
    const body = Object.fromEntries(formData.entries())

    const units = formData.get('units')

    const validator = new Validator(body, __PurchaseUnitSchema.rules)
    validator.setAttributeNames(__PurchaseUnitSchema.attributes as Validator.AttributeNames)

    if(! validator.check()) {
        return {status: false, ...validator.errors}
    }

    const purchasedUnits = parseInt(units?.toString() as unknown as string)
    const user = await authUser();

    const property = await Property.findById(body.property_id)
    if(!property) return {status: false, message: 'Invalid Property Selected'} 

    const reference = await Token.random('transactions', 'refrence')
    
    const amount = property.unit_price * purchasedUnits
    
    if(body.method == 'wallet'){
        if(user.wallet.main_bal < amount) return response.error().json({errors: {units: "You do not have sufficent funds to purchase this units"}})  
    }
    
    const unit = await Unit.create({
        user: user._id,
        property: property,
        unit_cost: property.unit_price,
        units: purchasedUnits,
        status: status.pending,
        listed_units: 0
    })

    const transaction = await Transactions.create({
        user: user._id,
        status: status.pending,
        amount: amount,
        reference: reference,
        purpose: transactionType.unit.description,
        transactable: unit._id,
        transactable_type: 'Unit',
        payment_method: body.method
    });

    if(transaction.payment_method == 'wallet') {
        if(user.wallet.main_bal < amount) {
            transaction.status = status.failed
            transaction.save()
            return response.error().json({errors: {units: "You do not have sufficent funds to purchase this units"}})
        }

        const reloadTransaction = await Transactions.findById(transaction.id)

        const complete = await completePurchase(reloadTransaction)
        if(complete.status){
            await User.findByIdAndUpdate(user.id, {
                wallet: {
                    ...user.wallet,
                    main_bal: user.wallet.main_bal - amount
                }
            })
        }

        return complete
    }

    if(transaction.payment_method == 'paystack'){
        const payment = {
            ref: reference,
            email: user.email,
            amount: (amount * 100),
            key: publicKey
        }
    
        return {status: 'pay', payment}
    }
}

export async function verifyPurchase(state: any, formData: FormData){
    await database()
    const user = await authUser();
    const reference = formData.get('reference')

    const transaction = await Transactions.findOne({reference}).populate('transactable user')
    if(!transaction) return {status: false, error: 'The requested transaction does not exist!'}

    const url = `${baseUrl}/transaction/verify/${reference}`

    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+secretKey}
    })

    if(transaction && transaction.user.id == user.id){
        if(req.ok) {
            const data = await req.json()

            if(data.status) {
                return await completePurchase(transaction)
            }    
        }
        
        return {status: false, error: 'The payment could not be verified at the moment! Please contact support.'}
    } 

    return {status: false, error: 'Your transaction could not be completed! Please try again or contact support.'}
}


export async function completePurchase(transactionModel: any) {
    const transaction = await Transactions.findById(transactionModel.id).populate('transactable')
    const unit = await Unit.findById(transaction.transactable.id).populate('property')
    if(!unit) return response.error().json({error: "The requested unit does not exist"})

    transaction.status = status.success
    await transaction.save()             
    
    const property = unit.property
    property.available_units = property.available_units - unit.units
    await property.save()

    unit.status = status.active
    await unit.save()
    
    return {status: 'completed', message: `You have successfully Purchased ${unit.units} units for ${transaction.amount} Naira`}
}