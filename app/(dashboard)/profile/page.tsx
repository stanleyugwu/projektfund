'use server'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, InputError } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchBanks, getBanks } from "@/services/payment";
import { BankSettings } from "./(partials)/BankSettings";
import { ProfileSettings } from "./(partials)/ProfileSettings";
import { PasswordSettings } from "./(partials)/PasswordSettings";

export default async function Profile() {

    const banks = await getBanks()

  return (
    <>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xl font-medium">Profile</CardTitle>
            </CardHeader>
            <CardContent className="divide-y">
                <ProfileSettings />
                <BankSettings banks={banks} />
                <PasswordSettings />
            </CardContent>
        </Card>
    </>
  );
}
