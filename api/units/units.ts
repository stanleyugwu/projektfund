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
    const data = await Unit.find({user: user.id}).populate('user property unit')
    return JSON.parse(JSON.stringify(data))
}

export async function listUnits(state: any, formData: FormData){
    await database()

    const body = getFormDataAsJson(formData)
    const user = await authUser()

    const unit = await Unit.findById(body.unit_id).populate('property unit user')
    const available_units = unit.units - unit.listed_units

    if(available_units < body.units) return response.error().json({units: "You do not have enough units to proceed!"});

    await ListedUnit.create({
        user: user.id,
        unit: unit.id,
        property: unit.property.id,
        unit_price: body.unit_price,
        units: body.units,
        status: status.active
    })

    

    return response.success().json({message: `You have successfuly listed ${body.units} unit for sale`}) 
    
}