'use server'

import Property from "@/models/Property";
import database from "@/services/database";
import { IProperty } from "@/types/property";

export async function listProperties() : Promise<IProperty[]> {
    await database()
    

    const properties = JSON.parse(JSON.stringify(await Property.find() ?? []))
    return properties
}