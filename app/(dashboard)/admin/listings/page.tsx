import { allListings } from "@/server/listings/list"
import { Title } from "@/components/title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IListing } from "@/types/listings"
import Link from "next/link"
import { ListingItem } from "./(partials)/ListingItem"
import { Metadata } from "next"
import { ListingShow } from "./(partials)/ListingShow"

export const metadata: Metadata = {
    title: 'Listings',
}

export default async function Listings () {
    const listings : IListing[] = await allListings()

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
                        <TableCaption>Listings</TableCaption>
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
                            <ListingShow listings={listings} />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}