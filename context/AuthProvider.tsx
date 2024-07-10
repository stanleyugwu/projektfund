'use client'

import { handleLogout } from "@/server/auth/logout"
import { IUser } from "@/types/user"
import React, { PropsWithChildren, useContext, useMemo, useState } from "react"

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
    login: function (user: IUser): void {},
    logout: () => {},
    refresh: (user) => {}
})

export const useAuth = () => useContext(AuthContext)

interface IAuthContextProps extends PropsWithChildren{
    user: IUser | null 
}

export const AuthProvider = ({children, user: authUser}: IAuthContextProps) => {
    const [user, setUser] = useState<IUser | null>(authUser)

    const status = useMemo(() => !!user, [user])

    const [state, action] = useFormState(handleLogout, {
		status: false,
		message: '',
		errors: {}
	})

    const login = (user: IUser) => {
        setUser(user)
    }

    const refresh = (currentUser: any) => {
        setUser(currentUser)
    }

    const logout = () => {
        setUser(null)
        action()
    }

    return (
        <AuthContext.Provider value={{user: authUser, status, login, logout, refresh}}>{children}</AuthContext.Provider>
    )
}
