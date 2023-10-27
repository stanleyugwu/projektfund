import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest){
    
    return NextResponse.next();
}