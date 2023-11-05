import roles from "@/lib/roles";
import User from "@/models/User";
import { authUser } from "@/services/auth";
import database from "@/services/database";
import { redirect } from "next/navigation";

export async function listUsers() {
    await database()
    const user = await authUser()
    if(user.role !== roles.superadmin) return redirect('/login')

    const users = await User.find().populate('units transactions listedUnits')
    console.log(users)
    return users;
}