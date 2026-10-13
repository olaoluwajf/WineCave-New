import {useState} from 'react'
import Drawer from '@/components/ui/Drawer'
import AuthForm from './AuthForm'
import {useAuth} from '@/context/AuthContext'
export default function AuthModal(){
 const {open,setOpen}=useAuth(),[mode,setMode]=useState('in')
 return <Drawer open={open} onClose={()=>setOpen(false)} label="Membership"><h3>The <em>Circle</em></h3>
  <div className="tabs"><button className={mode==='in'?'on':''} onClick={()=>setMode('in')}>Sign in</button><button className={mode==='join'?'on':''} onClick={()=>setMode('join')}>Join</button></div>
  <AuthForm key={mode} mode={mode}/></Drawer>}
