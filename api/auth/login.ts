'use server'

import roles from "@/lib/roles";
import User from "@/models/User";
import database from "@/services/database";
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";


export async function login (prevState: any, formData: FormData)  {
    await database()
    
    const body = Object.fromEntries(formData.entries())
    const user = await User.findOne({email: body.email}).select('+password')

    if(!user) {
        return {status: false, email: 'Incorrect Password or Email Address'}
    }

    if(!bcrypt.compareSync(body.password as string, user.password)) {
        return {status: false, password: 'Incorrect Password or Email Address'}
    }

    cookies().set('authorization', user.id)

    // if(!user.email_verified_at) {
    //     return {status: false, error: 'Please verify your email address!'}
    // }

    return user.role == roles.user ? redirect('/dashboard') : redirect('/admin')
}