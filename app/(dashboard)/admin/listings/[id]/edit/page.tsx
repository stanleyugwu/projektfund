import { Card, CardContent } from '@/components/ui/card'

import React from 'react'
import { Title } from '@/components/title'
import { Metadata } from 'next'
import { singleListing } from '@/api/listings/list'
import { ListingEdit } from '../../(partials)/ListingEdit'

export const metadata: Metadata = {
    title: 'Edit Listing',
}

export default async function EditListing ({params} : any) {
    const listing = await singleListing(params.id)
    return (
        <>
            <Title title='Edit Listing' />
            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className='p-10'>
                            <ListingEdit listing={listing} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
