import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import React from 'react'
import { BuySaleOfferModal } from './BuySaleOfferModal'
import { useDialog } from '@/hooks/useDialog'
import moment from 'moment'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/context/AuthProvider'
import { Disclose } from '@/components/ui/disclose'
import { Swal } from '@/components/Swal'
import { removeSaleOffer } from '@/server/units/units'

export const SaleOfferItem = ({offer} : {offer: any}) => {
    const dialog = useDialog()

    const {user} = useAuth()

    const confirm = useDialog()

    // const remove = async () => {
    //     const data = await removeSaleOffer(offer.id)
    //     console.log(data);
    // }
    
    return (
        <>
            <div className="py-3">
                <div className="transition-all duration-150  rounded text-black">
                    <div className='mb-3'>
                        <div className="flex justify-between">
                            <p className="text-base font-medium">{offer.available_units} slots at <Naira />{offer.unit_price.toLocaleString()} per slot</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="text-gray-500">Published {moment(offer.createdAt).fromNow()} by {offer.user.firstname} {offer.user.lastname}</p>
                            {/* <p className="text-gray-500">{moment(offer.createdAt).fromNow()}</p> */}
                        </div>

                        <Disclose show={user?._id == offer.user.id}>
                            <div className="mt-1 py-1 px-2 bg-primary/10 font-medium inline-block rounded ">
                                <p className="text-primary text-xs">Owned by you</p>
                            </div>
                        </Disclose>
                    </div>

                        <Disclose show={user?._id != offer.user.id}>
                            <div className="space-x-3">
                                <Button onClick={() => dialog.setOpen(true)} size={'sm'} >Purchase Slots</Button>
                                {/* <Disclose show={user?._id == offer.user.id}>
                                    <Button onClick={confirm.openDialog} size={'sm'} variant={'ghost'} >Remove Listing</Button>
                                    </Disclose> */}
                            </div>
                        </Disclose>
                </div>
            </div>

            {/* <Swal action={remove} open={confirm.isOpen} setOpen={confirm.setOpen} title='Are your sure?' description='Are you sure you wish to remove this offer.' /> */}
            <BuySaleOfferModal modal={dialog} offer={offer} />
        </>
    )
}
