import React from 'react'
import { Header } from '../(partials)/Header'
import { ListingsList } from '../(partials)/Listings/ListingsList'
import { IListing } from '@/types/listings'
import { listListings } from '@/api/listings/list'
import { Footer } from '../(partials)/Footer'

export default async function () {

    const listings : IListing[] = await listListings()

    return (
        <>
            <Header />
            <section className="relative table w-full py-20 bg-center bg-no-repeat bg-cover lg:py-36">
                <div className="absolute inset-0 z-0 bg-black opacity-80" />
                
                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="text-3xl font-medium leading-normal text-white md:text-4xl md:leading-normal">Listings</h3>
                    </div>
                </div>
            </section>

            <section className="py-20 mx-auto max-w-7xl">
                <ListingsList listings={listings} />
            </section>

            <Footer />
        </>
    )
}
