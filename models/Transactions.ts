import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
    user_id: {type: String, required: true},
    reference: {type: String},
    amount: {type: Number, required: true},
    transactable: {type: mongoose.Schema.Types.ObjectId, refPath: 'transactable_type', required: true},
    transactable_type: {type: String},
    purpose: {type: String},
    status: {type: String, required: true}
}, {timestamps: true})

export default mongoose.models?.Transaction ?? mongoose.model('Transaction', Transaction)