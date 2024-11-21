"use client"

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = (<><li>
        <a className="transition text-gray-700 hover:text-gray-500/75" href="/about">
            About
        </a>
    </li>
        <li>
            <a className="text-gray-700 transition hover:text-gray-500/75" href="/listings">
                Listings
            </a>
        </li>
        <li>
            <a className="text-gray-700 transition hover:text-gray-500/75" href="/contact">
                Contact
            </a>
        </li></>)

    return (
        <>
            <header className="px-2">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block font-semibold uppercase" href="/">
                                <span >Projektfund</span>
                            </a>
                        </div>
                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    {menuItems}
                                </ul>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <Button asChild variant={'secondary'}>
                                        <a href="/login">
                                            Login
                                        </a>
                                    </Button>

                                    <div className="hidden sm:flex">
                                        <Button asChild>
                                            <a href="/register">Register</a>
                                        </Button>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <button onClick={() => setMenuOpen(!menuOpen)} className={cn("p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75", menuOpen && 'border border-primary')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={menuOpen ? "hsl(262.1 83.3% 57.8%)" : "currentColor"} strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Nav */}
                    <ul className={cn("flex py-4 flex-col items-center gap-6 text-sm", menuOpen ? "h-full" : "hidden h-0")}>
                        {menuItems}
                    </ul>

                </div>
            </header>
        </>
    )
}
