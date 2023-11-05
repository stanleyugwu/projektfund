import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    reference: {type: String},
    amount: {type: Number, required: true},
    transactable: {type: mongoose.Schema.Types.ObjectId, refPath: 'transactable_type'},
    transactable_type: {type: String},
    type: {type: String},
    purpose: {type: String},
    status: {type: String, required: true}
}, {timestamps: true})

export default mongoose.models?.Transaction ?? mongoose.model('Transaction', Transaction)