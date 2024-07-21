'use server'

import database from "@/services/database";
import Listing from "@/models/Listing";
import response from "@/lib/response";
import { status } from "@/lib/status";

export async function allListings()  {
    await database()
    const properties = await Listing.find()

    return JSON.parse(JSON.stringify(properties))
}

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

export async function deactivateListing(listing_id: string) {
    await database()
    
    const listing = await Listing.findById(listing_id)
    if(!listing) {
        return response.error().json('Listing was not found') 
    }

    listing.status = !listing.status
    await listing.save()

    return response.success().json('Listing Status Updated') 
}

export async function deleteListing(listing_id: string) {
    await database()
    const listing = await Listing.findByIdAndDelete(listing_id)

    if(!listing) return response.error().json('Listing not found');
    return response.success().json('Listing deleted successfully!')
}