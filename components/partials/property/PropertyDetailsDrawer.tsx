'use client'

import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, SheetHeader, SheetDescription, Sheet, SheetFooter } from "@/components/ui/sheet";
import { IProperty } from "@/types/property";
import { useState } from "react";
import { PurchasePropertyDialog } from "./PurchasePropertyDialog";
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react";
import { IUnit } from "@/types/units";
import { Disclose } from "@/components/ui/disclose";
import _ from "lodash";

interface IPropertyDetailsProps {
    property: IProperty
    setOpen: any
    unit?: IUnit,
    sellUnit?: boolean
    setSellUnit?: any
}

export function PropertyDetails ({property, setOpen, unit, setSellUnit} : IPropertyDetailsProps) {
    const [more, setMore] = useState(false)

    return (
        <>
            <Sheet  >
                <Button variant={'ghost'} asChild >
                    <SheetTrigger>View Details</SheetTrigger>
                </Button>
                <SheetContent  className="min-w-full md:min-w-[470px] overflow-y-auto text-black space-y-1 p-0">
                    <SheetHeader className="sticky top-0 flex items-end justify-end p-3 bg-white">
                        <SheetPrimitive.Close className="inline-block">
                            <X className="w-8 h-8" />
                            <span className="sr-only">Close</span>
                        </SheetPrimitive.Close>
                    </SheetHeader>

                    <SheetDescription>
                        <div className="h-64 overflow-hidden">
                            <img src={property.image} className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="p-5 space-y-4 text-black">
                            <div className="space-y-2">
                                <div>
                                    <Disclose show={!!unit}>
                                        <h4 className="mb-1 text-xl font-semibold text-primary"><Naira />{property.unit_price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground"> per unit</span></h4>
                                    </Disclose>
                                    <p className="text-lg font-semibold leading-none">
                                        {property.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{property.address}, {property.city}, {property.country}</p>
                                </div>

                                <div className="flex justify-between">
                                    <div className="">
                                        <h4 className="text-2xl font-semibold leading-none text-primary">{property.units.toLocaleString()} </h4>
                                        <span className="text-sm font-normal leading-none text-muted-foreground">Available Units</span>
                                    </div>

                                    <Disclose show={!!unit}>
                                        <div className="text-end">
                                            <h4 className="text-2xl font-semibold leading-none text-primary">{unit?.units} </h4>
                                            <span className="text-sm font-normal leading-none text-muted-foreground ms-2">Units Owned</span>
                                        </div>
                                    </Disclose>
                                    
                                    <Disclose show={!!!unit}>
                                        <div className="text-end">
                                            <h4 className="text-2xl font-semibold leading-none text-primary"><Naira />{property.unit_price.toLocaleString()} </h4>
                                            <span className="text-sm font-normal leading-none text-muted-foreground ms-2">Per Unit</span>
                                        </div>
                                    </Disclose>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Button variant={'default'} onClick={() => setOpen(true)} size={'lg'} className="w-full">Purchase Units</Button>

                                <Disclose show={!!unit}>
                                    <div className="space-x-3 space-y-3">
                                        <Button className="w-full" variant={'secondary'} onClick={() => setSellUnit(true)}>Sell Units</Button>
                                    </div>
                                </Disclose>
                            </div>

                            <div className="p-3 space-y-3 rounded bg-primary-foreground">
                                <h4 className="text-lg font-semibold leading-none">About this property</h4>
                                <div>
                                    <div className={`whitespace-break-spaces text-muted-foreground transition-all duration-200 ${more ? '' : 'line-clamp-[10]'}`}>{property.description}</div>
                                    {
                                        more ? <Button variant={'link'} onClick={() => setMore(false)} className="px-0 py-0">View Less</Button> : <Button variant={'link'} onClick={() => setMore(true)} className="px-0 py-0">View More</Button>
                                    }

                                </div>
                            </div>
                        </div>
                    </SheetDescription>
                    <SheetFooter>

                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}