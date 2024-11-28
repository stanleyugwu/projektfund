'use client'

import { useToast } from "@/components/ui/use-toast"
import { verify } from "@/services/payment"
import { ITransaction } from "@/types/transaction"
import { useFlutterwave } from "flutterwave-react-v3"
import { FlutterWaveResponse, FlutterwaveConfig } from "flutterwave-react-v3/dist/types"
import { useEffect, useState } from "react"

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'

type IPaymentStatus = 'initiated' | 'cancelled' | 'completed' | 'uncompleted' | null

interface IFlutterwaveProps {
    onSuccessful?: (transaction: ITransaction) => void
    onCancelled?: () => void,
    onInit?: () => void,
}

const useFlutterWave = ({ onCancelled, onSuccessful, onInit }: IFlutterwaveProps = {}) => {

    const [status, setStatus] = useState<IPaymentStatus>(null)
    const { toast } = useToast()

    const [state, action] = useFormState(verify, {
        status: false,
        message: '',
        errors: {}
    })

    useEffect(() => {
        if (state.status == true) {
            setStatus('completed')
            if (onSuccessful) onSuccessful(state.transaction)
        } else {
            if (state.error) {
                toast({
                    variant: 'destructive',
                    title: "Transaction Error",
                    description: state.error
                })
            }
        }
    }, [state])

    const onSuccess = async (transaction: FlutterWaveResponse) => {
        if (transaction.status == "completed" || transaction.status === "successful") {
            const data = new FormData()
            data.set('reference', transaction.tx_ref)
            action(data)
        } else {
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

        if (onCancelled) onCancelled()
    }

    const flutterwaveInit = (payment: FlutterwaveConfig) => {
        if (onInit) onInit()
        const init = useFlutterwave(payment);
        try {
            init({
                callback: onSuccess,
                onClose
            })
        } catch(error){
            console.log(error)
        }
    }

    return { flutterwaveInit, paymentStatus: status }
}

export default useFlutterWave