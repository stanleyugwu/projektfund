'use client'

import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import { IProperty } from "@/types/property";
import React, { useState } from "react";
import { PropertyDetails } from "./PropertyDetailsDrawer";
import { PurchasePropertyDialog } from "./PurchasePropertyDialog";

interface PropertyItemProps {
    property: IProperty
}

export const PropertyItem = ({ property }: PropertyItemProps) => {
    const [open, setOpen] = useState(false)

    const ASSET_BASE = process.env.NEXT_PUBLIC_CDN_IMAGE_BASE_URL;


    return (
        <div className="items-center py-3 md:flex md:space-x-5">
            <div className="md:w-2/12">
                <div className="overflow-hidden rounded md:aspect-square bg-muted-foreground">
                    <img src={`${ASSET_BASE}${property.image}`} alt="" className="object-cover object-center w-full h-full" />
                </div>
            </div>
            <div className="flex-col flex-1 p-0 space-y-2 md:flex">
                <div>
                    <p className="font-semibold leading-none">{property.name}</p>
                    <p className="text-sm">{property.address}, {property.city}, {property.country}</p>
                </div>

                <div className="grid grid-cols-3">
                    <div>
                        <h2 className="font-medium leading-none">{property.available_units?.toLocaleString()} out of {property.units?.toLocaleString()}</h2>
                        <p className="text-sm text-muted-foreground">Available Slots</p>
                    </div>
                    <div>
                        <h2 className="font-medium leading-none"><Naira />{property.unit_price.toLocaleString()}</h2>
                        <p className="text-sm text-muted-foreground">Per Slot</p>
                    </div>
                </div>

                <hr />

                <div className="space-x-2">
                    {
                        property.available_units >= 1 ? <>
                            <Button onClick={() => setOpen(true)}>Buy Slots</Button>
                            <PropertyDetails setOpen={setOpen} property={property} />
                        </> :
                            <>
                                <PropertyDetails viewDetailsBtnLabel="View Details" viewDetailsBtnVariant={"default"} setOpen={setOpen} property={property} />
                            </>
                    }

                    <PurchasePropertyDialog open={open} setOpen={setOpen} property={property} />
                </div>
            </div>
        </div>
    );
};