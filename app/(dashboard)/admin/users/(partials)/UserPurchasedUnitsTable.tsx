import React from 'react'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Naira } from '@/components/naira'
import { IUnit } from '@/types/units'
import { PropertyUnitItem } from '../../properties/(partials)/PropertyUnitItem'

interface IPurchasedUnitsTableProps {
    units: IUnit[]
}

export const UserPurchasedUnitsTable = ({ units }: IPurchasedUnitsTableProps) => {
    return (
        <Table>
            <TableCaption>Portfolio</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[400px]">Property</TableHead>
                    <TableHead>Slots Owned</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    units.map((unit) => (
                        <PropertyUnitItem property={unit.property} unit={unit} showProperty />
                    ))
                }
            </TableBody>
        </Table>
    )
}
