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


export default function () {

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
                                <div>
                                    <Label>Featured Image</Label>
                                    <Input id="picture" type="file" className='md:w-1/2' name='image' multiple />
                                    <InputError message={state.errors?.image} />
                                </div>
                                
                                <div className="grid grid-cols-3 gap-5">
                                    <div className='col-span-2'>
                                        <Label>Listing Name</Label>
                                        <Input name='title' placeholder='Listing Name' />
                                        <InputError message={state.errors?.title} />
                                    </div>

                                    <div className="">
                                        <Label>Listing Type</Label>
                                        <Select name='type'>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="For Sale">For Sale</SelectItem>
                                                    <SelectItem value="For Rent">For Rent</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={state.errors?.type} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <Label>Price</Label>
                                        <InputPrice name='price' />
                                        <InputError message={state.errors?.price} />
                                    </div>
                                    <div>
                                        <Label>Duration (For rentals)</Label>
                                        <Select name='duration'>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Duration" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="Monthly">Monthly</SelectItem>
                                                    <SelectItem value="Yearly">Yearly</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={state.errors?.duration} />
                                    </div>
                                </div>

                                <div className="grid gap-5 md:grid-cols-3">
                                    <div>
                                        <Label>State</Label>
                                        <Input name='state' placeholder='State' />
                                        <InputError message={state.errors?.state} />
                                    </div>
                                    <div>
                                        <Label>City</Label>
                                        <Input name='city' placeholder='City' />
                                        <InputError message={state.errors?.city} />
                                    </div>
                                </div>
                                
                                <div>
                                    <Label>Property Address</Label>
                                    <Input name='address' placeholder='Address' />
                                    <InputError message={state.errors?.address} />
                                </div>
                                
                                <div>
                                    <Label>Property Description</Label>
                                    <Textarea name='description' className='resize-none' rows={10} placeholder='Property Description' />
                                    <InputError message={state.errors?.description} />
                                </div>


                                <div>
                                    <Label>Gallery</Label>
                                    <Input id="picture" type="file" name='gallery' multiple />
                                    <p className='text-sm text-muted-foreground'>Upload images for this property</p>
                                    <InputError message={state.errors?.gallery} />
                                </div>

                                <div>
                                    <Label>Video URL</Label>
                                    <Input type="text" name='video' placeholder='Video Link' />
                                    <InputError message={state.errors?.video} />
                                </div>

                                <div className="w-1/2 space-y-2">
                                    <Select name='status'>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <p className='text-sm text-muted-foreground'>Set whether this property should be displayed or hidden</p>
                                    <InputError message={state.errors?.status} />
                                </div>

                                <div>
                                    <Button type='submit'>
                                        <FormLoader>
                                            <Loader />
                                        </FormLoader>
                                        Create Listing
                                    </Button>
                                </div>

                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
