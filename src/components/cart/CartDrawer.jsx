import {Link} from 'react-router-dom'
import Drawer from '@/components/ui/Drawer'
import {useCart} from '@/context/CartContext'
import {naira} from '@/utils/format'
export default function CartDrawer(){
 const {open,setOpen,items,setQty,total,count}=useCart()
 return <Drawer open={open} onClose={()=>setOpen(false)} label="Cart">
  <div className="cart"><header><h3>Your Cart</h3><span>({count})</span></header>
  {!items.length?<div className="empty"><p>Your cellar is empty.</p><Link className="pill" to="/wines" onClick={()=>setOpen(false)}>Browse the collection</Link></div>
  :<><ul className="lines">{items.map(i=><li key={i.id}><img src={i.img} alt="" />
   <div><h4>{i.name}</h4><p>{i.region}</p>
    <div className="q"><button onClick={()=>setQty(i.id,i.qty-1)} aria-label="Remove one">-</button><span>{String(i.qty).padStart(2,'0')}</span><button onClick={()=>setQty(i.id,i.qty+1)} aria-label="Add one">+</button></div></div>
   <span className="lp">{naira(i.price*i.qty)}</span></li>)}</ul>
  <footer><div className="sub"><span>Subtotal</span><b>{naira(total)}</b></div><p>Delivery is arranged with you after you order.</p>
   <button className="pill solid wide">Checkout</button></footer></>}</div></Drawer>}
