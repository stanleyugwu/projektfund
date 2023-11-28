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
    status: {type: Boolean, required: true, default: true},
    gallery: {type: mongoose.SchemaTypes.Mixed, of: String},
    type: {type: String, required: true},
    unit_price: {type: Number, required: true},
    available_units: {type: Number, required: true},
    units: {type: Number, required: true},
    video: {type: String}
}, {timestamps: true})

// PropertySchema.virtual('listedUnits', {
//     ref: 'ListedUnit',
//     localField: '_id',
//     foreignField: 'property'
// })

export default mongoose.models?.Property ?? mongoose.model('Property', PropertySchema)