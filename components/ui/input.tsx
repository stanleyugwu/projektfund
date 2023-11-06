import * as React from "react"

import { cn } from "@/lib/utils"
import { Naira } from "../naira"
import { isNumber } from "lodash"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// interface InputErrorProps extends HTMLParagraphElement {
//   message: string
// }

export const InputError = ({message} : {message: string}) => {
    return (
        <p className='mt-1 text-sm text-red-500'>{message}</p>
    )
}

interface InputPriceProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const InputPrice = ({className, placeholder, type, name, ...props} : InputPriceProps) => {

  const [amount, setAmount] = React.useState('')

  const price = React.useMemo(() => {
    const format = amount.split(',').join('')
    const int = parseInt(format)
    const isNum = isNumber(int) && (!Number.isNaN(int))
    return (amount && isNum) ? parseInt(format).toLocaleString() : ''
  }, [amount])

  return (
    <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm"><Naira /></span>
        </div>
        <Input type="text" value={price} onChange={(e) => setAmount(e.currentTarget.value)} className="block w-full px-3 py-2 text-gray-900 pl-7 input-number" placeholder="0.00" {...props} />
        <input type="hidden"  name={name} value={price.split(',').join('') } />
    </div>
  )
}
