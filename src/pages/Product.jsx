import {useState} from 'react'
import {Link,useParams,Navigate} from 'react-router-dom'
import {wines,rating} from '@/data/wines'
import {useCart} from '@/context/CartContext'
import {naira} from '@/utils/format'
import RatingDots from '@/components/wine/RatingDots'
import Icon from '@/components/ui/Icon'
export default function Product(){
 const {id}=useParams(),w=wines.find(x=>x.id===+id),[q,setQ]=useState(1),{add,wish,toggleWish}=useCart()
 if(!w)return <Navigate to="/wines" replace/>
 return <main className="product"><div className="pleft"><Link to="/wines" className="back">&lt; Back to Catalog</Link>
  <div className="pills"><span>{w.type}</span>{w.pick&&<span>Sommelier's Pick</span>}</div>
  <img className="pimg" src={w.img} alt={w.name}/><div className="pdots"><i className="on"/><i/><i/></div></div>
  <div className="pright"><button className="heart" onClick={()=>toggleWish(w.id)} aria-label="Wishlist"><Icon n="heart" filled={wish.includes(w.id)}/></button>
   <h1>{w.name}</h1><p className="sub">{w.region}</p><p className="price">{naira(w.price)}</p>
   <dl><dt>Grape Variety:</dt><dd>{w.grape}</dd><dt>Region:</dt><dd>{w.region}</dd><dt>Bottle Size:</dt><dd>750ml</dd></dl>
   <div className="buy"><div className="qty"><button onClick={()=>setQ(Math.max(1,q-1))} aria-label="Less">-</button><span>{String(q).padStart(2,'0')}</span><button onClick={()=>setQ(q+1)} aria-label="More">+</button></div>
    <button className="pill wide" onClick={()=>add(w,q)}>Add to Cart</button></div>
   <h3>Characteristics</h3><ul className="chars">{rating.map((r,k)=><li key={r}><span>{k+1}. {r}</span><RatingDots v={w.chars[k]}/></li>)}</ul>
   <h3>The Story</h3><p className="story-t">{w.story}</p></div></main>}
