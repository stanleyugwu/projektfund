'use client'

import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table'
import { IProperty } from '@/types/property'
import React from 'react'

interface IListedUnitTableProps {
    units: any[]
    property: IProperty
}

export const ListedUnitTable = ({units, property} : IListedUnitTableProps) => {
    return (
        <Table>
            <TableCaption>Listed Units</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >User</TableHead>
                    <TableHead>Total Units</TableHead>
                    <TableHead>Price Per Unit</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Total Purchased</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    units.map((unit) => (
                        <TableRow key={unit._id}>
                            <TableCell>{unit.user.firstname} {unit.user.lastname}</TableCell>
                            <TableCell><Naira />{(unit.units * unit.unit_price).toLocaleString()} ({unit.units.toLocaleString()})</TableCell>
                            <TableCell><Naira />{(unit.available_units * property.unit_price).toLocaleString()} ({unit.available_units.toLocaleString()})</TableCell>
                            <TableCell ><Switch checked={unit.status} disabled  /></TableCell>
                            <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant={'ghost'} size={'sm'}>Action</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {/* <DropdownMenuItem asChild >
                                        <Link href={`/admin/listings/${listing._id}`}>Edit</Link>
                                    </DropdownMenuItem> */}
                                    {/* <DropdownMenuItem asChild>
                                        <span role="button"  onClick={deactivate.action}>{listing.status ? 'Deactivate' : 'Activate'}</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem >
                                        <span role="button" onClick={initDelete} >Delete</span>
                                    </DropdownMenuItem> */}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {/* <Swal open={open} setOpen={setOpen} action={handleDelete.action} /> */}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
