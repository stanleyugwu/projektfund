'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/context/AuthProvider'
import Link from 'next/link'

export const Header = () => {
    const {title} = useApp()
    const {user, logout} = useAuth()
    
    return (

        <div className='sticky top-0 flex items-center justify-between px-10 py-3 bg-white border-b'>
            <div>
                <h3 className='text-lg font-semibold'>{title}</h3>
            </div>

            <div>
                <DropdownMenu >
                    <DropdownMenuTrigger className='cursor-pointer'>
                        <Avatar className='bg-gray-50'>
                            <AvatarImage src={user?.avatar} />
                            <AvatarFallback className='font-semibold text-primary'>{user?.firstname?.charAt(0)}{user?.lastname?.charAt(0)}</AvatarFallback>
                        </Avatar>
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
            </div>
        </div>
                
    )
}
