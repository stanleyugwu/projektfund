'use server'

import Transactions from "@/models/Transactions"
import response from "@/lib/response"
import { IPaymentData } from "@/types/paystack"
import { ITransaction } from "@/types/transaction"
import { IUser } from "@/types/user"
import { authUser } from "./auth"
import database from "./database"
import { status } from "@/lib/status"
import Banks from "@/models/Banks"
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types"

const baseUrl = process.env.PAYSTACK_BASE_URL
const secretKey = process.env.PAYSTACK_SECRET
const publicKey = process.env.PAYSTACK_PUBLIC

const flutterwaveBaseUrl = process.env.FLUTTERWAVE_BASE_URL;
const flutterwaveSecretKey = process.env.FLUTTERWAVE_SECRET_KEY;
const flutterwavePublicKey = process.env.FLUTTERWAVE_PUBLIC_KEY;

export const fetchBanks = async () => {
    await database()
    const url = `${baseUrl}/bank`

    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+secretKey}
    })

    if(req.ok) {
        const data = await req.json()
        if(data.status){
            const banks : any[] = data.data
            await Promise.all(banks.map((item => {
                return Banks.create({   
                    name: item.name,
                    code: item.code
                })
            })))
        }
    }
}

export const fetchFlutterwaveBanks = async () => {
    await database()
    const url = `${flutterwaveBaseUrl}/banks/NG`

    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+flutterwaveSecretKey}
    })

    if(req.ok) {
        const data = await req.json()
        if(data.status === 'success'){
            const banks : any[] = data.data
            return banks
        }
    }

    return []
}

export const getBanks = async () => {
    const banks = await Banks.find()
    return JSON.parse(JSON.stringify(banks))
}

export const resolveBank = async (data: {account_no: string, bank_code: number}) => {
    const url = `${baseUrl}/bank/resolve`
    
    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+secretKey},
        body: JSON.stringify(data),
        method: 'POST'
    })

    if(req.ok) {
        const data = await req.json()
        if(data.status) {

        }
    }
}

export const setPaystackPaymentData = (transaction: ITransaction) : IPaymentData => {
    const amount = transaction.amount * 100
    return {
        amount,
        email: (transaction.user as IUser).email,
        key: publicKey!,
        ref: transaction.reference
    }
}

export const setFlutterwavePaymentData = (transaction: ITransaction) : FlutterwaveConfig => {
    return {
        customer:{
            email: (transaction.user as IUser).email,
            name: '',
            phone_number:''
        },
        public_key:flutterwavePublicKey!,
        payment_options:'card, ussd, banktransfer',
        amount:transaction.amount,
        tx_ref: transaction.reference,
        currency:"NGN",
        customizations:{
            description:'Wallet funding',
            logo:'',
            title:'Wallet funding'
        }
    }
}

export async function verify(state: any, formData: FormData){
    await database()
    const user = await authUser();
    const reference = formData.get('reference') as string
    const transaction = await Transactions.findOne({reference})
    if(!transaction) return {status: false, error: 'The requested transaction was not found!'}
    if(transaction.user != user.id) return {status: false, error: 'The requested transaction does not belong to the current user. Please try again or contact support.'}

    const url = `${flutterwaveBaseUrl}/transactions/verify_by_reference?tx_ref=${reference}`
    
    const req = await fetch(url, {
        headers: {"Authorization": "Bearer "+flutterwaveSecretKey}
    })

    const error = (message:string) => response.error().json(message)
    
    if(req.ok) {
        const {data} = await req.json()

        if(data.amount < transaction.amount) return error('You paid lesser than you specified, contact support')
        if(data.tx_ref != transaction.reference) return error('Veridication failed. Incorrect transaction reference')

        if(data.status === 'successful') {
            transaction.status = status.success
            await transaction.save()                
            console.timeStamp('Transaction Verified')
            return response.success().json({transaction: JSON.parse(JSON.stringify(transaction))})
        }    
    }

    return error("The payment could not be verified at the moment! Please contact support.")
} 