import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Metadata } from 'next'
import { Title } from '@/components/title'
import { singleProperty } from '@/server/property/list'
import { EditPropertyForm } from '../../(partials)/EditPropertyForm'

export const metadata: Metadata = {
    title: 'Edit Property',
}

export default async function ({ params }: any) {

    const property = await singleProperty(params.id)

    metadata.title = property.name

    return (
        <>
            <Title title='Create Property' />
            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className='p-10'>
                            <EditPropertyForm property={property} type='edit' />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
