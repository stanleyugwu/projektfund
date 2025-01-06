import User from "@/models/User";
import database from "@/services/database";
import moment from "moment";
import bcrypt from 'bcryptjs'
import Banks from "@/models/Banks";
import { fetchBanks } from "@/services/payment";

export default (async () => {
    await database()

    const admin = await User.findOne({email: 'admin@localhost.com'})
    const banks = await Banks.find()

    if(!admin) {
        const password = bcrypt.hashSync('1234567890', bcrypt.genSaltSync(10))
        
        await User.create({
            firstname: 'Test',
            lastname: 'Admin',
            email: 'admin@localhost.com',
            password: password,
            email_verified_at: moment(),
            role: 'super admin'
        })
    }

    if(banks.length < 0){
        await fetchBanks()
    }

    return "Database Seeded Successfully!"
})()