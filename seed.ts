import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import moment from "moment";

const Wallet = new mongoose.Schema({
    main_bal: {type: Number, required: true, default: 0},
    avail_bal: {type: Number, required: true, default: 0},
    interest: {type: Number, required: true, default: 0},
    pending_bal: {type: Number, required: true, default: 0},
}, {timestamps: true})

const UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false},
    phone: {type: String},
    email_verified_at: {type: String},
    role: {type: String, default: 'user'},
    avatar: {type: String},
    wallet: {type: Wallet, required: true, default: {
        avail_bal: 0,
        interest: 0,
        main_bal: 0,
        pending_bal: 0
    }},
    status: {type: String, required: true, default: 'active'}
}, {timestamps: true})

async function createAdmin () {
    await mongoose.connect("mongodb://127.0.0.1:27017/projectfund")
    const password = bcrypt.hashSync('1234567890', bcrypt.genSaltSync(10))
    const user = mongoose.model('User', UserSchema)
    await user.create({
        firstname: 'Test',
        lastname: 'Admin',
        email: 'admin@localhost.com',
        password: password,
        email_verified_at: moment(),
        role: 'super admin'
    })

    console.log("Admin Created Successfully!");
}

createAdmin()