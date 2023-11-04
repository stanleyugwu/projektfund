'use client'

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Input, InputError } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { login } from "@/api/auth/login";
import { FormLoader, Loader } from "@/components/ui/loader";

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { AlertError } from "@/components/partials/AlertError";
import { useAuth } from "@/context/AuthProvider";
import { redirect } from "next/navigation";
import roles from "@/lib/roles";

export default () => {

	const {login: authLogin} = useAuth()

	const [state, action] = useFormState(login, {
		status: false,
		message: '',
		errors: {},
		error: ''
	})

	useEffect(() => {
		if(state.status) {
			authLogin(state.user)
			state.user.role == roles.user ? redirect('/dashboard') : redirect('/admin')
		}
	}, [state])

    return (
		<div className="grid h-full grid-cols-2" >
			<div>

			</div>

			<div className="flex items-center justify-center h-full p-10 flex-column">
				<form action={action} className="w-3/5 space-y-5">
					{state.error ? <AlertError message={state.error} title="Email Verification" /> : ''}
					<div className="space-y-0">
						<h1 className="text-2xl font-semibold tracking-tight">
							Log into your account
						</h1>
						<p className="text-sm text-muted-foreground">
							Enter your email below to create your account
						</p>
					</div>

						<div>
							<Label>Email Address</Label>
							<Input name="email" type="email" placeholder="Email Address" />
							<InputError message={state.email} />
						</div>
						
						<div>
							<Label>Password</Label>
							<Input name="password" placeholder="Password" type="password" />
							<InputError message={state.password} />
						</div>
						<div>
							<Button className="w-full">
								<FormLoader>
									<Loader/>
								</FormLoader> Login</Button>
						</div>

					<div>
						<p className="text-sm text-muted-foreground">
							Don't have an account? <Link href={'/register'}>Register</Link>
						</p>
					</div>
				</form>
	
			</div>
		</div>
    );
};
