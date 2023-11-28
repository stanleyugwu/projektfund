import { listProperties } from "@/api/property/list"
import { Naira } from "@/components/naira"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { IProperty } from "@/types/property"
import Link from "next/link"
import { Title } from "@/components/title"
import { Metadata } from "next"
import { PropertiesTable } from "./(partials)/PropertiesTable"

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
                    <PropertiesTable properties={properties} />
                </CardContent>
            </Card>
        </>
    )
}