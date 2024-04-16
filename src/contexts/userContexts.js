import { createContext, useState } from "react";

export const userContexts = createContext();

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false)
    return (
        <userContexts.Provider value={{login, setLogin}}>
            {children}
        </userContexts.Provider>
    )
}