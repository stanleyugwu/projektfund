'use client'

import { deactivateListing, deleteListing } from '@/api/listings/list'
import { Naira } from '@/components/naira'
import { TableRow, TableCell } from '@/components/ui/table'
import { useAsync } from '@/hooks/useAsync'
import { IProperty } from '@/types/property'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import React, { useState } from 'react'
import { deactivateProperty, deleteProperty } from '@/api/property/list'
import { Swal } from '@/components/Swal'

interface IPropertyItemProps {
    property: IProperty
}

export const PropertyItem = ({property} : IPropertyItemProps) => {
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

    const initDelete = () => {
        setOpen(true)
        // handleDelete.action()
    }

    return (
        <TableRow key={property.id}>
            <TableCell className="w-[400px]">{property.name}</TableCell>
            <TableCell>{property.units.toLocaleString()}</TableCell>
            <TableCell><Naira />{property.unit_price.toLocaleString()}</TableCell>
            <TableCell >$250.00</TableCell>
            <TableCell>
            <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <span role='button' onClick={deactivate.action}>Deactivate</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <span role='button' onClick={initDelete}>Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Swal open={open} setOpen={setOpen} action={handleDelete.action} />
            </TableCell>
        </TableRow>
    )
}
