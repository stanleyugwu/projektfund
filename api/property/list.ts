'use server'

import Property from "@/models/Property";
import database from "@/services/database";
import { IProperty } from "@/types/property";

export async function listProperties() : Promise<IProperty[]> {
    await database()
    const properties = await Property.find()
    return JSON.parse(JSON.stringify(properties))
}