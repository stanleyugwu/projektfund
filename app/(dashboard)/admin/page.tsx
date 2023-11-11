import { getDataSummary } from "@/api/pages/dashboard";
import { Naira } from "@/components/naira";
import { WelcomeHeading } from "@/components/partials/user/WelcomeHeading";
import { Title } from "@/components/title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2Icon, Users2Icon, Wallet2Icon } from "lucide-react";
import React from "react";

export default async () => {

  const {users, properties, payments, withdrawals} = await getDataSummary()

  return (
    <div>
      <WelcomeHeading />
      
      <Title title="Overview" />

      <div className="flex">
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 gap-5 mb-5">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Users
                </CardTitle>
                <Users2Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{users}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Properties
                </CardTitle>
                <Building2Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{properties}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Payments</CardTitle>
                <Wallet2Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold"><Naira />{payments}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Withdrawals</CardTitle>
                <Wallet2Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold"><Naira />{withdrawals}</div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-5">
                
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="md:w-1/3"></div>
      </div>
    </div>
  );
};
