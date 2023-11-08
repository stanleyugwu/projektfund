'use server'

import ListedUnit from "@/models/ListedUnit";
import Property from "@/models/Property";
import database from "@/services/database";
import { IProperty } from "@/types/property";

export async function listProperties() : Promise<IProperty[]> {
    await database()
    const properties = await Property.find()
    // .populate('listedUnits')
    return JSON.parse(JSON.stringify(properties))
}

export async function getPropertyUnits(property: string) {
    await database()
    const listedUnits = await ListedUnit.find({property: property}).populate('property user unit')
    // console.log(listedUnits)
    return JSON.parse(JSON.stringify(listedUnits))
}