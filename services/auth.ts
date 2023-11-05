'use server'

import User from "@/models/User";
import { IRoles } from "@/types/user";
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

export async function checkUserRole(role: IRoles){
    const user = await authUser()
    if(user.role != role) return redirect('/login')
    return user; 
}