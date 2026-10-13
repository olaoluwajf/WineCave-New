import {Link} from 'react-router-dom'
import {tiers} from '@/data/tiers'
import {useAuth} from '@/context/AuthContext'
import AuthForm from '@/components/auth/AuthForm'
export default function Membership(){
 const {user}=useAuth()
 return <section className="circle" id="circle"><span className="ghost g2" aria-hidden="true">members</span>
  <div className="c-head"><p className="kick">The Circle</p><h2>Join the<br/>Circle.</h2></div>
  <div className="c-main">
   <ol className="levels">{tiers.map((t,k)=><li key={t.name}><span className="no">0{k+1}</span><h3>{t.name}</h3><p>{t.perks.join('. ')}.</p></li>)}</ol>
   <div className="c-form">{user?<><h3>Welcome, {user.name}.</h3><p>You hold a {user.tier} membership.</p><Link className="pill" to="/account">Your account</Link></>
    :<><p className="kick">Request a place</p><AuthForm mode="join"/></>}</div></div></section>}
