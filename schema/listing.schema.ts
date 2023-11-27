import { ISchema } from "@/types/validator";

export const __ListingSchema : ISchema = {
    rules : {
        title: ['required', 'string'],
        type: ['required', 'string', 'in:For Sale,For Rent'],
        duration: ['string'],
        price: ['required', 'numeric'],
        image: ['required', 'image'],
        description: ['required', 'string'],
        address: ['string'],
        city: ['required', 'string'],
        state: ['required', 'string'],
        video: ['string'],
        status: ['required', 'string']
    },

    attributes: {

    }
}

export const __UpdateListingSchema : ISchema = {
    rules : {
        title: ['required', 'string'],
        type: ['required', 'string', 'in:For Sale,For Rent'],
        duration: ['string'],
        price: ['required', 'numeric'],
        // image: [''],
        description: ['required', 'string'],
        address: ['string'],
        city: ['required', 'string'],
        state: ['required', 'string'],
        video: ['string'],
        status: ['required', 'string']
    },

    attributes: {

    }
}