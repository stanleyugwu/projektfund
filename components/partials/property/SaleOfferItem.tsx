import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import React from 'react'
import { BuySaleOfferModal } from './BuySaleOfferModal'
import { useDialog } from '@/hooks/useDialog'

export const SaleOfferItem = ({offer} : {offer: any}) => {
    const dialog = useDialog()
    return (
        <div className="p-3 transition-all duration-150 border rounded hover:bg-gray-50">
            <div onClick={() => dialog.setOpen(true)} role='button' className="space-y-2">
                <div className='flex items-center gap-3'>
                    <div className="grid flex-1 grid-cols-3 text-center">
                        <div>
                            <h2 className="font-medium leading-none">{offer.available_units}</h2>
                            <p className="text-sm text-muted-foreground">Units Listed</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none"><Naira /> {offer.unit_price.toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Unit Price</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none"><Naira /> {(offer.units * offer.unit_price).toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Total Value</p>
                        </div>
                    </div>
                </div>
            </div>
            <BuySaleOfferModal modal={dialog} offer={offer} />
        </div>
    )
}
