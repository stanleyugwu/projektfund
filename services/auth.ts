'use server'

import User from "@/models/User";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authUser(){
    const cookieStore = cookies()
    const user_id = cookieStore.get('authorization')
    if(!user_id) return redirect('/login');
    const user = await User.findById(user_id.value)
    if(!user) return redirect('/login')
    return user;
}