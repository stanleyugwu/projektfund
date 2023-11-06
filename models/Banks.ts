import mongoose from 'mongoose'

const BankSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    code: {type: String, required: true, unique: true},
    status: {type: Boolean, default: true}
}, {timestamps: true})

export default mongoose.models?.Bank ?? mongoose.model('Bank', BankSchema)
