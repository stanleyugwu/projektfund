'use client'

import { IListing } from '@/types/listings'
import React from 'react'
import { ListingItem } from './ListingItem'

interface IListingShow {
    listings: IListing[]
}

export const ListingShow = ({listings} : IListingShow) => {
    return (
        <>
            {
                listings.map((listing, index) => (
                    <ListingItem key={`listing-${index}`} listing={listing} />
                ))
            }
        </>
    )
}
