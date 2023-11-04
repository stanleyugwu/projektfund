'use server'

import { authUser } from "@/services/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function handleLogout (){
    const user = await authUser()
    const cookieStore = cookies()
    cookieStore.delete('authorization')
    return redirect('login')
}