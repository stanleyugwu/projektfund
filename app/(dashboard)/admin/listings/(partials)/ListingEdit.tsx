'use client'

import React, { useEffect, useRef } from 'react'
import { EditListingForm } from './EditListingForm'

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { createListing } from '@/server/listings/create'
import { useToast } from '@/components/ui/use-toast'
import { IListing } from '@/types/listings'

interface IListingEditProps {
    listing: IListing
}

export const ListingEdit = ({listing} : IListingEditProps) => {

    const [state, action] = useFormState(createListing, {
		status: false,
		message: '',
		errors: {},
        listing_id: listing._id,
		error: ''
	})

    const {toast} = useToast()
    const formRef = useRef<HTMLFormElement>(null)
    
    useEffect(() => {
        if(state.status) {
            toast({
                title: 'Success',
                description: "The Listing was updated successfully!"
            })

            formRef.current?.reset()
        }
    }, [state, toast])

    return (
        <form action={action} ref={formRef} encType='multipart/form-data' className='mx-auto space-y-4'>
            <EditListingForm state={state} listing={listing} />
        </form>
    )
}
