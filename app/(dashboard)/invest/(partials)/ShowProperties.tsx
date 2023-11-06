'use client'

import { PropertyItem } from '@/components/partials/property/PropertyItem'
import { useApp } from '@/context/AppContext'
import { IProperty } from '@/types/property'
import React from 'react'

interface IShowProperties {
    properties: IProperty[]
}

export const ShowProperties = ({properties} : IShowProperties) => {
    useApp({
        title: "Invest"
    })

    return (
        <>
            <div>
                { properties.map((property) => <PropertyItem property={property} />) }
            </div>
        </>
    )
}
