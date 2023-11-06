'use client'

import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

export interface IApp {
    title: string
    setApp?: React.Dispatch<React.SetStateAction<IApp>>
}

const AppContext = createContext<IApp>({
    title: '',
    setApp: () => {}
})

export const useApp = (state?: Omit<IApp, 'setApp'>) => {
    const app = useContext(AppContext) 


    useEffect(() => {
        if(state && app.setApp) app.setApp((prev) => {
            return {...prev, ...state}
        })
    }, [])

    return app
}

interface IAppContextProvider extends PropsWithChildren {

}

export const AppProvider = ({children}: IAppContextProvider) => {
    const [state, setState] = useState<Omit<IApp, 'setApp'>>({
        title: ''
    })

    return (
        <AppContext.Provider value={{...state, setApp: setState}}>{children}</AppContext.Provider>
    )
}
