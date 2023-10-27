'use client'

import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet, SheetFooter } from "@/components/ui/sheet";
import { IProperty } from "@/types/property";
import { useState } from "react";
import { PurchasePropertyDialog } from "./PurchasePropertyDialog";
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react";

interface IPropertyDetailsProps {
    property: IProperty
}

export function PropertyDetails ({property} : IPropertyDetailsProps) {
    const [open, setOpen] = useState(false)
    const [more, setMore] = useState(false)

    return (
        <>
            <Sheet  >
                <Button variant={'ghost'} asChild >
                    <SheetTrigger>View Details</SheetTrigger>
                </Button>
                <SheetContent  className="min-w-full md:min-w-[470px] overflow-y-auto text-black space-y-1 p-0">
                    <SheetHeader className="p-3 flex justify-end items-end sticky top-0 bg-white">
                        <SheetPrimitive.Close className="inline-block">
                            <X className="h-8 w-8" />
                            <span className="sr-only">Close</span>
                        </SheetPrimitive.Close>
                    </SheetHeader>

                    <SheetDescription>
                        <div className="h-64 overflow-hidden">
                            <img src={property.image} className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="p-5 space-y-3 text-black">
                            <div className="space-y-2">
                                <div>
                                    <p className="text-lg font-semibold leading-none">
                                        {property.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{property.address}, {property.city}, {property.country}</p>
                                </div>

                                <div className="flex justify-between">
                                    <div className="">
                                        <h4 className="text-2xl font-semibold text-primary leading-none">{property.units.toLocaleString()} </h4>
                                        <span className="text-sm font-normal text-muted-foreground leading-none">Available Units</span>
                                    </div>
                                    <div className="text-end">
                                        <h4 className="text-2xl font-semibold text-primary leading-none"><Naira />{property.unit_price.toLocaleString()} </h4>
                                        <span className="text-sm font-normal text-muted-foreground leading-none ms-2">/ unit</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <PurchasePropertyDialog property={property} />
                                {/* <Button variant={'default'} size={'lg'} className="w-full">Purchase Units</Button> */}

                                {/* <form className="flex space-x-2">
                                    <Input className="flex-1" />
                                    <Button  >Proceed to Payment</Button>
                                </form> */}
                            </div>

                            <div className="space-y-3 bg-primary-foreground rounded p-3">
                                <h4 className="text-lg font-semibold  leading-none">About this property</h4>
                                <div>
                                    <div className={`whitespace-break-spaces text-muted-foreground transition-all duration-200 ${more ? '' : 'line-clamp-[10]'}`}>{property.description}</div>
                                    {
                                        more ? <Button variant={'link'} onClick={() => setMore(false)} className="px-0 py-0">View Less</Button> : <Button variant={'link'} onClick={() => setMore(true)} className="px-0 py-0">View More</Button>
                                    }

                                </div>
                            </div>

                            {/* <div>
                                <h4 className="text-lg font-semibold  leading-none">More Images</h4>

                                <div className="gap-1 columns-2">
                                    {property.gallery.map(image => (
                                        <div className="py-[2px]">
                                            <img src={image as string} className="w-100" loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div> */}

                        </div>
                    </SheetDescription>
                    <SheetFooter>

                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}