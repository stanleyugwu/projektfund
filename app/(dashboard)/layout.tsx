'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { PropsWithChildren, useEffect } from 'react'
import { redirect, usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { IRoles } from '@/types/user'
import roles from '@/lib/roles'
import { useAuth } from '@/context/AuthProvider'
import Script from 'next/script'
import { BriefcaseIcon, HomeIcon, ListIcon, PieChartIcon, PlusSquare, Settings, User, User2Icon, Wallet2, Wallet2Icon } from 'lucide-react'
import { Disclose } from '@/components/ui/disclose'


interface IDashboardLayoutProps extends PropsWithChildren {
    title?: string 
}

interface INavIcons {
    href?: string,
    name: string
    icon?: any
    role?: IRoles
}

const nav_items : INavIcons[]  = [
    { name: 'Overview'},
    {href: '/dashboard', name: 'Overview', role: roles.user, icon: <HomeIcon className="w-4 h-4 mr-2" />},
    {href: '/admin', name: 'Overview', role: roles.superadmin, icon: <HomeIcon className="w-4 h-4 mr-2" />},
    {href: '/admin/users', name: 'Users', role: roles.superadmin, icon: <User className="w-4 h-4 mr-2" />},
    {href: '/admin/transactions', name: 'Transactions', role: roles.superadmin, icon: <Wallet2 className="w-4 h-4 mr-2" />},
    {href: '/admin/properties', name: 'Properties', role: roles.superadmin, icon: <ListIcon className="w-4 h-4 mr-2" />},
    {href: '/admin/properties/create', name: 'Create Property', role: roles.superadmin, icon: <PlusSquare className="w-4 h-4 mr-2" />},
    {href: '/invest', name: 'Invest', role: roles.user, icon: <PieChartIcon className="w-4 h-4 mr-2" />},
    {href: '/portfolio', name: 'Portfolio', role: roles.user, icon: <BriefcaseIcon className="w-4 h-4 mr-2" />},
    { name: 'Account'},
    {href: '/profile', name: 'Profile', icon: <User2Icon className="w-4 h-4 mr-2" />},
    {href: '/settings', name: 'Settings', role: roles.superadmin, icon: <Settings className="w-4 h-4 mr-2" />},
    {href: '/wallet', name: 'Wallet', role: roles.user, icon: <Wallet2Icon className="w-4 h-4 mr-2" />},
]

export default async function ({children, title} : IDashboardLayoutProps) {
    const pathname = usePathname()
    const {user, logout} = useAuth()
    const router = useRouter()
    
    useEffect(() => {
        if(!user) return redirect('/login');
    }, [user])
    
    return (
        <div className='h-screen'>            
            <div className="h-full grid-cols-6 md:grid">
                <div className='hidden h-full col-span-1  md:flex md:flex-col border-e max-h-screen '>
                    <div className='sticky top-0 p-5 space-y-10'>
                        <div>
                            <h1 className='text-2xl font-medium'>Brand</h1>
                        </div>
                        
                        <div className='flex w-full space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1'>

                            {
                                nav_items.map(({icon, role, ...item}, index) => (
                                    <Disclose show={user?.role == role || !role}>
                                        {
                                            item.href ?
                                            <Link
                                                key={item.name + index}
                                                href={item.href}
                                                className={cn(
                                                    buttonVariants({ variant: "ghost" }),
                                                    pathname === item.href
                                                    ? "bg-muted hover:bg-muted text-primary"
                                                    : "hover:bg-muted hover:text-primary",
                                                    "justify-start", 'rounded'
                                                )}
                                            >{icon} {item.name}</Link> : <p key={item.name} className='px-1 text-sm text-gray-600'>{item.name}</p>
                                        }
                                    </Disclose>
                                ))
                            }

                        </div>
                        <div></div>
                    </div>
                </div>
                
                <div className='col-span-5 bg-muted flex flex-col'>
                    <div className='flex justify-between px-10 py-3 bg-white sticky top-0 border-b'>
                        <div>
                            {title}
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
                                    <DropdownMenuItem className='cursor-pointer' onClick={() => logout()}>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    
                    <div className="p-5 md:container md:py-10 flex-1">
                        {children}          
                    </div>

                    <div className=''>
                        <div className="flex justify-between py-4 container text-muted-foreground font-semibold">
                            <div>
                                <p>&copy; {new Date().getFullYear()}</p>
                            </div>                        </div>
                    </div>
                </div>
            </div>

            <Script src="https://js.paystack.co/v1/inline.js" />
        </div>
    )
}
