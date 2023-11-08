'use client'

import { updatePassword } from '@/api/user/profile'
import { Button } from '@/components/ui/button'
import { Input, InputError } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/context/AuthProvider'
import React, { useEffect } from 'react'

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'


export const PasswordSettings = () => {

    const {user, refresh} = useAuth()

    const {toast} = useToast()

    const [state, action] = useFormState(updatePassword, {
		status: false,
		message: '',
		errors: {}
	})

    useEffect(() => {
        if(state.status){
            if(state.message){
                toast({
                    title: "Success",
                    description: state.message
                })
            }

            if(state.user){
                refresh(state.user)
            }
        }
    }, [state])
    
    return (
        <form className="pt-5 space-y-3 md:w-2/4">
            <div >
                <h3 className="text-lg font-bold">Update Password</h3>
            </div>
            <div>
                <Label>Current Password</Label>
                <Input type='password' name="old_password" placeholder="Old Password" />
                <InputError message={state.errors?.old_password} />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <Label>New Password</Label>
                    <Input type='password' name="new_password" placeholder="New Password" />
                    <InputError message={state.errors?.new_password} />
                </div>
                <div>
                    <Label>Confirm New Password</Label>
                    <Input type='password' name="new_password_confirmation" placeholder="New Password Confirmation" />
                    <InputError message={state.errors?.new_password_confirmation} />
                </div>
            </div>

            <div>
                <Button>Update Password</Button>
            </div>
        </form>
    )
}
