'use client'

import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import React, { useMemo, useState } from "react";
import { ListUnitsForSaleDialog } from "./ListUnitsForSaleDialog";
import { PropertyDetails } from "./PropertyDetailsDrawer";
import { PurchasePropertyDialog } from "./PurchasePropertyDialog";
import { SaleOffersDrawer } from "./SaleOffersDrawer";
// import { ListUnitsForSaleDialog } from "./ListUnitsForSaleDialog";

interface IUnitItem {
    unit: any
}

export const InvestedPropertyItem = ({unit} : IUnitItem) => {
    const [modal, setModal] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const [sellUnit, setSellUnit] = useState(false)
    const [buyProperty, setBuyProperty] = useState(false)
    
    return (
        <>
            <div className="flex py-5 space-x-5">
                <div className="w-2/12">
                    <div className="overflow-hidden rounded md:aspect-square bg-muted-foreground">
                        <img src={unit.property.image} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-1 space-y-3">
                    <div>
                        <p className="font-semibold leading-none">
                            {unit.property.name}
                        </p>
                        <p className="text-sm">{unit.property.address}, {unit.property.city}, {unit.property.country}</p>
                    </div>

                    <div className="grid grid-cols-4">
                        <div>
                            <h2 className="font-medium leading-none">{unit.available_units}</h2>
                            <p className="text-sm text-muted-foreground">Units Owned</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none">{unit.listed_units}</h2>
                            <p className="text-sm text-muted-foreground">Units Listed</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none"><Naira /> {unit.property.unit_price.toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Price Per Unit</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none"><Naira /> {(unit.units * unit.property.unit_price).toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Total Value</p>
                        </div>
                    </div>

                    <hr />

                    <div className="space-x-2">
                        <Button onClick={() => setIsOpen(true)}>Sell Units</Button>
                        <PropertyDetails setOpen={setBuyProperty} property={unit.property} setSellUnit={setIsOpen} unit={unit} />
                    </div>
                    
                    <PurchasePropertyDialog open={buyProperty} property={unit.property} setOpen={setBuyProperty}  />
                    <ListUnitsForSaleDialog modal={modal} setModal={setModal} open={isOpen} setIsOpen={setIsOpen} unit={unit} />
                </div>
            </div>
        </>
    );
};
