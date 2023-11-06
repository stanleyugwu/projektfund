import { NextResponse, type NextRequest } from "next/server";
import database from "./services/database";

export async function middleware(req: NextRequest){
    // await database()
    return NextResponse.next();
}