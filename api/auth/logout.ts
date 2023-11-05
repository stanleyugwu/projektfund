'use server'

import { authUser } from "@/services/auth"
import { NextURL } from "next/dist/server/web/next-url"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export async function handleLogout (){
    const user = await authUser()
    const cookieStore = cookies()
    cookieStore.delete('authorization')
    return redirect('login')
    // const url = new NextURL('/login')
    // return NextResponse.redirect(url)
}