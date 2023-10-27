'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input, InputError } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'

import React, { useEffect } from 'react'
import { createProperty } from '@/api/property/create'
import { FormLoader, Loader } from '@/components/ui/loader'


export default function () {

    const [state, action] = useFormState(createProperty, {
		status: false,
		message: '',
		errors: {},
		error: ''
	})


    return (
        <Card>
            <CardContent className='p-10'>
                <form action={action} encType='multipart/form-data' className='w-2/3 mx-auto space-y-4'>
                    <div>
                        <Label>Featured Image</Label>
                        <Input id="picture" type="file" className='md:w-1/2' name='image' multiple />
                        <InputError message={state.errors?.image} />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-5">
                        <div className='col-span-2'>
                            <Label>Property Name</Label>
                            <Input name='name' placeholder='Property Name' />
                            <InputError message={state.errors?.name} />
                        </div>

                        <div className="">
                            <Label>Property Type</Label>
                            <Input name='type' placeholder='Property Type' />
                            <InputError message={state.errors?.type} />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label>Property Price</Label>
                            <Input name='price' type='number' placeholder='Price' />
                            <InputError message={state.errors?.price} />
                        </div>

                        <div>
                            <Label>Available Units</Label>
                            <Input name='units' type='number' placeholder='Available Units' />
                            <InputError message={state.errors?.unit} />
                        </div>
                        
                        <div>
                            <Label>Price Per Unit</Label>
                            <Input name='unit_price' type='number' className='appearance-none' placeholder='Per Unit Price' />
                            <InputError message={state.errors?.unit_price} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div>
                            <Label>Country</Label>
                            <Select name='country'>
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
                            <Input name='state' placeholder='Property Name' />
                            <InputError message={state.errors?.state} />
                        </div>
                        <div>
                            <Label>City</Label>
                            <Input name='city' placeholder='Property Name' />
                            <InputError message={state.errors?.city} />
                        </div>
                    </div>
                    
                    <div>
                        <Label>Property Address</Label>
                        <Input name='address' placeholder='Property Address' />
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
                        <p className='text-muted-foreground text-sm'>Upload images for this property</p>
                        <InputError message={state.errors?.gallery} />
                    </div>

                    <div>
                        <Label>Video URL</Label>
                        <Input type="text" name='video' placeholder='Video Link' />
                        <InputError message={state.errors?.video} />
                    </div>

                    <div className="w-1/2 space-y-2">
                        <Label>Availablity</Label>
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
                        <p className='text-muted-foreground text-sm'>Set whether this property should be displayed or hidden</p>
                        <InputError message={state.errors?.status} />
                    </div>

                    <div>
                        <Button type='submit'>
                            <FormLoader>
                                <Loader />
                            </FormLoader>
                            Create Property
                        </Button>
                    </div>

                </form>
            </CardContent>
        </Card>
    )
}
