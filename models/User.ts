import { IUser } from "@/types/user";
import { Timestamp } from "mongodb";
import mongoose from "mongoose";
import Wallet from "./Wallet";
import { Status } from "@/casts/status";
import roles from "@/lib/roles";

const UserSchema = new mongoose.Schema<IUser>({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false},
    phone: {type: String},
    email_verified_at: {type: String},
    role: {type: String, default: roles.user},
    avatar: {type: String},
    wallet: {type: Wallet, required: true, default: {
        avail_bal: 0,
        interest: 0,
        main_bal: 0,
        pending_bal: 0
    }},
    status: {type: String, required: true, default: 'active'}
}, {timestamps: true})

export default mongoose.models?.User ?? mongoose.model('User', UserSchema)