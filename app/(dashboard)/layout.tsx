'use server'

import React, { PropsWithChildren } from 'react'
import Script from 'next/script'
import { fetchUser } from '@/server/user/current'
import { Sidebar } from '@/layouts/dashboard/Sidebar'
import { Header } from '@/layouts/dashboard/Header'


interface IDashboardLayoutProps extends PropsWithChildren {
    title?: string 
}

export default async function ({children} : IDashboardLayoutProps) {    
    return (
        <div className='min-h-screen'>            
            <div className='fixed top-0 hidden z-50 bottom-0 w-[18%]  bg-white left-0 col-span-1 border-e md:block'>
                <Sidebar />
            </div>

            <div className="md:w-[82%] ml-[18%] ">

                <div className='flex flex-col min-h-screen bg-muted'>
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
