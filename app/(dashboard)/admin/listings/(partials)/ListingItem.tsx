'use client'

import React from 'react'
import { Naira } from "@/components/naira"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { deactivateListing, deleteListing } from '@/api/listings/list'
import { TableRow, TableCell } from '@/components/ui/table'
import { IListing } from '@/types/listings'
import { useAsync } from '@/hooks/useAsync'
import { Button } from '@/components/ui/button'

interface IListingItemProps {
    listing: IListing
}

export const ListingItem = ({listing} : IListingItemProps) => {

    const deactivate = useAsync(() => deactivateListing(listing._id), {
        onCompleted: () => {

        }
    })
    const handleDelete = useAsync(() => deleteListing(listing._id))

    const initDelete = () => {
        handleDelete.action()
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
                        <span role="button">Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <span role="button"  onClick={deactivate.action}>{listing.status ? 'Deactivate' : 'Activate'}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <span role="button" onClick={initDelete} >Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}
