'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input, InputError, InputPrice } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'

import React, { useEffect, useRef } from 'react'
import { FormLoader, Loader } from '@/components/ui/loader'
import { useToast } from '@/components/ui/use-toast'
import { createListing } from '@/api/listings/create'
import { Title } from '@/components/title'
import { EditListingForm } from '../(partials)/EditListingForm'

export default function CreateListing () {

    const [state, action] = useFormState(createListing, {
		status: false,
		message: '',
		errors: {},
		error: ''
	})

    const {toast} = useToast()
    const formRef = useRef<HTMLFormElement>(null)
    useEffect(() => {
        if(state.status) {
            toast({
                title: 'Success',
                description: "The Listing was created successfully!"
            })

            formRef.current?.reset()
        }
    }, [state])

    return (
        <>
            <Title title='Create Listing' />
            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className='p-10'>
                            <form action={action} ref={formRef} encType='multipart/form-data' className='mx-auto space-y-4'>
                                <EditListingForm state={state}  />
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
