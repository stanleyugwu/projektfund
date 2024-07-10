'use server'

import connect from "@/services/database";
import _, { random } from 'lodash'
import mailer from "@/lib/mailer";
import { Verification } from "@/services/verification";
import { template } from "@/lib/templates";
import { IUser } from "@/types/user";
import Validator from '@/lib/validator'
import { __RegisterSchema } from "@/schema/register.schema";
import { redirect, } from "next/navigation";
import bcrypt from 'bcryptjs'
import mongoose from "mongoose";
import User from "@/models/User";

export async function register (prevState: any, formData: FormData) {
    await connect()

    const data = Object.fromEntries(formData.entries())
    
    const validator = new Validator(data, __RegisterSchema.rules)
    validator.setAttributeNames(__RegisterSchema.attributes as Validator.AttributeNames)
    if(!validator.check()) return {status: false, ...validator.errors}

    const salt = bcrypt.genSaltSync(10); 
    const password = bcrypt.hashSync(data.password.toString(), salt)
    
    const user = await User.create({...data, password})
    
    const verification = new Verification()
    
    const { token } = await verification.encode({
        action: 'email-verification',
        tokenable: user.id,
        tokenable_type: 'User'
    })
    
    const html = template<{user: IUser, code: string}>('emails/email-verification.template', {user, code: token})
    await mailer.sendMail({html, to: user.email,})
    return redirect('/login')
    // return {status: true, message: 'Registration Successful. Please verify your email!'}
}