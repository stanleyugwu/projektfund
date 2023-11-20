import { singleListing } from '@/api/listings/list';
import { Footer } from '@/app/(partials)/Footer';
import { Header } from '@/app/(partials)/Header'
import { Naira } from '@/components/naira';
import { Button } from '@/components/ui/button';
import { IListing } from '@/types/listings'
import { Building2Icon } from 'lucide-react';
import { useParams } from 'next/navigation';
import React from 'react'
import { Gallery } from './(partials)/Gallery';

interface IListingsProps {
    params: { id: string }
}

export default async function ({params} : IListingsProps) {

    const listing : IListing = await singleListing(params.id); 

    return (
        <>
            <Header />

            <section className="relative pb-16 md:pb-24">
                <div className='relative overflow-hidden'>
                    <Gallery listing={listing} />
                </div>
                <div className="container mt-10">
                    <div className="md:flex">
                    <div className="px-3 space-y-5 lg:w-2/3 md:w-1/2 md:p-4">
                        <div>
                            <h4 className="text-2xl font-medium">{listing.title}</h4>
                            <p>{listing.address}, {listing.city}, {listing.state} </p>
                        </div>
                        
                        <div className="p-10 prose whitespace-pre-wrap bg-gray-100 max-w-none">
                        {listing.description}
                        </div>
                        <div className="w-full leading-[0] border-0 mt-6">
                        {listing.video}
                        </div>
                    </div>
                    <div className="px-3 mt-8 lg:w-1/3 md:w-1/2 md:p-4 md:mt-0">
                        <div className="sticky top-20">
                        <div className="rounded-md shadow bg-slate-50 dark:bg-slate-800 dark:shadow-gray-700">
                            <div className="p-6">
                            <h5 className="text-2xl font-medium">Price:</h5>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-medium"><Naira /> {listing.price.toLocaleString()}</span>
                                <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">{listing.type}</span>
                            </div>
                            <ul className="mt-4 list-none">
                                <li className="flex items-center justify-between">
                                <span className="text-sm text-slate-400">Days on Hously</span>
                                <span className="text-sm font-medium">124 Days</span>
                                </li>
                                <li className="flex items-center justify-between mt-2">
                                <span className="text-sm text-slate-400">Price per sq ft</span>
                                <span className="text-sm font-medium">$ 186</span>
                                </li>
                                <li className="flex items-center justify-between mt-2">
                                <span className="text-sm text-slate-400">Monthly Payment (estimate)</span>
                                <span className="text-sm font-medium">$ 1497/Monthly</span>
                                </li>
                            </ul>
                            </div>
                            <div className="p-6 pt-0">
                                <Button asChild className='w-full'>
                                    <a href="#" >Book Now</a>
                                </Button>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <h3 className="mb-6 text-xl font-medium leading-normal text-black dark:text-white">Have Question ? Get in touch!</h3>
                            <div className="mt-6">
                                <Button asChild variant={'outline'}>
                                    <a href="contact.html" ><i className="align-middle uil uil-phone me-2" /> Contact us</a>
                                </Button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
