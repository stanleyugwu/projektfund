'use client'

import { completeWalletFunding, initiateWalletFunding } from "@/api/wallet/fundwallet";
import { Button } from "@/components/ui/button";
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input, InputError, InputPrice } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormLoader } from "@/components/ui/loader";
import { useAuth } from "@/context/AuthProvider";
import { IDialog, useDialog } from "@/hooks/useDialog";
import usePaystack from "@/hooks/usePaystack";
import { Plus } from "lucide-react";
import { useEffect } from "react";

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'


export function DepositDialog(){
    const {isModal, isOpen, setOpen, switchModalMode, openDialog} = useDialog()
    const { refresh } = useAuth()

    const [state, action] = useFormState(initiateWalletFunding, {
		status: false,
		message: '',
		errors: {},
		error: ''
	})

    const {paystackInit, paystackStatus} = usePaystack({
        whenSuccessful: async (transaction) => {
            switchModalMode(true)
            const req = await completeWalletFunding(transaction._id)
            if(req.status) refresh(req.user)
        },
        whenCancelled: () => {
            switchModalMode(true)
        }
    })

    useEffect(() => {
        if(state.status){
            if(state.payment) {
                switchModalMode(false)
                paystackInit(state.payment)
            }
        }
    }, [state]);

    return (
        <>
            <Button onClick={openDialog}><Plus className="w-5 h-5 me-2" /> Fund Wallet</Button>

            <Dialog modal={isModal} open={isOpen} onOpenChange={(open: any) => setOpen(open)}>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Fund your wallet</DialogTitle>
                        <DialogDescription>Select the number of units you wish to purchase</DialogDescription>
                    </DialogHeader>

                    <form action={action} className="space-y-4">
                        <div>
                            <Label>Amount</Label>
                            <InputPrice name="amount"  />
                            <InputError message="" />
                        </div>

                        <div>
                            <Button type="submit" className="w-full" > <FormLoader /> Fund Wallet</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}