'use client'

import React, { useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/context/AuthProvider'
import Link from 'next/link'
import { ProfileImage } from '@/components/partials/ProfileImage'
import { IUser } from '@/types/user'
import { Sidebar } from './Sidebar'
import { Disclose } from '@/components/ui/disclose'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Header = () => {
    const {title} = useApp()
    const {user, logout} = useAuth()

    const [animate] = useAutoAnimate()

    const [showSidebar, setShowSidebar] = useState(false)

    const sidebar = useRef(null)
    
    const hide = (e: any) => !(sidebar.current as never as any).contains(e.target) ? setShowSidebar(false) : null;
     
    return (

        <div className='sticky top-0 z-50 flex items-center justify-between px-5 py-3 bg-white border-b md:px-10'>
            
            <Disclose show={showSidebar}>
                <div onClick={hide} className="fixed top-0 z-[999999] bottom-0 left-0 right-0 bg-white/80" style={{zIndex: '999999'}}>
                    <div ref={sidebar} className='h-full  w-80 overflow-y-auto bg-white transition-transform translate-x-full border-e' style={{width: '80%'}}>
                        <Sidebar onClick={() => setShowSidebar(false)} />
                    </div>
                </div>
            </Disclose>
            
            <div>
                <h3 className='hidden text-lg font-semibold md:block'>{title}</h3>
                <a className="block  md:hidden" href="/dashboard">
                    <span >Projektfund</span>
                </a>
            </div>

            <div className='flex space-x-3'>
                <DropdownMenu >
                    <DropdownMenuTrigger className='cursor-pointer'>
                        <ProfileImage user={user as IUser} />
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent className='left-0 w-48'>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='cursor-pointer' asChild>
                            <Link  href={'/profile'}>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer' asChild>
                            <Link  href={'/wallet'}>Wallet</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer' onClick={() => logout()}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="block md:hidden">
                    <button onClick={() => setShowSidebar(!showSidebar)} className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
                
    )
}
