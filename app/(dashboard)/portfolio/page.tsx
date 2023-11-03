import { userPortfolio } from "@/api/units/units"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default async () => {

    const portfolio = await userPortfolio()
    
    return (
        <>
            <Card>
                <CardContent className="p-10">
                    <div className="">
                        {
                            portfolio.map(item => (
                                <div className="flex items-center justify-between gap-10 p-3 px-5 hover:bg-slate-50">
                                    <div className="flex items-center w-5/12 space-x-10">
                                        <div className="w-2/12">
                                            <img src={item.property.image} className="object-cover rounded aspect-square" alt="" />
                                        </div>
                                        <div className="w-10/12">
                                            <p className="text-lg font-semibold">{item.property.name}</p>
                                            <p className="text-sm">{item.property.address}, {item.property.city}, {item.property.country}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex space-x-20">
                                            <div className="text-center">
                                                <p>Total Units</p>
                                                <p>{item.units}</p>
                                            </div>
                                            <div className="text-center">
                                                <p>Total Value</p>
                                                <p>{item.units}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-x-2">
                                        <Button variant={'outline'}>Resell Units</Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </CardContent>
            </Card>
        </>
    )
}