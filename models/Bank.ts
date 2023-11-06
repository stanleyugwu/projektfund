import { IUserBank } from "@/types/banks";
import mongoose from "mongoose";

export default new mongoose.Schema<IUserBank>({
    account_name: {type: String},
    bank_name: {type: String, },
    bank_code: {type: Number},
    account_number: {type: String},
}, {timestamps: true})