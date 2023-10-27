import mongoose from "mongoose";

const UnitSchema = new mongoose.Schema({
    property_id: {type: String, required: true},
    user_id: {type: String, required: true},
    unit_id: {type: String},
    unit_cost: {type: String},
    units: {type: Number, required: true}
}, {timestamps: true})

export default mongoose.model('Unit', UnitSchema)