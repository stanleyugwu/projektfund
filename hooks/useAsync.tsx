'use client'

import { useToast } from '@/components/ui/use-toast'
import React, { useEffect, useState } from 'react'

interface IUseAsync {
    onSuccess?: () => any,
    onFailed?: () => any,
    onCompleted?: () => any
}

export function useAsync (callback: () => Promise<any>, onComplete: IUseAsync | null = null) {
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState<any>(null)

    const { toast } = useToast()

     const action = () => {
        setLoading(true)
        
        callback().then((res: any) => {
            setRes(res)
            if(res?.message) toast({
                title: 'Success',
                description: res.message
            })
            if(onComplete?.onSuccess) onComplete.onSuccess()
        }).catch(err => {
            setRes(err)

            if(err?.message) toast({
                title: 'Error',
                description: err.message,
                variant: 'destructive'
            })

            if(onComplete?.onFailed) onComplete.onFailed()
        }).finally(() => {
            setLoading(false)
            if(onComplete?.onCompleted) onComplete.onCompleted()
        })
     }

    return {loading, res, action}
}
