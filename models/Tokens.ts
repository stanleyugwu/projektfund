import { Actions } from "@/casts/actions";
import { Status } from "@/casts/status";
import { IUser } from "@/types/user";
import mongoose from "mongoose";

// @ts-ignore
mongoose.Schema.Types.Actions = Actions;

const TokenSchema = new mongoose.Schema({
    tokenable: {type: mongoose.SchemaTypes.ObjectId, refPath: 'source', required: true },
    tokenable_type: {type: String, required: true},
    code: {type: String, required: true},
    status: {type: String, required: true},
    expires_at: {type: String, required: true},
    action: {type: Actions, required: true}
}, {timestamps: true})

export default mongoose.models?.Tokens ?? mongoose.model('Tokens', TokenSchema)