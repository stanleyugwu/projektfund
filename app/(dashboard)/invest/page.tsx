'use server'

import { listProperties } from '@/api/property/list'
import { PropertyItem } from '@/components/partials/property/PropertyItem'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default async function Invest() {

    const properties = await listProperties()

    return (
        <>
            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className='py-10' >
                            { properties.map((property) => <PropertyItem property={property} />) }
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
