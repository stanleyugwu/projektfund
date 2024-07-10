'use client'

import { saleOffers } from '@/server/units/units'
import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { Sheet,SheetTrigger, SheetContent, SheetHeader, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet'
import {  X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { SaleOfferItem } from './SaleOfferItem'

interface ISaleOffersDrawerProps {
    offers: any[]
}

export const SaleOffersDrawer = ({offers} : ISaleOffersDrawerProps) => {
    
    return (
        <Sheet>
            <Button  variant={'ghost'} asChild >
                <SheetTrigger className='w-100' >View Sale Offers</SheetTrigger>
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
                        offers.map((offer: any, i) => <SaleOfferItem key={`sale-offer-item-${i}`} offer={offer} />)
                    }
                </SheetDescription>
                <SheetFooter>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
