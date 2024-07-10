'use client'

import { initiateWithdrawal } from "@/server/wallet/withdrawal";
import { Naira } from "@/components/naira";
import { Button } from "@/components/ui/button";
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { InputError, InputPrice } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormLoader } from "@/components/ui/loader";
import { useAuth } from "@/context/AuthProvider";
import { IDialog, useDialog } from "@/hooks/useDialog";
import { Minus, Plus } from "lucide-react";

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'


export function WithdrawDialog(){
    const {isModal, isOpen, setOpen, openDialog} = useDialog()

    const {user} = useAuth()

    const [state, action] = useFormState(initiateWithdrawal, {
		status: false,
		message: '',
		errors: {},
		error: ''
	})

    return (
        <>
            <Button onClick={openDialog}><Minus className="w-5 h-5 me-2" /> Withdraw Funds</Button>
            
            <Dialog modal={isModal} open={isOpen} onOpenChange={(open: any) => setOpen(open)}>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Withdraw Funds</DialogTitle>
                        <DialogDescription>Select the number of units you wish to purchase</DialogDescription>
                    </DialogHeader>

                    <form action={action} className="space-y-4">
                        <div className="bg-slate-100 rounded p-2 px-4">
                            <p className="text-sm text-muted-foreground ">Wallet Balance</p>
                            <p className="text-2xl font-bold"><Naira />{user?.wallet.main_bal.toLocaleString()}</p>
                        </div>

                        <div>
                            <Label>Amount</Label>
                            <InputPrice name="amount"  />
                            <InputError message="" />
                        </div>

                        <div>
                            <Button type="submit" className="w-full" > <FormLoader /> Withdraw Funds</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}