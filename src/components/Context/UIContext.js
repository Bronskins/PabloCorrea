import React, {createContext, useState }  from 'react'

export const UIContext = createContext()

export const UIContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false)

    return(

        <UIContextProvider value={{loading, setLoading}}>
            {children}
        </UIContextProvider>
    )
}