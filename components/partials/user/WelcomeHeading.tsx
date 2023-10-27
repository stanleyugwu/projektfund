'use client'

import { useAuth } from '@/context/AuthProvider'
import React from 'react'

export const WelcomeHeading = () => {
    const auth = useAuth()

    return (
        <h3 className='text-2xl mb-3 font-semibold'>🚀 Welcome back, {auth.user?.firstname}</h3>
    )
}
