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
import ListedUnit from "@/models/ListedUnit"

const baseUrl = process.env.PAYSTACK_BASE_URL
const secretKey = process.env.PAYSTACK_SECRET
const publicKey = process.env.PAYSTACK_PUBLIC

export async function initiatePurchase(state: any, formData: FormData){
    await database()
    const body = Object.fromEntries(formData.entries())

    const units = formData.get('units')

    const validator = new Validator(body, __PurchaseUnitSchema.rules)
    validator.setAttributeNames(__PurchaseUnitSchema.attributes as Validator.AttributeNames)

    // Validate Data
    if(! validator.check()) {
        return {status: false, ...validator.errors}
    }

    const purchasedUnits = parseInt(units?.toString() as unknown as string)
    const user = await authUser();

    const property = await Property.findById(body.property_id)
    if(!property) return {status: false, message: 'Invalid Property Selected'} 

    // Try the listed unit 
    const listing = await ListedUnit.findById(body.listing_id).populate('unit')
    
    /**
     * Check if listed unit id is on the body,
     * if it is, check if the listing was retrieved
     * if it was not return an error that the listing does not exist
     */
    if(body.listing_id) {
        if(!listing) {
            return response.error().json({error: "The listing does not exist!"})
        }

        if(listing.available_units < 1) return response.error().json({error:'Not enough units available to purchase from'})
        if(listing.user == user.id) return response.error().json({error: 'You are not autorized cannot make this purchase'})
        if(purchasedUnits > listing.available_units) return response.error().json({error: 'You can\'t purchase more units than is available'})
    } else {
        if(purchasedUnits > property.available_units) return response.error().json({error: 'You can\'t purchase more units than is available'})
        if(property.available_units < 1) return response.error().json({error:'Not enough units available to purchase from'})
    }

    const reference = await Token.random('transactions', 'refrence')
    
    // Check if the listing existed and user the listing unit_price else, use the property price
    const unit_price = listing ? listing.unit_price : property.unit_price
    const amount = unit_price * purchasedUnits
    
    // If wallet payment, check if the wallet has enough money to cover the transaction
    if(body.method == 'wallet'){
        if(user.wallet.main_bal < amount) {
            return response.error().json({errors: {units: "You do not have sufficent funds to purchase this units"}})  
        }
    }
    
    // Create a transaction for this purchase
    const transaction = await Transactions.create({
        user: user._id,
        status: status.pending,
        amount: amount,
        reference: reference,
        purpose: transactionType.unit.description,
        payment_method: body.method,
        data: {
            units: purchasedUnits,
            property: property.id,
            listing_id: body.listing_id ?? null
        }
    });
    
    // If payment method is wallet, handle the payment
    if(transaction.payment_method == 'wallet') {
        if(user.wallet.main_bal < amount) {
            transaction.status = status.failed
            transaction.save()
            return response.error().json({errors: {units: "You do not have sufficent funds to purchase this units"}})
        }
        
        const reloadTransaction = await Transactions.findById(transaction.id).populate('user')
        
        const complete = await completePurchase(reloadTransaction)
        user.wallet.main_bal -= amount
        await user.save() 

        return complete
    }
    
    // Else, handle the response
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
                const complete = await completePurchase(transaction)
                return complete
            }    
        }
        
        return {status: false, error: 'The payment could not be verified at the moment! Please contact support.'}
    } 

    return {status: false, error: 'Your transaction could not be completed! Please try again or contact support.'}
}


export async function completePurchase(transactionModel: any) {
    const transaction = await Transactions.findById(transactionModel.id).populate('user')
    if(!transaction) return response.error().json({error: "The transaction was not found"})

    const property = await Property.findById(transaction.data.property)
    if(!property) return response.error().json({error: "The property does not exist"})

    const unit = await createOrUpdateUnit(property, transaction)

    if(transaction.data.listing_id) {
        await updateListing(transaction)
    }else{
        property.available_units -= transaction.data.units
        await property.save()
    }

    transaction.transactable = unit._id,
    transaction.transactable_type = 'Unit',
    transaction.status = status.success
    await transaction.save()           
    
    return {status: 'completed', message: `You have successfully Purchased ${transaction.data.units} units for ${transaction.amount} Naira`}
}

async function createOrUpdateUnit(property: any, transaction: any){
    
    const existingUnit = await Unit.findOne({property: property, user: transaction.user.id})

    if(!existingUnit){
        return await Unit.create({
            user: transaction.user._id,
            property: transaction.data.property,
            unit_cost: property.unit_price,
            units: transaction.data.units,
            status: status.active,
            listed_units: 0,
            available_units: transaction.data.units
        })
    }

    existingUnit.units += transaction.data.units
    existingUnit.available_units += transaction.data.units
    return await existingUnit.save()
}

async function updateListing(transaction: any) {
    const listing = await ListedUnit.findById(transaction.data.listing_id).populate('unit')
    const unit = listing.unit

    listing.available_units -= transaction.data.units;
    await listing.save();

    // unit.available_units -= transaction.data.units
    unit.listed_units -= transaction.data.units
    await unit.save()
}