'use client'

import { completeWalletFunding, initiateWalletFunding } from "@/server/wallet/fundwallet";
import { Button } from "@/components/ui/button";
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input, InputError, InputPrice } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormLoader } from "@/components/ui/loader";
import { useAuth } from "@/context/AuthProvider";
import { IDialog, useDialog } from "@/hooks/useDialog";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import useFlutterWave from "@/hooks/useFlutterWave";
import { useToast } from "@/components/ui/use-toast";
import Loading from "@/app/loading";

export function DepositDialog() {
    const { isModal, isOpen, setOpen, switchModalMode, openDialog } = useDialog()
    const { refresh, user } = useAuth()
    const { toast } = useToast()

    const [loading, setLoading] = useState(false);

    const [state, action] = useFormState(initiateWalletFunding, {
        status: false,
        message: '',
        errors: {},
        error: ''
    })

    const { flutterwaveInit } = useFlutterWave({
        onSuccessful: async (transaction) => {
            switchModalMode(true)
            const req = await completeWalletFunding(transaction._id)
            if (req.status) {
                refresh(req.user);
                switchModalMode(false);
                console.log(req.user)
                window.location.reload(); // force reload to update wallet data
            } else {
                toast({
                    variant: 'destructive',
                    title: "Wallet funding failed. Transaction was not verified",
                    description: state.error
                })
            }
        },
        onCancelled: () => {
            setLoading(false)
        },
        onInit() {
            setLoading(true);
        },
    })

    useEffect(() => {
        if (state.status) {
            if (state.payment) {
                console.log("INITIATING PAYMENT")
                switchModalMode(false)
                flutterwaveInit(state.payment)
            }
        }
    }, [state]);

    if (loading) return <Loading />

    return (
        <>
            <Button className="w-full" onClick={openDialog}><Plus className="w-5 h-5 me-2" /> Deposit</Button>

            <Dialog modal={isModal} open={isOpen} onOpenChange={(open: any) => setOpen(open)}>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Fund your wallet</DialogTitle>
                        <DialogDescription>Enter the amount you want to deposit</DialogDescription>
                    </DialogHeader>

                    <form action={action} className="space-y-4">
                        <div>
                            <Label>Amount</Label>
                            <InputPrice name="amount" />
                            <InputError message={state.errors?.amount} />
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