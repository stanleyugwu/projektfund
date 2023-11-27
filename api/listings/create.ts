'use server'

import Property from "@/models/Property"
import { __PropertySchema } from "@/schema/property.schema"
import database from "@/services/database"
import { IProperty } from "@/types/property"
import Validator from '@/lib/validator'
import { upload } from "@/lib/upload"
import _ from "lodash"
import { random } from "@/lib/string"
import Listing from "@/models/Listing"
import { __ListingSchema } from "@/schema/listing.schema"

export async function createListing(state: any, data: FormData){
    await database()

    const galleryFiles = data.getAll('gallery')
    const image = data.get('image')

    const body = Object.fromEntries(data.entries()) as unknown as any
    
    const validator = new Validator(body, __ListingSchema.rules)

    if(!validator.check()) {
        return {status: false, ...validator.errors}
    }

    const listing = state.listing_id ? await Listing.findById(state.listing_id) : null
    
    let uploadedImages: any[] = [];
    let featuredImage = null;

    if(listing){
        uploadedImages = (galleryFiles.length > 0) ? await Promise.all(galleryFiles.map(file => upload(file, 'listings/' + random()))) : listing.gallery
        featuredImage = image ? await upload(image, 'listings/'+ random() ) : listing.image
    }else{
        featuredImage = await upload(image, 'listings/'+ random() )
        uploadedImages = await Promise.all(galleryFiles.map(file => upload(file, 'listings/' + random())))
    }

    listing ? await Listing.findByIdAndUpdate(state.listing_id, {
        ...body,
        gallery: uploadedImages,
        image: featuredImage,
        status: (body.status == 'active')
    }) : await Listing.create({
        ...body,
        gallery: uploadedImages,
        image: featuredImage,
        status: (body.status == 'active')
    })

    return {status: true, message: "Listing Created Successfully!"};    
}