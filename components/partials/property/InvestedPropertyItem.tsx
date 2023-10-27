import { Button } from "@/components/ui/button";
import React from "react";

export const InvestedPropertyItem = () => {
        return (
            <div className="flex py-3 space-x-2 align-middle">
                <div className="w-3/12">
                    <div className="rounded aspect-square bg-muted-foreground"></div>
                </div>
                <div className="flex flex-col justify-center flex-1 p-4 space-y-2">
                    <div>
                    <p className="text-xl font-semibold leading-none uppercase">
                        The Penthouse
                    </p>
                    <p className="text-sm">Lagos, Nigeria</p>
                    </div>

                    <div className="grid grid-cols-3">
                        <div>
                            <h2 className="font-medium leading-none">1,000</h2>
                            <p className="text-sm text-muted-foreground">Owned Units</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none">N20,000</h2>
                            <p className="text-sm text-muted-foreground">Current Value Per Unit</p>
                        </div>
                        <div>
                            <h2 className="font-medium leading-none">27th May 2023</h2>
                            <p className="text-sm text-muted-foreground">Date of Purchase</p>
                        </div>
                    </div>

                    <hr />

                    <div className="space-x-2">
                    <Button>Sell Units</Button>
                    <Button variant={"ghost"}>View Details</Button>
                    </div>
                </div>
            </div>
        );
};
