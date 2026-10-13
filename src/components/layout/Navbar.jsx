import {useNavigate,Link} from 'react-router-dom'
import {useCart} from '@/context/CartContext'
import {useAuth} from '@/context/AuthContext'
import Icon from '@/components/ui/Icon'
export default function Navbar(){
 const {count,setOpen,wish}=useCart(),{user,setOpen:openAuth}=useAuth(),nav=useNavigate()
 return <header className="nav" aria-label="Main">
  <ul><li><a href="/#collection">Wines</a></li><li><a href="/#house">The House</a></li><li><a href="/#circle">Circle</a></li><li><a href="/#visit">Visit</a></li></ul>
  <Link to="/" className="logo">Wine Cave</Link>
  <div className="icons">
   <button onClick={()=>nav('/wines')} aria-label="Search wines"><Icon n="search"/></button>
   <button aria-label="Wishlist"><Icon n="heart"/>{wish.length>0&&<sup>({wish.length})</sup>}</button>
   <button onClick={()=>user?nav('/account'):openAuth(true)} aria-label={user?'Account':'Sign in'}><Icon n="user"/></button>
   <button onClick={()=>setOpen(true)} aria-label="Cart"><Icon n="bag"/>{count>0&&<sup>({count})</sup>}</button></div></header>}
