'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { IProperty } from '@/types/property';
import { Dialog, DialogContent, DialogDescription, DialogHeader,  DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Input, InputError } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormLoader, Loader } from '@/components/ui/loader';
import { Naira } from '@/components/naira';
import { useAuth } from '@/context/AuthProvider';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Script from 'next/script';
import { initiatePurchase, verifyPurchase } from '@/api/property/purchase';
import usePaystack from '@/hooks/usePaystack';

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { AlertCircleIcon, CheckCheckIcon, CheckCircleIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';


interface IPurchasePropertyDrawerProps {
    property: IProperty
    open: boolean
    setOpen: any
}

export const PurchasePropertyDialog = ({property, open, setOpen} : IPurchasePropertyDrawerProps) => {

    const [units, setUnits] = useState(1)
    const price = useMemo(() => units * property.unit_price, [units])
    const {user} = useAuth()
    const [isModal, setIsModal] = useState(true)

    const [step, setStep] = useState(1)

    const onSuccess = async (transaction: any) => {
        console.log(transaction)
        setIsModal(true)
        setStep(2)
        
        if(transaction.status == "success"){
           const status = await verifyPurchase(transaction.reference)
           if(status.status == true) {
                
           }
        }
    };

    const paystack = usePaystack()
    
    const onClose = () => {
        setIsModal(true)
    }

    const [state, action] = useFormState(initiatePurchase, {
		status: false,
		message: '',
		errors: {},
		error: '',
	})
    
    const initializePayment = (payment: any) => {
        paystack(payment, onSuccess, onClose)
        
    }

    useEffect(() => {
        if(state.status){
            if(state.payment) {
                setIsModal(false)
                initializePayment(state.payment)
            }
        }
    }, [state]);

    return (
        <>
            <Dialog modal={isModal} open={open} onOpenChange={(open) => setOpen(open)}>
                <DialogContent >
                    <>
                        

                        {
                            step == 1 && 
                            <>
                                <DialogHeader>
                                    <DialogTitle>Purchase Units</DialogTitle>
                                    <DialogDescription>Select the number of units you wish to purchase</DialogDescription>
                                </DialogHeader>
                                
                                <form action={action} className='space-y-3'>
                                    <div className='space-y-1'>
                                        <Label>Amount of Units you wish to purchase</Label>
                                        <Input name="units" type='number' value={units} onChange={(event) => setUnits(parseInt(event.currentTarget.value))} />
                                        <InputError message={state.errors?.units} />
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
                                        <InputError message={state.errors?.method} />
                                    </div>

                                    <div>
                                        <p className='text-sm'><strong className='font-semibold'>Amount:</strong> <Naira />{price.toLocaleString()}</p>
                                    </div>

                                    <input type="text" hidden value={property._id} name="property_id" />

                                    <Alert >
                                        <InfoCircledIcon className="w-4 h-4" />
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
                        
                                    <Script src="https://js.paystack.co/v1/inline.js" />
                                </form>
                            </>                        
                        }

                        <div>
                            <DialogHeader className='mb-5'>
                                <DialogTitle>Purchase Successful</DialogTitle>
                                <DialogDescription>Select the number of units you wish to purchase</DialogDescription>
                            </DialogHeader>

                            <div >
                                <div className="flex p-2 space-x-3 border rounded-md">
                                    <div className='w-2/12'>
                                        <img src={property.image} className='rounded-md aspect-square' alt="" />
                                    </div>
                                    <div className="flex-1 py-2">
                                        <h4 className='font-bold'>{property.name}</h4>
                                        <div>
                                            <Badge variant={'secondary'}>{units} Unit</Badge>
                                            <Badge variant={'secondary'}><Naira /> {(units * property.unit_price).toLocaleString()} Amount</Badge>
                                        </div>
                                    </div>
                                </div>

                                <Button asChild>
                                    <Link href={''} >View Portfolio</Link>
                                </Button>
                            </div>
                        </div>
                        {/* {
                          step == 2 &&
                          
                          <>
                            
                          </>
                        } */}
                    </>
                </DialogContent>
            </Dialog>

        </>
    )
}
function initializePayment(payment: any) {
    throw new Error('Function not implemented.');
}

