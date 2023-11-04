import { userPortfolio } from "@/api/units/units"
import { InvestedPropertyItem } from "@/components/partials/property/InvestedPropertyItem"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"


export default async function Portfolio () {
    const portfolio = await userPortfolio()    
    return (
        <>
            <div className="flex">
                <div className="w-8/12">
                    <Card>
                        <CardContent className="p-10 divide-y-2">
                            {
                                portfolio.length > 0 
                                
                                ?
                                    <>
                                        { 
                                            portfolio.map((item: any) => <InvestedPropertyItem key={item._id} unit={item} />)}    
                                    </>
                                :

                                <div className="p-10 space-y-5 text-center">
                                    <h1 className="text-xl font-semibold">You have not purchased any property units yet!</h1>
                                    <Button asChild>
                                        <Link href={'/properties'} >Find Properties</Link>
                                    </Button>
                                </div>
                            }

                            {}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}