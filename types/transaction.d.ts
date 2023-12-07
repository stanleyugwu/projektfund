import { IUser } from "./user"

export interface ITransaction {
    id: string
    user: string | IUser
    amount: number 
    transactable?: any
    transactable_type?: string
    purpose: string
    status?: IStatus
    reference: string
    payment_method?: string
    type: string
    createdAt: string
}