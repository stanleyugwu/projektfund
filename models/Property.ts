import { IProperty } from "@/types/property";
import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema<IProperty>({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    address: {type: String, required: true},
    image: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true, default: 'available'},
    gallery: {type: mongoose.SchemaTypes.Mixed, of: String},
    type: {type: String, required: true},
    unit_price: {type: Number, required: true},
    units: {type: Number, required: true},
    video: {type: String}
}, {timestamps: true})

export default mongoose.models?.Property ?? mongoose.model('Property', PropertySchema)