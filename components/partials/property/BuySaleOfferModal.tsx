'use client'

import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { DialogHeader } from '@/components/ui/dialog'
import { Input, InputError } from '@/components/ui/input'
import { FormLoader } from '@/components/ui/loader'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Label } from '@radix-ui/react-label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'
import { property } from 'lodash'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { verifyPurchase, initiatePurchase } from '@/server/property/purchase'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/context/AuthProvider'
import usePaystack from '@/hooks/usePaystack'
import { IDialog } from '@/hooks/useDialog'

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const BuySaleOfferModal = ({ offer, modal }: { offer: any, modal: IDialog }) => {

    const [units, setUnits] = useState(1)
    const price = useMemo(() => units * offer.unit_price, [units])
    const { toast } = useToast()
    const [isModal, setIsModal] = useState(true)
    const modalRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if(modalRef.current){
    //         if(isModal){
    //             modalRef.current.style.pointerEvents = 'auto'
    //         }else{

    //             modalRef.current.style.pointerEvents = 'none'
    //         }
    //     }
    // }, [isModal])

    const [step, setStep] = useState(1)

    const [verifyPurchaseState, verifiyPurchaseAction] = useFormState(verifyPurchase, {})

    const { paystackInit, paystackStatus } = usePaystack({
        whenInit: () => {
            setIsModal(false)
        },
        whenCancelled: () => {
            setIsModal(true)
        },
        whenSuccessful: (transaction) => {
            const data = new FormData()
            data.set('reference', transaction.reference)
            verifiyPurchaseAction(data)
            setIsModal(true)
        }
    })

    useEffect(() => {
        if (verifyPurchaseState.status == 'completed') {
            setStep(2)

            toast({
                title: "Payment completed",
                description: verifyPurchaseState.message
            })
        }

        if (!verifyPurchaseState) {
            toast({
                variant: 'destructive',
                title: "Transaction Error",
                description: verifyPurchaseState.error
            })
        }
    }, [verifyPurchaseState])

    const [state, action] = useFormState(initiatePurchase, {
        status: false,
        message: '',
        errors: {},
        error: '',
    })


    useEffect(() => {
        if (state.status == 'pay') {
            setIsModal(false)
            paystackInit(state.payment)
        }

        if (state.status == 'completed') {
            toast({
                title: "Payment completed",
                description: state.message
            })

            setStep(2)
            setIsModal(true)
        }

        if (!state.status && state.error) {
            toast({
                variant: 'destructive',
                description: state.error
            })
            setIsModal(true)
        }
    }, [state]);

    return (
        <Dialog key={'buy-sale-offer-' + offer.id} open={modal.isOpen} onOpenChange={(open) => modal.setOpen(open)} modal={false}>
            <DialogContent ref={modalRef} >
                <>

                    {
                        step == 1 &&
                        <>
                            <DialogHeader>
                                <DialogTitle>Purchase Slots</DialogTitle>
                                <DialogDescription>Select the number of slots you wish to purchase</DialogDescription>
                            </DialogHeader>

                            {
                                units > offer.units

                                &&

                                <Alert variant={'destructive'}>
                                    <AlertDescription>You cannot purchase more slots than is listed!</AlertDescription>
                                </Alert>
                            }

                            <form action={action} className='space-y-3'>
                                <div className='space-y-1'>
                                    <Label>Amount of Slots you wish to purchase</Label>
                                    <Input name="units" type='number' min={1} value={units} onChange={(event) => setUnits(parseInt(event.currentTarget.value))} />
                                    <InputError message={state.errors?.units} />
                                </div>

                                <div className='space-y-1'>
                                    <Label>Payment Method</Label>
                                    <Select name='method'>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Select payment method" />
                                        </SelectTrigger>
                                        <SelectContent className='bg-white' defaultValue={'wallet'}>
                                            <SelectGroup>
                                                <SelectItem value='wallet'>Wallet</SelectItem>
                                                {/* <SelectItem value='paystack'>Paystack</SelectItem> */}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={state.errors?.method} />
                                </div>

                                <div>
                                    <p className='text-sm'><strong className='font-semibold'>Amount:</strong> <Naira />{(price || 0).toLocaleString()}</p>
                                </div>

                                <input type="text" hidden value={offer.property._id} name="property_id" />
                                <input type="text" hidden value={offer._id} name="listing_id" />

                                <Alert className='text-orange-500 border border-orange-500 bg-orange-50'>
                                    <AlertDescription>
                                        You are purchasing {units || ''} slots from <span className='font-medium'>{offer.user.firstname} {offer.user.lastname}</span> at the resale price of <span><Naira />{offer.unit_price.toLocaleString()} each.</span>
                                    </AlertDescription>
                                </Alert>


                                <div>
                                    <Button className='w-full' disabled={units > offer.units} type='submit'>
                                        <FormLoader />
                                        Purchase Now
                                    </Button>
                                </div>
                            </form>
                        </>
                    }

                    {
                        step == 2 &&

                        <>
                            <div>
                                <DialogHeader className='mb-5'>
                                    <DialogTitle>Purchase Successful</DialogTitle>
                                    <DialogDescription>You have successfully purchased {units} slots of this property</DialogDescription>
                                </DialogHeader>

                                <div className='space-y-5' >
                                    <div className="flex p-2 space-x-3 border rounded-md">
                                        <div className='w-2/12'>
                                            <img src={`${process.env.NEXT_PUBLIC_CDN_IMAGE_BASE_URL}${offer.property.image}`} className='rounded-md aspect-square' alt="" />
                                        </div>
                                        <div className="flex-1 py-2">
                                            <h4 className='font-bold'>{offer.property.name}</h4>
                                            <div>
                                                <Badge variant={'secondary'}>{units} Slot</Badge>
                                                <Badge variant={'secondary'}><Naira /> {(units * offer.property.unit_price).toLocaleString()} Amount</Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <Button asChild>
                                        <Link href={'/portfolio'} >View Portfolio</Link>
                                    </Button>
                                </div>
                            </div>
                        </>
                    }
                </>
            </DialogContent>
        </Dialog>
    )
}
