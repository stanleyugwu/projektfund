'use client'

import { register } from '@/api/auth/register'
import { Button } from '@/components/ui/button'
import { Input, InputError } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormLoader, Loader } from '@/components/ui/loader'
import Link from 'next/link'
import React from 'react'

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'


export default function () {
	const [state, action] = useFormState(register, {
		status: false,
		message: '',
		errors: {}
	})

    return (
        <div className="grid h-full grid-cols-2" >
			<div className="bg-primary"></div>

			<div className="flex items-center justify-center h-full p-10 flex-column">
				<form action={action} className="w-4/6 space-y-5">
					<div className="space-y-0">
						<h1 className="text-2xl font-semibold tracking-tight">
							Create an account
						</h1>
						<p className="text-sm text-muted-foreground">
							Enter your email below to create your account
						</p>
					</div>

					<div className="grid grid-cols-2 space-x-5">
						<div>
							<Label>First Name</Label>
							<Input name="firstname" placeholder="First Name" />
							<InputError message={state.errors.firstname} />
						</div>
						
						<div>
							<Label>Last Name</Label>
							<Input name="lastname" placeholder="Last Name" />
							<InputError message={state.errors.lastname} />
						</div>
					</div>

					<div>
						<Label>Email Address</Label>
						<Input name="email" type="email" placeholder="Email Address" />
						<InputError message={state.errors.email} />
					</div>
					
					<div>
						<Label>Password</Label>
						<Input name="password" placeholder="Password" type="password" />
						<InputError message={state.errors.password} />
					</div>

					<div>
						<Button type='submit' className="w-full">
							<FormLoader>
								<Loader />
							</FormLoader>
							Create Account 
						</Button>
					</div>

					<div>
						<p className="text-sm font-semibold text-muted-foreground">
							Already have an account? <Link className='text-primary' href={'/login'}>Login</Link>
						</p>
					</div>
				</form>
	
			</div>
		</div>
    )
}
