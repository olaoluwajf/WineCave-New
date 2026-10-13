import {createContext,useContext,useState} from 'react'
import {authService} from '@/services/authService'
const C=createContext()
export const useAuth=()=>useContext(C)
export function AuthProvider({children}){
 const [user,setUser]=useState(authService.current())
 const [open,setOpen]=useState(false)
 const signIn=async d=>{setUser(await authService.signIn(d));setOpen(false)}
 const signUp=async d=>{setUser(await authService.signUp(d));setOpen(false)}
 const signOut=()=>{authService.signOut();setUser(null)}
 return <C.Provider value={{user,open,setOpen,signIn,signUp,signOut}}>{children}</C.Provider>}
