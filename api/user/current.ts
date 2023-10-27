'use server'

import User from "@/models/User"
import database from "@/services/database"
import { cookies } from 'next/headers'

export async function fetchUser(){
    await database()
    
    const cookieStore = cookies()
    const id = cookieStore.get('authorization')
    if(!id) return null;

    const user = await User.findById(id.value)
    return JSON.parse(JSON.stringify(user))
}