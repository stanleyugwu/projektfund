'use client'

import { saleOffers } from '@/api/units/units'
import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { Sheet,SheetTrigger, SheetContent, SheetHeader, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet'
import {  X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { SaleOfferItem } from './SaleOfferItem'

interface ISaleOffersDrawerProps {
    unit: any
}

export const SaleOffersDrawer = ({unit} : ISaleOffersDrawerProps) => {
    const [offers, setOffers] = useState([])
    
    useEffect(() => {
        console.log(unit)
        saleOffers(unit._id).then((res: any) => {
            setOffers(res)
        })
    }, [])

    useEffect(() => {
        console.log(offers)
    }, [offers])

    return (
        <Sheet>
            <Button variant={'ghost'} asChild >
                <SheetTrigger >Sale Offers</SheetTrigger>
            </Button>
            <SheetContent  className="min-w-full md:min-w-[470px] overflow-y-auto text-black space-y-1 p-0">
                <SheetHeader className="sticky top-0 flex items-end justify-between p-3 bg-white">
                    <SheetClose className="inline-block">
                        <X className="w-8 h-8" />
                        <span className="sr-only">Close</span>
                    </SheetClose>
                </SheetHeader>

                <SheetDescription className='px-5 space-y-5'>
                    <div>
                        <h1 className='text-xl font-semibold text-black'>Sale offers</h1>
                    </div>
                    {
                        offers.map((offer: any) => <SaleOfferItem offer={offer} />)
                    }
                </SheetDescription>
                <SheetFooter>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
