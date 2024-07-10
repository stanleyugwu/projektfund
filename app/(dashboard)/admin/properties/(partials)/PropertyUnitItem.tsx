'use client'

import { Swal } from '@/components/Swal'
import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { toNumber } from 'lodash'
import React, { useState } from 'react'
import { IUnit } from '@/types/units'
import { IProperty } from '@/types/property'
import { useAsync } from '@/hooks/useAsync'
import { deleteUnit, deleteUnitAndRefund } from '@/server/units/units'

interface IPropertyUnitItemProps {
    unit: IUnit,
    property: IProperty,
    showProperty?: boolean
}

export const PropertyUnitItem = ({property, unit, showProperty = false} : IPropertyUnitItemProps) => {

    const {action, loading} = useAsync(() => deleteUnit(unit._id))
    
    const {
        action: deleteAndRefund, 
        loading: deleteAndRefundLoading
    } = useAsync(() => deleteUnitAndRefund(unit._id))

    const [open, setOpen] = useState(false)
    const [openDeleteAndRefund, setOpenDeleteAndRefund] = useState(false)

    const initDelete = () => {
        setOpen(true)
    }

    return (
        <TableRow key={unit._id}>
            {
                showProperty ? <TableCell>{property.name}</TableCell> : ''
            }
            <TableCell>{unit.user.firstname} {unit.user.lastname}</TableCell>
            <TableCell><Naira />{(unit.units * property.unit_price).toLocaleString()} ({unit.units.toLocaleString()})</TableCell>
            <TableCell><Naira />{(unit.available_units * property.unit_price).toLocaleString()} ({unit.available_units.toLocaleString()})</TableCell>
            <TableCell><Naira />{toNumber(unit.unit_cost).toLocaleString()}</TableCell>
            <TableCell><Naira />{property.unit_price.toLocaleString()}</TableCell>
            <TableCell ><Switch checked={unit.status} disabled  /></TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} size={'sm'}>Action</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem >
                            <span role="button" onClick={() => setOpen(true)} >Delete</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <span role="button" onClick={() => setOpenDeleteAndRefund(true)} >Delete and Refund</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Swal open={open} setOpen={setOpen} description='This action cannot be reversed. The unit and all listed units will be deleted from the system without any refund to the owner.' action={action} />
                
                <Swal open={openDeleteAndRefund} setOpen={setOpenDeleteAndRefund} description='This action cannot be reversed. The unit and all listed units will be deleted from the system and the owner will be refunded the current unit value of the property to his account.' action={deleteAndRefund} />
            </TableCell>
        </TableRow>
    )
}
