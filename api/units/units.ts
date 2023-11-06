'use server'

import response from "@/lib/response";
import { status } from "@/lib/status";
import { getFormDataAsJson } from "@/lib/utils";
import ListedUnit from "@/models/ListedUnit";
import Unit from "@/models/Unit";
import { authUser } from "@/services/auth";
import database from "@/services/database";

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
        status: status.active
    })

    unit.listed_units += body.units
    await unit.save()

    return response.success().json({message: `You have successfuly listed ${body.units} unit for sale`}) 
    
}

export async function saleOffers(unit_id: string) {
    const units = await ListedUnit.find({unit: unit_id}).populate('unit property user')
    return JSON.parse(JSON.stringify(units))
}

export async function initatePurchase(){
    
}