import React from 'react'
import { cn } from "@/lib/utils"
import {DatabaseZap} from 'lucide-react'

export interface NoDataProps
  extends React.BaseHTMLAttributes<HTMLDivElement>{
  text?: string
}

const NoData = React.forwardRef<HTMLDivElement, NoDataProps>(
  ({ className, text = 'No data available, check back later', ...props }, ref) => {
    return (
      <div ref={ref} className={cn('w-full flex flex-col justify-center items-center',className)}>
        <DatabaseZap className='text-gray-500 w-10 h-10'/>
        <p className='text-gray-300'>{text}</p>
      </div>
    )
  }
)
NoData.displayName = "NoData"

export default NoData