'use server'

import ListedUnit from "@/models/ListedUnit";
import Unit from "@/models/Unit";
import database from "@/services/database";
import { IProperty } from "@/types/property";
import Listing from "@/models/Listing";
import { status } from "@/lib/status";

export async function listListings()  {
    await database()
    const properties = await Listing.find({
        status: true
    })
    return JSON.parse(JSON.stringify(properties))
}

export async function singleListing(listing_id: string) {
    await database()
    
    const listing = await Listing.findById(listing_id)
    return JSON.parse(JSON.stringify(listing))
}