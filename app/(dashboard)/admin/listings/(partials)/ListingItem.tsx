'use client'

import React, { useState } from 'react'
import { Naira } from "@/components/naira"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { deactivateListing, deleteListing } from '@/api/listings/list'
import { TableRow, TableCell } from '@/components/ui/table'
import { IListing } from '@/types/listings'
import { useAsync } from '@/hooks/useAsync'
import { Button } from '@/components/ui/button'
import { Swal } from '@/components/Swal'
import Link from 'next/link'

interface IListingItemProps {
    listing: IListing
}

export const ListingItem = ({listing} : IListingItemProps) => {
    const [open, setOpen] = useState(false)

    const deactivate = useAsync(() => deactivateListing(listing._id), {
        onCompleted: () => {

        }
    })
    const handleDelete = useAsync(() => deleteListing(listing._id), {
        onCompleted: () => setOpen(false)
    })

    const initDelete = () => {
        setOpen(true)
    }

    return (
        <TableRow key={listing.id}>
            <TableCell className="w-[400px]">{listing.title}</TableCell>
            <TableCell><Naira />{listing.price.toLocaleString()}</TableCell>
            <TableCell>{listing.city} {listing.state}</TableCell>
            <TableCell ><Switch checked={listing.status} disabled  /></TableCell>
            <TableCell>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'ghost'} size={'sm'}>Action</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild >
                        <Link href={`/admin/listings/${listing._id}`}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <span role="button"  onClick={deactivate.action}>{listing.status ? 'Deactivate' : 'Activate'}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <span role="button" onClick={initDelete} >Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Swal open={open} setOpen={setOpen} action={handleDelete.action} />
            </TableCell>
        </TableRow>
    )
}
