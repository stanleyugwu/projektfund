import { listProperties } from "@/api/property/list";
import { InvestedPropertyItem } from "@/components/partials/property/InvestedPropertyItem";
import { PropertyItem } from "@/components/partials/property/PropertyItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IProperty } from "@/types/property";
import { LandmarkIcon } from "lucide-react";
import React from "react";

export default async () => {

	const properties = await listProperties()

	return (
		<div>
			<div className="">
				<div className="md:w-2/3">
					<div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
						<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">
							Total Investments
							</CardTitle>
							<LandmarkIcon className="w-4 h-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">+2350</div>
							<p className="text-xs text-muted-foreground">
							+180.1% from last month
							</p>
						</CardContent>
						</Card>
						<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">
							Total Investments
							</CardTitle>
							<LandmarkIcon className="w-4 h-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">+2350</div>
							<p className="text-xs text-muted-foreground">
							+180.1% from last month
							</p>
						</CardContent>
						</Card>
					</div>

					<div>
						<Card>
							<CardContent className="p-5">
								<Tabs defaultValue="account" >
									<TabsList>
										<TabsTrigger value="account">Explore</TabsTrigger>
										<TabsTrigger value="password">Investments</TabsTrigger>
										<TabsTrigger value="completed">Offers</TabsTrigger>
									</TabsList>
									
									<div className="w-full mt-3">
										<TabsContent value="account" className="w-full space-y-3" >
											<div className="flex items-center w-full space-x-2">
												<Input type="email" placeholder="Search for available properties" />
											</div>

											<div className="divide-y">
												{
													properties.map((property: IProperty) => <PropertyItem property={property} />)
												}
											</div>
										</TabsContent>
										<TabsContent value="password">
											<div className="flex items-center w-full space-x-2">
												<Input type="email" placeholder="Search for available properties" />
											</div>

											<div className="divide-y">
												<InvestedPropertyItem />
											</div>
										</TabsContent>
										<TabsContent value="completed">Change your password here.</TabsContent>
									</div>
								</Tabs>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="md:w-1/3">

				</div>
			</div>
		</div>
	);
};
