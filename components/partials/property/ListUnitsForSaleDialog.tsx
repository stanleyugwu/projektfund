'use client'

import { listUnits } from '@/server/units/units'
import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input, InputError } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormLoader } from '@/components/ui/loader'
import { useToast } from '@/components/ui/use-toast'
import { IUnit } from '@/types/units'
import React, { useEffect, useState } from 'react'

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'

interface IListUnitsForSaleDialog {
    unit: IUnit
    modal: any
    open: any
    setModal: any
    setIsOpen: any
}

export const ListUnitsForSaleDialog = ({ unit, modal, open, setIsOpen, setModal }: IListUnitsForSaleDialog) => {
    const [units, setUnits] = useState(1)

    const [state, action] = useFormState(listUnits, {
        status: false,
        message: '',
        errors: {},
        error: ''
    })

    const { toast } = useToast()

    useEffect(() => {
        if (state.status) {
            toast({
                title: "Slot listed successfully",
                description: state.message
            })
        }
    }, [state])

    return (
        <>
            <Dialog modal={modal} open={open} onOpenChange={(open: any) => setIsOpen(open)}>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>List Slots for sale</DialogTitle>
                        <DialogDescription>Select the number of slots you wish to purchase</DialogDescription>
                    </DialogHeader>

                    <form action={action} className='space-y-3'>
                        <div className='space-y-2' >
                            <Label>Number of Slots to sell</Label>
                            <Input name='units' type='number' value={units} onChange={(e) => setUnits(e.currentTarget.value as unknown as number)} />
                            <InputError message={state?.errors?.units} />
                            <div className='grid grid-cols-6'>
                                <Button variant={'secondary'} type='button' onClick={() => setUnits(unit.units)} className='w-full' size={'sm'}>All</Button>
                            </div>
                        </div>

                        <input type="text" hidden name='unit_id' value={unit._id} />

                        <div className='space-y-2'>
                            <Label>Amount Per Slot</Label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm"><Naira /></span>
                                </div>
                                <Input type="number" name='unit_price' className="block w-full px-3 py-2 text-gray-900 pl-7 " placeholder="0.00" defaultValue={unit.property.unit_price} />
                            </div>
                            <InputError message={state?.errors?.unit_price} />
                        </div>

                        <div>

                        </div>

                        <Button variant={'default'} className='w-full'>List Slots <FormLoader /></Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
