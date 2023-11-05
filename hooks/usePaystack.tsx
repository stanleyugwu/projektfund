'use client'

import { verifyPurchase } from "@/api/property/purchase"
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

    const onSuccess = (transaction: any) => {
        if(transaction.status == "success"){
            verify(transaction.reference).then((res) => {
                if(res.status == true) {
                    setStatus('completed')
                    if(whenSuccessful) whenSuccessful(res.transaction)
                }
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