import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
	return (
		<>
			<header className="">
				<div className="mx-auto max-w-7xl">
					<div className="flex items-center justify-between py-6">
					<div className="flex-1 md:flex md:items-center md:gap-12">
						<a className="block text-teal-600" href="/">
							<span >Projektfund</span>
						</a>
					</div>
					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block">
						<ul className="flex items-center gap-6 text-sm">
							<li>
								<a className="transition " href="/about">
									About
								</a>
							</li>
							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/listings">
									Listings
								</a>
							</li>
							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/contact">
									Contact 
								</a>
							</li>
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
								<button className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
								</button>
							</div>
						</div>
					</div>
					</div>
				</div>
			</header>
		</>
	)
}
