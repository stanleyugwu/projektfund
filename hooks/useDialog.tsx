'use client'
import React, { useState } from "react"

export interface IDialog {
    isOpen: boolean
    openDialog: () => void
    closeDialog: () => void
    switchModalMode: (state: boolean) => void
    isModal: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const useDialog = () : IDialog =>  {
    
    const [isOpen, setOpen] = useState(false)
    const [isModal, setIsModal] = useState(true)

    const openDialog = () => {
        setOpen(true)
    }

    const switchModalMode = (state: boolean) => {
        setIsModal(state)
    }

    const closeDialog = () => {
        setOpen(false)
    }
    
    return {isOpen, openDialog, closeDialog, switchModalMode, isModal, setOpen}
}