import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext,useContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../Firebase/Firebase";

type AuthContextType = {
  user: any;
  logout: () => Promise<void>;
} | null;

const AuthContext = createContext<AuthContextType>(null);

export const userAuth =()=> useContext(AuthContext)

type AuthProviderProps = {
    children : ReactNode
}

export const AuthProvider = ({children}:AuthProviderProps) =>{
    const [user,setUser] = useState<any>(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe();
    },[])

    

    const logout =async ()=>{
        try {
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }

    return (
        <AuthContext.Provider value={{user , logout}}>
            {children}
        </AuthContext.Provider>
    )

}
