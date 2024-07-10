'use client'

import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table'
import { IProperty } from '@/types/property'
import { IUnit } from '@/types/units'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import React, { useState } from 'react'
import { toNumber } from 'lodash'
import { Swal } from '@/components/Swal'
import { useAsync } from '@/hooks/useAsync'
import { deleteUnit } from '@/server/units/units'
import { PropertyUnitItem } from './PropertyUnitItem'

interface IPurchasedUnitsTableProps {
    units: IUnit[]
    property: IProperty
}

export const PurchasedUnitsTable = ({units, property} : IPurchasedUnitsTableProps) => {
    return (
        <Table>
            <TableCaption>Purchased Units</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >User</TableHead>
                    <TableHead>Total Units</TableHead>
                    <TableHead>Available Units</TableHead>
                    <TableHead>Purchase Price Per Unit</TableHead>
                    <TableHead>Price Per Unit</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    units.map((unit) => (
                        <PropertyUnitItem unit={unit} property={property} />
                    ))
                }
            </TableBody>
        </Table>
    )
}
