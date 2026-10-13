import {useAuth} from '@/context/AuthContext'
export default function Account(){
 const {user,signOut}=useAuth()
 return <main className="account"><p className="label">Member</p><h1>Welcome, <em>{user.name}</em></h1>
  <p>Tier: {user.tier}</p><p>Order history and saved wines will appear here.</p>
  <button className="btn" onClick={signOut}>Sign out</button></main>}
