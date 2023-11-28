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
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'

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
    }

    return (
        <TableRow key={property.id}>
            <TableCell className="w-[400px]">
                <Link className='font-semibold hover:text-primary' href={'/admin/properties/'+property._id}>{property.name}</Link>
            </TableCell>
            <TableCell>{property.units.toLocaleString()}</TableCell>
            <TableCell><Naira />{property.unit_price.toLocaleString()}</TableCell>
            <TableCell>{property.units - property.available_units}</TableCell>
            <TableCell>
                {/* {property.status} */}
                <Switch checked={property.status} disabled  />
            </TableCell>
            <TableCell>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'secondary'} size={'sm'}>Action</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link className='cursor-pointer' href={'/admin/properties/'+property._id}>View</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link className='cursor-pointer' href={'/admin/properties/'+property._id+'/edit'}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <span className='cursor-pointer' role='button' onClick={deactivate.action}>{property.status ? 'Deactivate' : 'Activate'}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <span role='button' className='cursor-pointer' onClick={initDelete}>Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Swal open={open} setOpen={setOpen} action={handleDelete.action} />
            </TableCell>
        </TableRow>
    )
}
