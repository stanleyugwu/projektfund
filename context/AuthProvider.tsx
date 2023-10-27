'use client'

import { handleLogout } from "@/api/auth/logout"
import { fetchUser } from "@/api/user/current"
import { IUser } from "@/types/user"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React, { PropsWithChildren, useContext, useState } from "react"
// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'

interface IAuthContext {
    status: boolean,
    user: IUser | null
    login: (user: IUser) => void
    logout: () => void
    refresh: (user: IUser) => void
}

const AuthContext = React.createContext<IAuthContext>({
    status: false,
    user: null,
    login: function (user: IUser): void {
        throw new Error("Function not implemented.")
    },
    logout: () => {},
    refresh: (user: IUser) => {}
})

export const useAuth = () => useContext(AuthContext)

interface IAuthContextProps extends PropsWithChildren{
    user: IUser | null 
}


export const AuthProvider = ({children, user: authUser}: IAuthContextProps) => {
    const [status, setStatus] = useState(false)
    const [user, setUser] = useState<IUser | null>(authUser)

    const [logoutState, logoutAction] = useFormState(handleLogout, {
        status: false
    })

    const [userState, userAction] = useFormState(fetchUser, {
        isLoaded: false,
        status: false
    })

    const login = (user: IUser) => {
        setUser(user)
        setStatus(true)
    }

    const refresh = (user: IUser) => {
        setUser(user)
    }

    const logout = async () => {
        const data = new FormData()
        if(!user) return;

        data.set('id', user._id)
        await logoutAction(data)

        return redirect('/login')
    }

    return (
        <AuthContext.Provider value={{user, status, login, logout, refresh}}>{children}</AuthContext.Provider>
    )
}
