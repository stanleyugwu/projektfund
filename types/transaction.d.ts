import { IUser } from "./user"

export interface ITransaction {
    id: string
    user: string | IUser
    amount: number 
    transactable?: string 
    transactable_type?: string
    purpose: string
    status?: IStatus
    reference: string
    type: string
}