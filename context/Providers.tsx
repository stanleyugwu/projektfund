import React, { PropsWithChildren } from 'react'
import { AuthProvider } from './AuthProvider'
import { fetchUser } from '@/api/user/current'

interface IProvidersProps extends PropsWithChildren {

}

export const Providers = async ({children}: IProvidersProps) => {
    const user = await fetchUser()
    
    return (
        <AuthProvider user={user}>
            {children}
        </AuthProvider>
    )
}
