'use server'

import React, { PropsWithChildren } from 'react'
import { AuthProvider } from './AuthProvider'
import { fetchUser } from '@/api/user/current'
import { redirect } from 'next/navigation'
import { AppProvider } from './AppContext'

interface IProvidersProps extends PropsWithChildren {

}

export const Providers = async ({children}: IProvidersProps) => {
    const user = await fetchUser()
    
    return (
        <AppProvider>
            <AuthProvider user={user}>
                {children}
            </AuthProvider>
        </AppProvider>
    )
}
