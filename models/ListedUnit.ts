import mongoose from "mongoose";

/**
 * This would be for units listed from units purchased by users.
 * When a user purchases units off a property it's stored in units collection, when he lists
 * some of those units for sale, the listed units are what is handled by this model
 */
const ListedUnitSchema = new mongoose.Schema({
    property: {type: mongoose.SchemaTypes.ObjectId, ref: 'Property', required: true},
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    unit: {type: mongoose.SchemaTypes.ObjectId, ref: 'Unit', required: true},
    units: {type: Number, required: true},
    available_units: {type: Number, required: true}, 
    unit_price: {type: Number, required: true},
    status: {type: String, required: true}
}, {timestamps: true})

export default mongoose.models?.ListedUnit ?? mongoose.model('ListedUnit', ListedUnitSchema)