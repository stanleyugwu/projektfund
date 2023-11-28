'use server'

import ListedUnit from "@/models/ListedUnit";
import Unit from "@/models/Unit";
import Property from "@/models/Property";
import database from "@/services/database";
import { IProperty } from "@/types/property";
import response from "@/lib/response";

export async function listProperties() : Promise<IProperty[]> {
    await database()
    const properties = await Property.find()
    // .populate('listedUnits')
    return JSON.parse(JSON.stringify(properties))
}

export async function singleProperty(id: string) : Promise<IProperty> {
    await database()
    const property = await Property.findById(id)
    return JSON.parse(JSON.stringify(property))
}

export async function getPropertyUnits(property: string) {
    await database()
    await Unit.find()
    
    const listedUnits = await ListedUnit.find({property: property}).populate('property user unit')
    // console.log(listedUnits)
    return JSON.parse(JSON.stringify(listedUnits))
}

export async function deactivateProperty(property_id: string) {
    await database()
    const listing = await Property.findById(property_id)
    if(!listing) {
        return response.error().json('Property was not found') 
    }

    listing.status = !listing.status
    await listing.save()

    return response.success().json('Property Status Updated') 
}

export async function deleteProperty(property_id: string) {
    await database()
    const property = await Property.findById(property_id)
    if(!property) return response.error().json('Property not found');

    await Unit.deleteMany({
        property: property_id
    })

    await Property.findByIdAndDelete(property_id)

    return response.success().json('Property deleted successfully!')
}