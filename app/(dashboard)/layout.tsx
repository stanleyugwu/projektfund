'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { redirect, usePathname, useRouter } from "next/navigation"
import { BarChart3, Briefcase, HomeIcon, PieChartIcon, Settings2, User2Icon, Wallet2Icon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { IRoles } from '@/types/user'
import roles from '@/lib/roles'
import { useAuth } from '@/context/AuthProvider'


interface IDashboardLayoutProps extends PropsWithChildren {

}

interface INavIcons {
    href?: string,
    name: string
    icon?: any
    role?: IRoles
}

const nav_items : INavIcons[]  = [
    { name: 'Overview', role: roles.user},
    {href: '/dashboard', name: 'Overview', role: roles.user, icon: <HomeIcon className="w-4 h-4 mr-2" />},
    {href: '/portfolio', name: 'Portfolio', role: roles.user, icon: <Briefcase className="w-4 h-4 mr-2" />},
    {href: '/investments', name: 'Invest', role: roles.user, icon: <PieChartIcon className="w-4 h-4 mr-2" />},
    { name: 'Account'},
    {href: '/profile', name: 'Profile', icon: <User2Icon className="w-4 h-4 mr-2" />},
    {href: '/wallet', name: 'Wallet', role: roles.user, icon: <Wallet2Icon className="w-4 h-4 mr-2" />},
    {href: '/settings', name: 'Settings', role: roles.user, icon: <Settings2 className="w-4 h-4 mr-2" />},
]

export default function ({children} : IDashboardLayoutProps) {
    const pathname = usePathname()
    const {status, user} = useAuth()

    if(!user) redirect('/login')

    return (
        <div className='h-screen'>
            {/* Sidebar */}
            <div className="h-full grid-cols-6 md:grid">
                <div className='hidden md:flex h-full col-span-1 p-5 space-y-10 md:flex-col border-e'>
                    <div>
                        <h1 className='text-2xl font-medium'>Brand</h1>
                    </div>
                    
                    <div className='flex w-full space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2'>

                        {
                            nav_items.map(({icon, ...item}) => (
                                item.href ?
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        pathname === item.href
                                        ? "bg-muted hover:bg-muted text-primary"
                                        : "hover:bg-muted hover:text-primary",
                                        "justify-start", 'rounded-3xl'
                                    )}
                                >{icon} {item.name}</Link> : <p className='px-1 text-sm text-gray-600'>{item.name}</p>
                            ))
                        }
                    </div>

                    <div></div>
                </div>
                
                <div className='col-span-5 bg-muted'>
                    <div className='flex justify-between px-10 py-3 bg-white'>
                        <div>
                            
                        </div>

                        <div>
                            <DropdownMenu >
                                <DropdownMenuTrigger className='cursor-pointer'>
                                    <Avatar  >
                                        <AvatarFallback  />
                                    </Avatar>
                                </DropdownMenuTrigger>
                                
                                <DropdownMenuContent className='left-0 w-48'>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    
                    <div className="md:container p-5 md:py-10">
                        {children}          
                    </div>
                </div>
            </div>
        </div>
    )
}
