import roles from "@/lib/roles";
import { status } from "@/lib/status";
import ListedUnit from "@/models/ListedUnit";
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
    return JSON.parse(JSON.stringify(users));
}

export async function getUser(user_id: string) {
    await database()
    const user = await User.findById(user_id)

    if(!user) return null;

    return JSON.parse(JSON.stringify(user));
}

export async function getUserTransactions(user_id: string) {
    await database()
    const user = await User.findById(user_id)
    if(!user) return null;

    const transactions = await Transactions.find({user: user_id, status: status.success})

    return JSON.parse(JSON.stringify(transactions));
}

export async function getUserPortfolio(user_id: string) {
    await database()
    const user = await User.findById(user_id)
    if(!user) return null;
    const data = await Unit.find({user: user.id}).populate('property user listing')
    return JSON.parse(JSON.stringify(data))
}


export async function getUserListedUnits(user_id: string) {
    await database()
    const user = await User.findById(user_id)
    await Unit.find()
    const listedUnits = await ListedUnit.find({user: user_id}).populate('property user unit')
    return JSON.parse(JSON.stringify(listedUnits))
}

