import {useRef,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {wines} from '@/data/wines'
import {useCart} from '@/context/CartContext'
import {naira} from '@/utils/format'
export default function WineCarousel(){
 const [i,setI]=useState(0),[pos,setPos]=useState(null),nav=useNavigate(),{add}=useCart(),d=useRef({x:0,moved:false}),n=wines.length
 const go=k=>setI(v=>Math.min(n-1,Math.max(0,v+k)))
 const down=e=>{d.current={x:e.clientX,moved:false}}
 const up=e=>{const dx=e.clientX-d.current.x;if(Math.abs(dx)>50){go(dx<0?1:-1);d.current.moved=true}}
 const move=e=>{if(e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();setPos([e.clientX-r.left,e.clientY-r.top])}
 const w=wines[i]
 return <div className="stage" onPointerDown={down} onPointerUp={up} onPointerMove={move} onPointerLeave={()=>setPos(null)} onKeyDown={e=>e.key==='ArrowRight'?go(1):e.key==='ArrowLeft'&&go(-1)} tabIndex={0} aria-roledescription="carousel" aria-label="Wine collection">
  <span className="ghost" aria-hidden="true">exclusive</span>
  {wines.map((x,k)=>{const o=k-i;if(Math.abs(o)>1)return null
   return <button key={x.id} className={'slot'+(o===0?' on':'')} style={{'--o':o}} aria-label={x.name}
    onClick={()=>{if(d.current.moved)return;o===0?nav('/wine/'+x.id):setI(k)}}><img src={x.img} alt={x.name} draggable="false" loading="lazy"/></button>})}
  <div className="info" key={w.id}><h3>{w.name}</h3><p>{w.story}</p><span className="price">{naira(w.price)}</span>
   <button className="pill dark" onClick={()=>add(w)}>Add to Cart</button></div>
  {pos&&<span className="dragbub" style={{transform:`translate(${pos[0]-34}px,${pos[1]-34}px)`}}>Drag</span>}
  <div className="count"><span>{String(i+1).padStart(2,'0')}</span><i><b style={{width:((i+1)/n*100)+'%'}}/></i><span>{String(n).padStart(2,'0')}</span></div></div>}
