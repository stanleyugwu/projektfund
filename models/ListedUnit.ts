import mongoose from "mongoose";

const ListedUnitSchema = new mongoose.Schema({
    property: {type: mongoose.SchemaTypes.ObjectId, ref: 'Property', required: true},
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    unit: {type: mongoose.SchemaTypes.ObjectId, ref: 'Unit', required: true},
    units: {type: Number, required: true},
    unit_price: {type: Number, required: true},
    status: {type: String, required: true}
}, {timestamps: true})

export default mongoose.models?.ListedUnit ?? mongoose.model('ListedUnit', ListedUnitSchema)