'use client'

import { InvestedPropertyItem } from '@/components/partials/property/InvestedPropertyItem'
import { useApp } from '@/context/AppContext'
import React from 'react'

export const ShowPortfolio = ({portfolio} : {portfolio: any[]}) => {
    
    useApp({
        title: "Portfolio"
    })

    return (
        <>
            { 
                portfolio.map((item: any) => <InvestedPropertyItem key={item._id} unit={item} />)
            }    
        </>
    )
}
