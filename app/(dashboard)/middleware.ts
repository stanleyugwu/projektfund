import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest){
    console.log("Awesome")
    return NextResponse.next();
}