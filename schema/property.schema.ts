import { ISchema } from "@/types/validator";

export const __PropertySchema : ISchema = {
    rules: {
        name: ['required', 'string'],
        price: ['required', 'numeric'],
        address: 'required|string',
        image: ['required', 'image'],
        city: ['required', 'string'],
        country: ['required', 'string'],
        description: ['required'],
        // gallery: [''],
        type: ['required'],
        unit_price: ['required', 'numeric'],
        units: ['required', 'numeric'],
        video: 'url',
        status: 'required|in:active,inactive'
    },
    
    attributes: {
        name: 'Property Name',
        price: "Price",
        address: 'Address',
        image: 'Featured Image',
        city: 'City',
        country: 'Country',
        description: 'Description',
        gallery: 'Property Images',
        type: 'Property Type',
        unit_price: 'Unit Cost',
        units: 'Units',
        video: 'Video'
    }
}

export const __UpdatePropertySchema : ISchema = {
    rules: {
        name: ['required', 'string'],
        price: ['required', 'numeric'],
        address: 'required|string',
        // image: ['required', 'image'],
        city: ['required', 'string'],
        country: ['required', 'string'],
        description: ['required'],
        // gallery: [''],
        type: ['required'],
        unit_price: ['required', 'numeric'],
        units: ['required', 'numeric'],
        video: 'url',
        status: 'required|in:active,inactive'
    },
    
    attributes: {
        name: 'Property Name',
        price: "Price",
        address: 'Address',
        image: 'Featured Image',
        city: 'City',
        country: 'Country',
        description: 'Description',
        gallery: 'Property Images',
        type: 'Property Type',
        unit_price: 'Unit Cost',
        units: 'Units',
        video: 'Video'
    }
}