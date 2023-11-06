'use client'

import { useToast } from "@/components/ui/use-toast"
import { verify } from "@/services/payment"
import { IPaymentData } from "@/types/paystack"
import { useState } from "react"

type IPaymentStatus = 'initiated' | 'cancelled' | 'completed' | 'uncompleted' | null

interface IPaystackProps {
    whenSuccessful?: (transaction: any) => void
    whenCancelled?: () => void,
    whenInit?: () => void,
}

export default ({whenCancelled, whenSuccessful, whenInit}: IPaystackProps = {}) => {

    const [status, setStatus] = useState<IPaymentStatus>(null)
    const {toast} = useToast()

    const onSuccess = async (transaction: any) => {
        if(transaction.status == "success"){
            const response = await verify(transaction.reference)
            if(response.status == true) {
                setStatus('completed')
                
                // toast({
                //     title: "Transaction Successful",
                //     description: "Your transaction was completed successfully!"
                // })

                if(whenSuccessful) whenSuccessful(response.transaction)
            }else{
                toast({
                    variant: 'destructive',
                    title: "Transaction Error",
                    description: response.error
                })
            }
        }else{
            toast({
                variant: 'destructive',
                title: "Transaction Error",
                description: "Your transaction was not successful! Please try again."
            })
        }
        setStatus('uncompleted')
    }
    
    const onClose = () => {
        setStatus('uncompleted')

        if(whenCancelled)  whenCancelled()
    }

    const paystackInit = (payment: IPaymentData) => {
        if(whenInit) whenInit()
        // @ts-expect-error
        const popup = PaystackPop.setup({ ...payment, onClose, callback: (transaction) => onSuccess(transaction) })
        popup.openIframe()
    }

    return {paystackInit, paystackStatus: status}
}