import { Button } from '@/components/ui/button'
import { Input, InputError, InputPrice } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormLoader } from '@/components/ui/loader'
import { Textarea } from '@/components/ui/textarea'
import { IListing } from '@/types/listings'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'
import { Loader } from 'lucide-react'
import React from 'react'
import { Switch } from '@/components/ui/switch'

interface IEditListingForm {
    listing?: IListing,
    state: {
        errors: Record<string, string>
    }
}

export const EditListingForm = ({ state, listing }: IEditListingForm) => {

    return (
        <>
            <div>
                <Label>Featured Image</Label>
                <Input id="picture" type="file" className='md:w-1/2' name='image' multiple />
                <InputError message={state.errors?.image} />
            </div>

            <input type="text" name="listing_id" value={listing?._id} hidden />

            <div className="grid grid-cols-3 gap-5">
                <div className='col-span-2'>
                    <Label>Listing Name</Label>
                    <Input name='title' defaultValue={listing?.title} placeholder='Listing Name' />
                    <InputError message={state.errors?.title} />
                </div>

                <div className="">
                    <Label>Listing Type</Label>
                    <Select name='type' defaultValue={listing?.type}>
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
                    <InputPrice defaultValue={listing?.price} name='price' />
                    <InputError message={state.errors?.price} />
                </div>
                <div>
                    <Label>Duration (For rent)</Label>
                    <Select defaultValue={listing?.duration} name='duration'>
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
                    <Input name='state' defaultValue={listing?.state} placeholder='State' />
                    <InputError message={state.errors?.state} />
                </div>
                <div>
                    <Label>City</Label>
                    <Input name='city' defaultValue={listing?.city} placeholder='City' />
                    <InputError message={state.errors?.city} />
                </div>
            </div>

            <div>
                <Label>Property Address</Label>
                <Input name='address' defaultValue={listing?.address} placeholder='Address' />
                <InputError message={state.errors?.address} />
            </div>

            <div>
                <Label>Property Description</Label>
                <Textarea name='description' defaultValue={listing?.description} className='resize-none' rows={10} placeholder='Property Description' />
                <InputError message={state.errors?.description} />
            </div>


            {/* <div>
                <Label>Gallery</Label>
                <Input id="picture" type="file" name='gallery' multiple />
                <p className='text-sm text-muted-foreground'>Upload images for this property</p>
                <InputError message={state.errors?.gallery} />
            </div> */}

            <div>
                <Label>Video URL</Label>
                <Input type="text" name='video' defaultValue={listing?.video} placeholder='Video Link' />
                <InputError message={state.errors?.video} />
            </div>

            <div className="flex flex-col w-1/2 space-y-2">
                <Label >Status</Label>
                <Select name='status' defaultValue={listing?.status ? 'active' : 'inactive'}>
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
                    {listing ? 'Update' : 'Create'} Listing
                </Button>
            </div>
        </>
    )
}
