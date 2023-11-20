import { listListings } from "@/api/listings/list"
import { Naira } from "@/components/naira"
import { Title } from "@/components/title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IListing } from "@/types/listings"
import { IProperty } from "@/types/property"
import Link from "next/link"

export default async () => {
    const listings : IListing[] = await listListings()
    
    return (
        <>
            <Title title="Listings" />
            <Card>
                <CardHeader className="px-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-lg font-semibold">Listings</h1>
                        </div>
                        <div>
                            <Button asChild>
                                <Link href="/admin/listings/create">Add Listing</Link>
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="px-10">
                    <Table>
                        <TableCaption>Listed Properties.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[400px]">Listings</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Availability</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {
                                listings.map((listing) => (
                                    <TableRow key={listing.id}>
                                        <TableCell className="w-[400px]">{listing.title}</TableCell>
                                        <TableCell><Naira />{listing.price.toLocaleString()}</TableCell>
                                        <TableCell>{listing.city} {listing.state}</TableCell>
                                        <TableCell ><Switch checked={listing.status} disabled  /></TableCell>
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