'use client'

import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import React, { useMemo, useState } from "react";
import { ListUnitsForSaleDialog } from "./ListUnitsForSaleDialog";
// import { ListUnitsForSaleDialog } from "./ListUnitsForSaleDialog";

interface IUnitItem {
    unit: any
}

export const InvestedPropertyItem = ({unit} : IUnitItem) => {
    const [modal, setModal] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="flex py-3 space-x-2 align-middle">
                <div className="w-3/12">
                    <div className="rounded h-[200px] md:aspect-square bg-muted-foreground overflow-hidden">
                        <img src={unit.property.image} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-1 p-4 space-y-2">
                    <div>
                        <p className="text-lg font-semibold leading-none uppercase">
                            {unit.property.name}
                        </p>
                        <p className="text-sm">{unit.property.address}, {unit.property.city}, {unit.property.country}</p>
                    </div>

                    <div className="grid grid-cols-3">
                        <div>
                            <h2 className="font-medium leading-none">{unit.units}</h2>
                            <p className="text-sm text-muted-foreground">Owned Units</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none"><Naira /> {unit.property.unit_price.toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Value Per Unit</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none"><Naira /> {(unit.units * unit.property.unit_price).toLocaleString()}</h2>
                            <p className="text-sm text-muted-foreground">Total Value</p>
                        </div>
                    </div>

                    <hr />

                    <div className="space-x-2">
                        <Button onClick={() => setIsOpen(true)}>Sell Units</Button>
                        <Button variant={"ghost"}>View Details</Button>
                    </div>

                    <ListUnitsForSaleDialog modal={modal} setModal={setModal} open={isOpen} setIsOpen={setIsOpen} unit={unit} />
                </div>
            </div>
        </>
    );
};
