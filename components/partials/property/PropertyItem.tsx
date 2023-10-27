import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import { IProperty } from "@/types/property";
import Link from "next/link";
import React from "react";
import { PropertyDetails } from "./PropertyDetailsDrawer";

interface PropertyItemProps {
    property: IProperty
}

export const PropertyItem = ({property} : PropertyItemProps) => {
        return (
            <div className="md:flex py-3 md:space-x-2 align-middle">
                <div className="md:w-3/12">
                    <div className="rounded h-[200px] md:aspect-square bg-muted-foreground overflow-hidden">
                        <img src={property.image} alt="" className="w-full h-full object-cover object-center" />
                    </div>
                </div>
                <div className="md:flex flex-col justify-center flex-1 md:p-4 space-y-2 p-0">
                    <div>
                        <p className="md:text-lg font-semibold leading-none uppercase">
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
                        <Button >Buy Units</Button>
                        <PropertyDetails property={property} />
                    </div>
                </div>
            </div>
        );
};
