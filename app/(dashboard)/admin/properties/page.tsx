import { listProperties } from "@/api/property/list"
import { Naira } from "@/components/naira"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IProperty } from "@/types/property"
import Link from "next/link"

export default async () => {
    const properties : IProperty[] = await listProperties()

    return (
        <>
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
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[400px]">Property</TableHead>
                                <TableHead>Units</TableHead>
                                <TableHead>Unit Price</TableHead>
                                <TableHead>Sold Units</TableHead>
                                {/* <TableHead>Amount</TableHead> */}
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {
                                properties.map((property) => (
                                    <TableRow key={property.id}>
                                        <TableCell className="w-[400px]">{property.name}</TableCell>
                                        <TableCell>{property.units.toLocaleString()}</TableCell>
                                        <TableCell><Naira />{property.unit_price.toLocaleString()}</TableCell>
                                        <TableCell >$250.00</TableCell>
                                        <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Deactivate</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}