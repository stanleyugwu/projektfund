import roles from "@/lib/roles"
import { IStatus } from "./status"

export interface IUser {
    _id: string
    firstname: string,
    lastname: string,
    phone: string
    email: string
    password: string
    email_verified_at: string
    created_at: string
    updated_at: string,
    role: IRoles
    avatar: string
    wallet: IWallet
    status: IStatus
}

export type IRoles = 'admin' | 'user' | 'super admin'

export interface IWallet {
    main_bal: number
    avail_bal: number
    interest: number
    pending_bal: number
}