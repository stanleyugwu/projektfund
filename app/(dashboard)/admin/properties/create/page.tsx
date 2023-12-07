import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Metadata } from 'next'
import { EditPropertyForm } from '../(partials)/EditPropertyForm'
import { Title } from '@/components/title'

export const metadata: Metadata = {
    title: 'Create Property',
}

export default function () {

    

    return (
        <>
            <Title title='Create Property' />
            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className='p-10'>
                            <EditPropertyForm  />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
