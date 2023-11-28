import { Title } from '@/components/title'
import { Card, CardContent } from '@/components/ui/card'
import { Metadata } from 'next'
import React from 'react'
import { EditPropertyForm } from '../(partials)/EditPropertyForm'
import { singleProperty } from '@/api/property/list'

export const metadata : Metadata = {
    title: 'Edit Property'
}

export default async function ({params} : any) {
    const property = await singleProperty(params.id)

    return (
        <>
            <Title title='Edit Property' />

            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className='p-10'>
                            <EditPropertyForm  property={property} />
                        </CardContent>
                    </Card>
                </div>
            </div>

        </>
    )
}
