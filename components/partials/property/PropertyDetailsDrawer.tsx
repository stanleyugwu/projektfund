'use client'

import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, SheetHeader, SheetDescription, Sheet, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { IProperty } from "@/types/property";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { IUnit } from "@/types/units";
import { Disclose } from "@/components/ui/disclose";
import _ from "lodash";
import { SaleOffersDrawer } from "./SaleOffersDrawer";
import { getPropertyUnits } from "@/server/property/list";

interface IPropertyDetailsProps {
    property: IProperty
    setOpen: any
    unit?: IUnit,
    sellUnit?: boolean
    setSellUnit?: any
}

export function PropertyDetails ({property, setOpen, unit, setSellUnit} : IPropertyDetailsProps) {
    const [more, setMore] = useState(false)

    const [offers, setOffers] = useState([])

    useEffect(() => {
        getPropertyUnits(property._id).then((units: any) => {
            setOffers(units)
        })
    }, [])

    return (
        <>
            <Sheet  >
                    <SheetTrigger asChild>
                        <Button variant={'ghost'}>
                        View Details
                        </Button>
                    </SheetTrigger>
                <SheetContent  className="min-w-full md:min-w-[470px] overflow-y-auto text-black space-y-1 p-0">
                    <SheetHeader className="sticky top-0 flex items-end justify-end p-3 bg-white">
                        <SheetClose className="inline-block">
                            <X className="w-5 h-5" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                    </SheetHeader>

                    <SheetDescription>
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50" />
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
                                        <h4 className="text-2xl font-semibold leading-none text-primary">{property.available_units.toLocaleString()} </h4>
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
                                    <div className="space-x-3  space-y-3">
                                        <Button className="w-full" variant={'secondary'} onClick={() => setSellUnit(true)}>Sell Units</Button>
                                    </div>
                                </Disclose>
                                
                                <SaleOffersDrawer offers={offers} />
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