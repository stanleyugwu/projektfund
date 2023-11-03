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

export const PropertyItem = ({property} : PropertyItemProps) => {
        const [open, setOpen] = useState(false)
        
        return (
            <div className="py-3 align-middle md:flex md:space-x-2">
                <div className="md:w-3/12">
                    <div className="rounded h-[200px] md:aspect-square bg-muted-foreground overflow-hidden">
                        <img src={property.image} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                </div>
                <div className="flex-col justify-center flex-1 p-0 space-y-2 md:flex md:p-4">
                    <div>
                        <p className="font-semibold leading-none uppercase md:text-lg">
                            {property.name}
                        </p>
                        <p className="text-sm">{property.address}, {property.city}, {property.country}</p>
                    </div>

                    <div className="grid grid-cols-3">
                        <div>
                            <h2 className="font-medium leading-none">{property.units.toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Available Units</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none"><Naira />{property.unit_price.toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Per Unit</p>
                        </div>
                    </div>

                    <hr />

                    <div className="space-x-2">
                        <Button onClick={() => setOpen(true)} >Buy Units</Button>
                        <PropertyDetails setOpen={setOpen} property={property} />
                        <PurchasePropertyDialog open={open} setOpen={setOpen} property={property}  />
                    </div>
                </div>
            </div>
        );
};
