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
            <Button  variant={'secondary'} asChild >
                <SheetTrigger className='w-full' >View Sale Offers</SheetTrigger>
            </Button>
            <SheetContent  className="min-w-full md:min-w-[470px] overflow-y-auto text-black space-y-1 p-0">
                <SheetHeader className="sticky top-0 p-3 px-5 border-b">
                    <div className='!flex  justify-end'>                        
                        <div>
                            <SheetClose className="inline-block">
                                <X className="w-5 h-5" />
                                <span className="sr-only">Close</span>
                            </SheetClose>
                        </div>
                    </div>
                </SheetHeader>

                <SheetDescription className='px-5 py-2 space-y-2'>
                    <div >
                        <h1 className='text-lg font-medium text-black'>Available Sale offers</h1>
                    </div>

                    <div className='divide-y'>
                        {
                            offers.length > 0

                            ?

                            offers.map((offer: any, i) => <SaleOfferItem key={`sale-offer-item-${i}`} offer={offer} />)

                            :

                            <div className='text-center py-5'>
                                <h3>No sale offers available for this listing</h3>
                            </div>
                        }
                    </div>
                </SheetDescription>
                <SheetFooter>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
