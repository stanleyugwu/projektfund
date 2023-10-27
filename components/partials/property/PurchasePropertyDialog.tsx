'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { IProperty } from '@/types/property';
import { Dialog, DialogContent, DialogDescription, DialogHeader,  DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Input, InputError } from '@/components/ui/input';
// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { Button } from '@/components/ui/button';
import { FormLoader, Loader } from '@/components/ui/loader';
import { initiatePurchase } from '@/api/property/purchase';
import { Naira } from '@/components/naira';
import { useAuth } from '@/context/AuthProvider';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { usePaystackPayment } from 'react-paystack'

interface IPurchasePropertyDrawerProps {
    property: IProperty
}




export const PurchasePropertyDialog = ({property} : IPurchasePropertyDrawerProps) => {

    const [units, setUnits] = useState(0)
    const price = useMemo(() => units * property.unit_price, [units])

    const {user} = useAuth()

    const onSuccess : any = (reference: string) => {
        console.log(reference);
    };
    
    const onClose = () => {
        console.log('closed')
    }

    const [state, action] = useFormState(initiatePurchase, {
		status: false,
		message: '',
		errors: {},
		error: '',
        data: {
            property_id: property._id,
            user_id: user?._id
        }
	})
    const initializePayment = usePaystackPayment({
        ...state.payment,
    })

    useEffect(() => {
        if(state.status){
            if(state.payment){
                initializePayment(onSuccess, onClose)
            }
        }
    }, [state]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='w-full' size={'lg'}>Purchase Units</Button>
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Purchase Units</DialogTitle>
                    <DialogDescription>Select the number of units you wish to purchase</DialogDescription>
                </DialogHeader>

                <form action={action} className='space-y-3'>
                    <div className='space-y-1'>
                        <Label>Amount of Units you wish to purchase</Label>
                        <Input name="units" type='number' value={units} onChange={(event) => setUnits(parseInt(event.currentTarget.value))} />
                        <InputError message={state.errors.units} />
                    </div>

                    <div className='space-y-1'>
                        <Label>Payment Method</Label>
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                            <SelectContent className='bg-white'>
                                <SelectGroup>
                                    <SelectItem value='wallet'>Wallet</SelectItem>
                                    <SelectItem value='paystack'>Paystack</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <InputError message={state.errors.method} />
                    </div>

                    <div>
                        <p className='text-sm'><strong className='font-semibold'>Amount:</strong> <Naira />{price.toLocaleString()}</p>
                    </div>

                    <Alert >
                        <InfoCircledIcon className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription >
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>

                    <div>
                        <Button className='w-full' type='submit'>
                            <FormLoader>
                                <Loader />
                            </FormLoader>

                            Purchase Now
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
