'use client'

import { TableCaption, TableHeader, TableRow, TableHead, TableBody, Table } from '@/components/ui/table'
import React from 'react'
import { PropertyItem } from './PropertyItem'
import { IProperty } from '@/types/property'

interface IPropertiesTableProps {
    properties: IProperty[]
}

export const PropertiesTable = ({properties} : IPropertiesTableProps) => {

    return (
        <Table>
            <TableCaption>Listed Properties.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Units</TableHead>
                    <TableHead>Unit Price</TableHead>
                    <TableHead>Sold Units</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    properties.map((property) => (
                        <PropertyItem property={property} />
                    ))
                }
            </TableBody>
        </Table>
    )
}
