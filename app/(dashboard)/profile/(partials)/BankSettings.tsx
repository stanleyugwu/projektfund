'use client'

import { updateBank } from "@/server/user/profile";
import { Button } from "@/components/ui/button";
import { Input, InputError } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthProvider";
import React, { useEffect } from "react";

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'

export const BankSettings = ({ banks }: { banks: any[] }) => {
  const { user, refresh } = useAuth()

  const { toast } = useToast()

  const [state, action] = useFormState(updateBank, {
    status: false,
    message: '',
    errors: {}
  })

  useEffect(() => {
    if (state.status) {
      if (state.message) {
        toast({
          title: "Success",
          description: state.message
        })
      }

      if (state.user) {
        refresh(state.user)
      }
    }
  }, [state])

  return (
    <form action={action} className="py-5 space-y-3 md:w-2/4">
      <div>
        <h3 className="text-lg font-semibold">Bank Account Information</h3>
      </div>
      <div className="md:w-2/3 space-y-4">
        <div>
          <Label>Bank</Label>
          <select name="bank_code" defaultValue={user?.bank?.bank_code || ''} className="flex items-center justify-between w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <option value={''}>Select Bank</option>
            {banks.map((bank) => (
              <option value={`${bank.code}`} key={bank.code}>{bank.name}</option>
            ))}
          </select>
          <InputError message={state.errors?.bank_code} />
        </div>

        {/* <Input name="bank_name" hidden /> */}

        <div>
          <Label>Account Number</Label>
          <Input name="account_number" placeholder="Account No" defaultValue={user?.bank?.account_number} />
          <InputError message={state.errors?.account_number} />
        </div>

        <div>
          <Label>Account Name</Label>
          <Input name="account_name" placeholder="Account Name" defaultValue={user?.bank?.account_name} />
          <InputError message={state.errors?.account_name} />
        </div>
      </div>

      <div>
        <Button>Update Profile</Button>
      </div>
    </form>
  );
};
