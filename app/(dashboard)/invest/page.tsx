'use server'

import { listProperties } from '@/api/property/list'
import { PropertyItem } from '@/components/partials/property/PropertyItem'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import { ShowProperties } from './(partials)/ShowProperties'

export default async function Invest() {

    const properties = await listProperties()

    return (
        <>
            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className='py-10 space-y-5' >
                            <div className="flex items-center w-full space-x-2">
                                <Input type="email" placeholder="Search for available properties" />
                            </div>

                            <ShowProperties properties={properties} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
