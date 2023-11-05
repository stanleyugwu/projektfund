import User from "@/models/User";
import database from "@/services/database";
import moment from "moment";
import bcrypt from 'bcryptjs'

export default async () => {
    await database()

    const admin = await User.findOne({email: 'admin@localhost.com'})
    if(admin) return "Database already seeded";

    const password = bcrypt.hashSync('1234567890', bcrypt.genSaltSync(10))
    
    await User.create({
        firstname: 'Test',
        lastname: 'Admin',
        email: 'admin@localhost.com',
        password: password,
        email_verified_at: moment(),
        role: 'super admin'
    })

    return "Database Seeded Successfully!"
}