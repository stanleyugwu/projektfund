'use client'

import { Button } from '@/components/ui/button'
import { Input, InputError } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/context/AuthProvider'
import React from 'react'

export const PasswordSettings = () => {

    const {user, refresh} = useAuth()
    
    return (
        <form className="pt-5 space-y-3 md:w-2/4">
            <div >
                <h3 className="text-lg font-bold">Update Password</h3>
            </div>
            <div>
                <Label>Current Password</Label>
                <Input name="firstname" placeholder="First Name" />
                <InputError message="" />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <Label>New Password</Label>
                    <Input name="lastname" placeholder="Last Name" />
                    <InputError message="" />
                </div>
                <div>
                    <Label>Confirm New Password</Label>
                    <Input name="lastname" placeholder="Last Name" />
                    <InputError message="" />
                </div>
            </div>

            <div>
                <Button>Update Password</Button>
            </div>
        </form>
    )
}
