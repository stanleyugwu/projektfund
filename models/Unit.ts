import mongoose from "mongoose";

const UnitSchema = new mongoose.Schema({
    property: {type: mongoose.SchemaTypes.ObjectId, ref: 'Property', required: true},
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    unit: {type: mongoose.SchemaTypes.ObjectId, ref: 'Unit'},
    unit_cost: {type: String},
    units: {type: Number, required: true},
    status: {type: String, required: true}
}, {timestamps: true})

export default mongoose.models?.Unit ?? mongoose.model('Unit', UnitSchema)