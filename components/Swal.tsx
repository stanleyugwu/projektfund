import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"

interface ISwalProps {
    open: boolean
    setOpen: any
    description?: string,
    title?: string
    action: any
}

export const Swal = ({open, setOpen, description, title, action} : ISwalProps) => {

    return (
        <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>{title ?? 'Are you absolutely sure?'}</AlertDialogTitle>
                <AlertDialogDescription>
                    {description ?? 'This action cannot be undone.'}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={action}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
