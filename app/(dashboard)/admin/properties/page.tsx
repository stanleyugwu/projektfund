import { listProperties } from "@/api/property/list"
import { Naira } from "@/components/naira"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IProperty } from "@/types/property"
import Link from "next/link"
import { PropertyItem } from "./(partials)/PropertyItem"
import { Title } from "@/components/title"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'List Properties',
}

export default async () => {
    const properties : IProperty[] = await listProperties()

    return (
        <>
            <Title title="List Properties" />
            <Card>
                <CardHeader className="px-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-lg font-semibold">Properties</h1>
                        </div>
                        <div>
                            <Button asChild>
                                <Link href="/admin/properties/create">Add Property</Link>
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="px-10">
                    <Table>
                        <TableCaption>Listed Properties.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[400px]">Property</TableHead>
                                <TableHead>Units</TableHead>
                                <TableHead>Unit Price</TableHead>
                                <TableHead>Sold Units</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {
                                properties.map((property) => (
                                    <PropertyItem property={property} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}