import roles from "@/lib/roles";
import Transactions from "@/models/Transactions";
import Unit from "@/models/Unit";
import User from "@/models/User";
import { authUser } from "@/services/auth";
import database from "@/services/database";
import { redirect } from "next/navigation";

export async function listUsers() {
    await database()
    const user = await authUser()
    if(user.role !== roles.superadmin) return redirect('/login')

    await Unit.find()
    await Transactions.find()
    const users = await User.find({role: roles.user}).populate('units transactions')
    // transactions listedUnits
    // console.log()
    return JSON.parse(JSON.stringify(users));
}