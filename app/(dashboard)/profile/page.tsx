'use server'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, InputError } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchBanks, getBanks } from "@/services/payment";
import { BankSettings } from "./(partials)/BankSettings";

export default async function Profile() {

    const banks = await getBanks()

  return (
    <>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xl font-medium">Profile</CardTitle>
            </CardHeader>
            <CardContent className="divide-y">
                <form className="md:w-2/4 space-y-3 pb-5">
                    <div className="w-1/2">
                        <Label>Profile Image</Label>
                        <Input type="file" name="avatar" />
                        <InputError message="" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Label>First Name</Label>
                            <Input name="firstname" placeholder="First Name" />
                            <InputError message="" />
                        </div>
                        <div>
                            <Label>Last Name</Label>
                            <Input name="lastname" placeholder="Last Name" />
                            <InputError message="" />
                        </div>
                    </div>

                    <div>
                        <Label>Email Address</Label>
                        <Input name="email" placeholder="Email Address" />
                        <InputError message="" />
                    </div>

                    <div>
                        <Button>Update Profile</Button>
                    </div>
                </form>

                <BankSettings banks={banks} />

                <form className="md:w-2/4 space-y-3 pt-5">
                    <div >
                        <h3 className="text-lg font-bold">Update Password</h3>
                    </div>
                    <div>
                        <Label>Current Password</Label>
                        <Input name="firstname" placeholder="First Name" />
                        <InputError message="" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Label>New Password</Label>
                            <Input name="lastname" placeholder="Last Name" />
                            <InputError message="" />
                        </div>
                        <div>
                            <Label>Confirm New Password</Label>
                            <Input name="lastname" placeholder="Last Name" />
                            <InputError message="" />
                        </div>
                    </div>

                    <div>
                        <Button>Update Password</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </>
  );
}
