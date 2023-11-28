import { Title } from '@/components/title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'
import React from 'react'
import { getPropertyPurchasedUnits, getPropertyUnits, singleProperty } from '@/api/property/list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table'
import { ScaleIcon, Table } from 'lucide-react'
import { ListingItem } from '../../listings/(partials)/ListingItem'
import { PurchasedUnitsTable } from '../(partials)/PurchasedUnitsTable'
import { ListedUnitTable } from '../(partials)/ListedUnitTable'
import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata : Metadata = {
    title: 'Edit Property'
}

export default async function ({params} : any) {
    const property = await singleProperty(params.id)

    const purchasedUnits = await getPropertyPurchasedUnits(params.id)
    const listedUnits = await getPropertyUnits(params.id)    

    return (
        <>
            <Title title={property.name} />

            <div className="flex">
                <div className="w-full">
                    <Card>
                        <CardContent className='p-10 space-y-5'>
                            <div className="flex flex-wrap space-x-3">
                                <Button asChild size={'sm'}>
                                    <Link href={``}>Edit Property</Link>
                                </Button>
                                <Button asChild variant={'outline'} size={'sm'}>
                                    <Link href="">Deactivate Property</Link>
                                </Button>
                                <Button variant={'destructive'} size={'sm'}>Delete Property</Button>
                            </div>
                            <div className='grid gap-4 md:grid-cols-5'>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-sm font-medium">Total Units</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xl font-bold">{property.units}</div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-sm font-medium">Available Units</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xl font-bold">{property.available_units}</div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-sm font-medium">Price Per Unit</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xl font-bold"><Naira />{property.unit_price.toLocaleString()}</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-sm font-medium">Current Value</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xl font-bold"><Naira />{property.unit_price.toLocaleString()}</div>
                                    </CardContent>
                                </Card>
                            </div>

                            
                            <Tabs defaultValue='purchased'>
                                <TabsList>
                                    <TabsTrigger value='purchased'>
                                        Purchased Units
                                    </TabsTrigger>

                                    <TabsTrigger value='reselling'>
                                        Listed Units
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value='purchased'>
                                    <PurchasedUnitsTable units={purchasedUnits} property={property} />
                                </TabsContent>
                                <TabsContent value='reselling'>
                                    <ListedUnitTable units={listedUnits} property={property} />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </>
    )
}
