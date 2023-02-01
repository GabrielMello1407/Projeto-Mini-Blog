import { useContext, createContext } from "react";

const authContext = createContext()

export function authProvider({children, value}){
    return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export function useAuthValue(){
    return useContext(authContext)
}