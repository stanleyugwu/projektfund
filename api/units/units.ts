'use server'

import response from "@/lib/response";
import { status } from "@/lib/status";
import { getFormDataAsJson } from "@/lib/utils";
import ListedUnit from "@/models/ListedUnit";
import Property from "@/models/Property";
import Unit from "@/models/Unit";
import User from "@/models/User";
import { authUser } from "@/services/auth";
import database from "@/services/database";
import { IUnit } from "@/types/units";
import { property } from "lodash";

export async function userPortfolio () {
    await database()
    const user = await authUser();
    const data = await Unit.find({user: user.id}).populate('property user listing')
    return JSON.parse(JSON.stringify(data))
}

export async function listUnits(state: any, formData: FormData){
    await database()

    const body = getFormDataAsJson(formData)
    const user = await authUser()

    const unit = await Unit.findById(body.unit_id).populate('property listing user')
    const available_units = unit.units - unit.listed_units

    if(available_units < body.units) return response.error().json({errors: {units: "You do not have enough units to proceed!"}});

    await ListedUnit.create({
        user: user.id,
        unit: unit.id,
        property: unit.property.id,
        unit_price: body.unit_price,
        units: body.units,
        status: status.active,
        available_units: body.units
    })

    unit.listed_units += body.units
    unit.available_units -= body.units
    await unit.save()

    return response.success().json({message: `You have successfuly listed ${body.units} unit for sale`}) 
    
}

export async function saleOffers(unit_id: string) {
    const units = await ListedUnit.find({unit: unit_id}).populate('unit property user')
    return JSON.parse(JSON.stringify(units))
}

export async function deleteUnit(unit_id: string) {
    const unit = await Unit.findById(unit_id).populate('property user')
    await handleDelete(unit)
    return response.success().json('You have successfully delete the purchased unit.')

}

async function handleDelete(unit: IUnit){
    await Property.findByIdAndUpdate(unit.property._id, {
        available_units: unit.property.available_units + (unit.available_units + unit.listed_units)
    })

    await ListedUnit.deleteMany({
        unit: unit._id
    })

    await Unit.findByIdAndDelete(unit._id)
}

export async function deleteUnitAndRefund(unit_id: string) {
    const unit = await Unit.findById(unit_id).populate('property user')
    const user = unit.user
    const total_sellable_units =  (unit.available_units + unit.listed_units)
    const refund_amount = total_sellable_units * unit.property.unit_price

    // Delete the unit
    await handleDelete(unit)

    // Refund the user
    user.main_bal += refund_amount
    await user.save()

    return response.success().json(`You have successfully deleted the purchased unit and refunded ${refund_amount.toLocaleString()} Naira to the user based on the current property value`)

}
