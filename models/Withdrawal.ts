import { status } from "@/lib/status";
import mongoose from "mongoose";

const Withdrawal = new mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true},
    transaction: {type: mongoose.SchemaTypes.ObjectId, ref: 'Transaction'},
    amount: {type: Number, required: true},
    status: {type: String, required: true, default: status.pending}
}, {timestamps: true})

export default mongoose.models?.Withdrawal ?? mongoose.model('Withdrawal', Withdrawal)