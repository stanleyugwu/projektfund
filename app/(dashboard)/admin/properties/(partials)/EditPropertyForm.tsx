'use client'

import { Button } from '@/components/ui/button'
import { Input, InputError, InputPrice } from '@/components/ui/input'
import { FormLoader, Loader } from '@/components/ui/loader'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'
import React, { useEffect, useRef } from 'react'
import { IProperty } from '@/types/property'

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { useToast } from '@/components/ui/use-toast'
import { createProperty } from '@/server/property/create'

interface IEditPropertyForm {
    property?: IProperty,
}

export const EditPropertyForm = ({property} : IEditPropertyForm) => {
    
    const [state, action] = useFormState(createProperty, {
		status: false,
		message: '',
		errors: {},
		error: '',
	})

    const {toast} = useToast()
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if(state.status) {
            toast({
                title: 'Success',
                description: "The property was updated successfully!"
            })

            // formRef.current?.reset()
        }
    }, [state])

    return (
        <>
            <form action={action} ref={formRef} encType='multipart/form-data' className='mx-auto space-y-4'>
                <div>
                    <Label>Featured Image</Label>
                    <Input id="picture" type="file" className='md:w-1/2' name='image' multiple />
                    <InputError message={state.errors?.image} />
                </div>

                <input type="text" name="property_id" value={property?._id} hidden />
                
                <div className="grid grid-cols-3 gap-5">
                    <div className='col-span-2'>
                        <Label>Property Name</Label>
                        <Input name='name' defaultValue={property?.name} placeholder='Property Name' />
                        <InputError message={state.errors?.name} />
                    </div>

                    <div className="">
                        <Label>Property Type</Label>
                        <Input name='type' defaultValue={property?.type} placeholder='Property Type' />
                        <InputError message={state.errors?.type} />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Label>Property Price</Label>
                        <InputPrice defaultValue={property?.price} name='price' />
                        <InputError message={state.errors?.price} />
                    </div>

                    <div>
                        <Label>Available Units</Label>
                        <Input name='units' defaultValue={property?.units} type='number' placeholder='Available Units' />
                        <InputError message={state.errors?.unit} />
                    </div>
                    
                    <div>
                        <Label>Price Per Unit</Label>
                        <InputPrice defaultValue={property?.unit_price} name='unit_price' />
                        <InputError message={state.errors?.unit_price} />
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    <div>
                        <Label>Country</Label>
                        <Select defaultValue={property?.country} name='country'>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value='Nigeria'>Nigeria</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <InputError message={state.errors?.country} />
                    </div>
                    <div>
                        <Label>State</Label>
                        <Input name='state' defaultValue={property?.state} placeholder='State' />
                        <InputError message={state.errors?.state} />
                    </div>
                    <div>
                        <Label>City</Label>
                        <Input name='city' defaultValue={property?.city} placeholder='City' />
                        <InputError message={state.errors?.city} />
                    </div>
                </div>
                
                <div>
                    <Label>Property Address</Label>
                    <Input name='address' defaultValue={property?.address} placeholder='Property Address' />
                    <InputError message={state.errors?.address} />
                </div>
                
                <div>
                    <Label>Property Description</Label>
                    <Textarea name='description' defaultValue={property?.description} className='resize-none' rows={10} placeholder='Property Description' />
                    <InputError message={state.errors?.description} />
                </div>


                {/* <div>
                    <Label>Gallery</Label>
                    <Input id="picture" type="file" name='gallery' multiple />
                    <p className='text-sm text-muted-foreground'>Upload images for this property</p>
                    <InputError message={state.errors?.gallery} />
                </div>

                <div>
                    <Label>Video URL</Label>
                    <Input type="text" name='video' placeholder='Video Link' />
                    <InputError message={state.errors?.video} />
                </div> */}

                <div className="w-1/2 space-y-2">
                    <Label>Availablity</Label>
                    <Select defaultValue={property?.status ? 'active' : 'inactive'} name='status'>
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
                        Update Property
                    </Button>
                </div>
            </form>
        </>
    )
}
