'use client'

import { Button } from "@/components/ui/button";
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { IDialog, useDialog } from "@/hooks/useDialog";
import { Minus, Plus } from "lucide-react";


export function WithdrawDialog(){
    const {isModal, isOpen, setOpen, openDialog} = useDialog()

    return (
        <>
            <Button onClick={openDialog}><Minus className="w-5 h-5 me-2" /> Withdraw Funds</Button>
            
            <Dialog modal={isModal} open={isOpen} onOpenChange={(open: any) => setOpen(open)}>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>List Units for sale</DialogTitle>
                        <DialogDescription>Select the number of units you wish to purchase</DialogDescription>
                    </DialogHeader>

                </DialogContent>
            </Dialog>
        </>
    )
}