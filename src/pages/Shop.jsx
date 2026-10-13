import {useState} from 'react'
import {Link,useSearchParams} from 'react-router-dom'
import {wines,types} from '@/data/wines'
import {useCart} from '@/context/CartContext'
import {naira} from '@/utils/format'
export default function Shop(){
 const [q]=useSearchParams(),[t,setT]=useState(types.includes(q.get('type'))?q.get('type'):'All'),{add}=useCart()
 const list=t==='All'?wines:wines.filter(w=>w.type===t)
 return <main className="shop"><span className="ghost" aria-hidden="true">cellar</span>
  <header><p className="kick">The Cellar</p><h1>All Wines</h1></header>
  <nav className="filters" aria-label="Filter wines">{types.map(x=><button key={x} className={t===x?'on':''} onClick={()=>setT(x)}>{x}<sup>{x==='All'?wines.length:wines.filter(w=>w.type===x).length}</sup></button>)}</nav>
  <div className="grid">{list.map((w,k)=><Link key={w.id} to={'/wine/'+w.id} className="wcard" style={{'--d':k*60+'ms'}}>
   <div className="ph"><img src={w.img} alt={w.name} loading="lazy"/>{w.pick&&<span className="tg">Sommelier's Pick</span>}
    <button className="quick" onClick={e=>{e.preventDefault();e.stopPropagation();add(w)}}>Add to Cart</button></div>
   <div className="meta"><h3>{w.name}</h3><span>{naira(w.price)}</span></div><p>{w.region}</p></Link>)}</div></main>}
