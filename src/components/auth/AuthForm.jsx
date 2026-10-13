import {useState} from 'react'
import {useAuth} from '@/context/AuthContext'
export default function AuthForm({mode}){
 const {signIn,signUp}=useAuth(),[f,setF]=useState({name:'',email:'',password:''}),[err,setErr]=useState(''),[busy,setBusy]=useState(false),[show,setShow]=useState(false)
 const up=k=>e=>setF({...f,[k]:e.target.value})
 const submit=async e=>{e.preventDefault();setErr('')
  if(!/\S+@\S+\.\S+/.test(f.email))return setErr('Enter a valid email.')
  if(f.password.length<6)return setErr('Password needs 6+ characters.')
  setBusy(true);try{await(mode==='join'?signUp:signIn)(f)}catch(x){setErr(x.message)}setBusy(false)}
 return <form className="form" onSubmit={submit} noValidate>
  {mode==='join'&&<input placeholder="Full name" value={f.name} onChange={up('name')} required aria-label="Full name"/>}
  <input type="email" placeholder="Email" value={f.email} onChange={up('email')} aria-label="Email"/>
  <input type={show?'text':'password'} placeholder="Password" value={f.password} onChange={up('password')} aria-label="Password"/>
  <button type="button" className="label" onClick={()=>setShow(!show)}>{show?'Hide':'Show'} password</button>
  {err&&<p className="err" role="alert">{err}</p>}
  <button className="btn solid" disabled={busy}>{busy?'One moment...':mode==='join'?'Request membership':'Sign in'}</button></form>}
