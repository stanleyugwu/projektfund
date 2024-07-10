'use client'

import { deactivateProperty, deleteProperty } from '@/server/property/list'
import { Swal } from '@/components/Swal'
import { Button } from '@/components/ui/button'
import { useAsync } from '@/hooks/useAsync'
import { IProperty } from '@/types/property'
import Link from 'next/link'
import React, { useState } from 'react'

interface IPropertyDetailActionsProps {
    property: IProperty
}

export const PropertyDetailActions = ({property} : IPropertyDetailActionsProps) => {
    const [open, setOpen] = useState(false)
    
    const deactivate = useAsync(() => deactivateProperty(property._id), {
        onCompleted: () => {

        }
    })

    const handleDelete = useAsync(() => deleteProperty(property._id), {
        onCompleted: () => {
            setOpen(false)
        }
    })

    return (
        <>
            <div className="flex flex-wrap space-x-3">
                <Button asChild size={'sm'}>
                    <Link href={`/admin/properties/${property._id}/edit`}>Edit Property</Link>
                </Button>
                <Button variant={'outline'} onClick={deactivate.action} size={'sm'}>Deactivate Property</Button>
                <Button variant={'destructive'} onClick={() => setOpen(true)} size={'sm'}>Delete Property</Button>
                <Swal open={open} setOpen={setOpen} action={handleDelete.action} />
            </div>
        </>
    )
}
