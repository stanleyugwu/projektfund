'use server'

import User from "@/models/User";
import database from "@/services/database";
import { Verification } from "@/services/verification";
import moment from "moment";
import mongoose from "mongoose";

export async function veifyEmail (prevState: any, formData: FormData) {
    await database()

    const body = Object.fromEntries(formData.entries())

    const verification = new Verification();
    const user = await User.findOne({email: body.email})

    if(!user) {
        return {status: false, error: "No user exists with email address " + body.email}
    }
    
    const [status, message] = await verification.decode(body.token as string, 'id', user.id) 

    if(!status) {
        return {status: false, error: message}
    }

    user.email_verified_at = moment().toLocaleString()
    await user.save()

    return {status: true, message: "Email Address verified successfully"}
}