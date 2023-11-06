'use server'

import Property from "@/models/Property"
import { __PropertySchema } from "@/schema/property.schema"
import database from "@/services/database"
import { IProperty } from "@/types/property"
import Validator from '@/lib/validator'
import { upload } from "@/lib/upload"
import _ from "lodash"
import { random } from "@/lib/string"

export async function createProperty(state: any, data: FormData){
    await database()

    const galleryFiles = data.getAll('gallery')
    const image = data.get('image')

    const body = Object.fromEntries(data.entries()) as unknown as any

    const validator = new Validator(body, __PropertySchema.rules)
    validator.setAttributeNames(__PropertySchema.attributes as Validator.AttributeNames)

    if(! validator.check()) {
        return {status: false, ...validator.errors}
    }

    const date = new Date()
    const uploadedImages: any[] = await Promise.all(galleryFiles.map(file => upload(file, 'properties/' + random())))
    const featuredImage = await upload(image, 'properties/'+ random() )

    body.id ? await Property.findByIdAndUpdate(body.id, {
        ...body,
        gallery: uploadedImages,
        image: featuredImage
    }) : await Property.create({
        ...body,
        gallery: uploadedImages,
        image: featuredImage,
        avalable_units: body.units
    })

    return {status: true, message: "Property Created Successfully!"};    
}