'use server'

import React, { PropsWithChildren } from 'react'
import Script from 'next/script'
import { fetchUser } from '@/api/user/current'
import { Sidebar } from '@/layouts/dashboard/Sidebar'
import { Header } from '@/layouts/dashboard/Header'


interface IDashboardLayoutProps extends PropsWithChildren {
    title?: string 
}

export default async function ({children} : IDashboardLayoutProps) {    
    return (
        <div className='min-h-screen'>            
            <div className="grid grid-cols-6">
                <div className='sticky top-0 hidden min-h-screen col-span-1 border-e md:block'>
                    <Sidebar />
                </div>

                <div className='flex flex-col min-h-screen col-span-6 md:col-span-5 bg-muted'>
                    <Header />
                    
                    <div className="flex-1 p-5 md:container md:py-10">
                        {children}          
                    </div>

                    <div className=''>
                        <div className="container flex justify-between py-4 font-semibold text-muted-foreground">
                            <div>
                                <p>&copy; {new Date().getFullYear()}</p>
                            </div>                        </div>
                    </div>
                </div>
            </div>

            <div id='portal' />
            <Script src="https://js.paystack.co/v1/inline.js" />
        </div>
    )
}
