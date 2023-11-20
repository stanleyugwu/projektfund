import mongoose from 'mongoose'

const ListingSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    duration: {type: String},
    price: {type: Number},
    gallery: {type: mongoose.SchemaTypes.Mixed, of: String},
    image: {type: String},
    description: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    video: {type: String},
    status: {type: Boolean, default: true}
}, {timestamps: true})

export default mongoose.models?.Listing ?? mongoose.model('Listing', ListingSchema)
