import { getUserDashboard } from "@/server/pages/dashboard";
import { listProperties } from "@/server/property/list";
import { Naira } from "@/components/naira";
import { PropertyItem } from "@/components/partials/property/PropertyItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IProperty } from "@/types/property";
import { LandmarkIcon, Wallet2Icon } from "lucide-react";
import { Metadata } from "next";
import React from "react";
import { useApp } from "@/context/AppContext";
import { Title } from "@/components/title";
import Search from "@/components/ui/search";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const properties = await listProperties(query);

  const { investments, totalValue } = await getUserDashboard();

  return (
    <div>
      <Title title="Overview" />
      <div className="">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Investments
                </CardTitle>
                <LandmarkIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {investments.toLocaleString()}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Portfolio</CardTitle>
                <Wallet2Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <Naira />
                  {totalValue.toLocaleString()}{" "}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-5">
                <Tabs defaultValue="account">
                  {/* <TabsList>
										<TabsTrigger value="account">Explore</TabsTrigger>
										<TabsTrigger value="password">Investments</TabsTrigger>
										<TabsTrigger value="completed">Offers</TabsTrigger>
									</TabsList> */}

                  <div className="w-full mt-3">
                    <TabsContent value="account" className="w-full space-y-3">
                      <div className="flex items-center w-full space-x-2">
                        <Search placeholder="Search for available properties" />
                      </div>

                      <div className="divide-y">
                        {properties.map((property: IProperty) => (
                          <PropertyItem property={property} />
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="password">
                      <div className="flex items-center w-full space-x-2">
                        <Input
                          type="email"
                          placeholder="Search for available properties"
                        />
                      </div>

                      <div className="divide-y">
                        {/* <InvestedPropertyItem /> */}
                      </div>
                    </TabsContent>
                    <TabsContent value="completed">
                      Change your password here.
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* <div className="md:w-1/3">

				</div> */}
      </div>
    </div>
  );
};
