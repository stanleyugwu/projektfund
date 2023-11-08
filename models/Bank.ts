import { IUserBank } from "@/types/banks";
import mongoose from "mongoose";

export default new mongoose.Schema({
    account_name: {type: String},
    // bank: {type: mongoose.SchemaTypes.ObjectId, ref: 'Banks', required: true},
    bank_code: {type: Number, },
    account_number: {type: String},
}, {timestamps: true})