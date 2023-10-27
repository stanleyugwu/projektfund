import { IWallet } from "@/types/user";
import mongoose from "mongoose";

export default new mongoose.Schema<IWallet>({
    main_bal: {type: Number, required: true, default: 0},
    avail_bal: {type: Number, required: true, default: 0},
    interest: {type: Number, required: true, default: 0},
    pending_bal: {type: Number, required: true, default: 0},
}, {timestamps: true})