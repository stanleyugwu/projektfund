import { status } from "@/lib/status";
import Token from "@/lib/token";
import Tokens from "@/models/Tokens";
import { AppActions } from "@/types/actions";
import moment, { now } from "moment";
import mongoose from "mongoose";

interface IEncodedParams {
    tokenable: string
    tokenable_type: string
    expires_at?: string,
    action: AppActions
}

export class Verification {
    async encode(encoded: IEncodedParams){
        const code = await Token.random('tokens', 'code');
        const token = btoa(code)

        const verification = await Tokens.create({
            ...encoded, code,
            status: status.unused,
            expires_at: encoded.expires_at ?? moment().add(10, 'minutes') 
        })

        return { verification, token }
    }

    async decode(token: string, key: string = '', value: string = ''){
        const decoded = atob(token)
        const verification = await Tokens.findOne({code: decoded}).populate('tokenable')
        if(!verification) return [false, 'Invalid Verification Token']

        if(key){
            if(!value) throw new Error("Value is required when key is provided");
            if(!Object.hasOwn(verification.tokenable, key)) return [false, 'Invalid Token'];
            if((verification.tokenable as unknown as Record<string, string>)[key] !== value) return [false, 'Invalid Token'];
        }

        if(moment(verification.expires_at).isAfter(now())) return [false, 'Verification Token Expired'];

        await this.use(verification.code)
        return [true, '', verification.tokenable]
    }

    async use(token: string){
        await Tokens.findOneAndUpdate({code: token}, {status: status.used})
    }
}