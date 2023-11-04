import { Loader2Icon } from 'lucide-react'
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function Loader({loading = true}) {
    return (
        loading ? <Loader2Icon className="w-4 h-4 mr-2 animate-spin" /> : <></>
    )
}

export function FormLoader({children}: {children?: any}){
	const {pending}  = useFormStatus()
	return pending ? children ?? <Loader /> : <></>
}