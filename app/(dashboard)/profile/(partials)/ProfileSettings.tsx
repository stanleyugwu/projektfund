'use client'

import { updateProfile } from '@/server/user/profile'
import { Button } from '@/components/ui/button'
import { Input, InputError } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormLoader } from '@/components/ui/loader'
import { toast, useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/context/AuthProvider'
import React, { useEffect } from 'react'

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { useApp } from '@/context/AppContext'

export const ProfileSettings = () => {

    const { user, refresh } = useAuth()
    const { toast } = useToast()

    const [state, action] = useFormState(updateProfile, {
        status: false,
        message: '',
        errors: {}
    })

    useApp({
        title: 'Profile'
    })

    useEffect(() => {
        if (state.status) {
            if (state.message) {
                toast({
                    title: "Success",
                    description: state.message
                })
            }

            if (state.user) {
                refresh(state.user)
            }
        }
    }, [state])

    return (
        <form action={action} encType='multipart/form-data' className="pb-5 space-y-3 md:w-2/4">
            <div className="md:w-1/2">
                <Label>Profile Image</Label>
                <Input type="file" name="avatar" />
                <InputError message={state.errors?.avatar} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <Label>First Name</Label>
                    <Input name="firstname" defaultValue={user?.firstname} placeholder="First Name" />
                    <InputError message={state.errors?.firstname} />
                </div>
                <div>
                    <Label>Last Name</Label>
                    <Input name="lastname" defaultValue={user?.lastname} placeholder="Last Name" />
                    <InputError message={state.errors?.lastname} />
                </div>
            </div>

            <div>
                <Label>Email Address</Label>
                <Input name="email" defaultValue={user?.email} placeholder="Email Address" />
                <InputError message={state.errors?.email} />
            </div>

            <div>
                <Button><FormLoader /> Update Profile </Button>
            </div>
        </form>
    )
}
