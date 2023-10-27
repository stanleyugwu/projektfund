import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
    user_id: {type: String, required: true},
    reference: {type: String},
    amount: {type: Number, required: true},
    purpose: {type: String},
    status: {type: Number, required: true}
}, {timestamps: true})

export default mongoose.model('Transaction', Transaction)