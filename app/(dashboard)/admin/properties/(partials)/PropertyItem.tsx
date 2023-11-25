'use client'

import { deactivateListing, deleteListing } from '@/api/listings/list'
import { Naira } from '@/components/naira'
import { TableRow, TableCell } from '@/components/ui/table'
import { useAsync } from '@/hooks/useAsync'
import { IProperty } from '@/types/property'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import React from 'react'

interface IPropertyItemProps {
    property: IProperty
}

export const PropertyItem = ({property} : IPropertyItemProps) => {
    const deactivate = useAsync(() => deactivateListing(property._id), {
        onCompleted: () => {

        }
    })
    const handleDelete = useAsync(() => deleteListing(property._id))

    const initDelete = () => {
        handleDelete.action()
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
                    <DropdownMenuItem>Deactivate</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}
