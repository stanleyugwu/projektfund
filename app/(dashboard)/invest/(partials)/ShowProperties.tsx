import { PropertyItem } from '@/components/partials/property/PropertyItem'
import { IProperty } from '@/types/property'
import React from 'react'

interface IShowProperties {
    properties: IProperty[]
}

export const ShowProperties = ({properties} : IShowProperties) => {
    return (
        <>
            <div>
                { properties.map((property) => <PropertyItem property={property} />) }
            </div>
        </>
    )
}
