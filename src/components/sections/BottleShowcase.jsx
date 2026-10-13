import {useEffect,useRef,useState,lazy,Suspense} from 'react'
import Stalactites from '@/components/effects/Stalactites'
const Scene=lazy(()=>import('@/components/three/BottleScene'))
const caps=['The glass','The label','The foil','The pour']
export default function BottleShowcase(){
 const host=useRef(),[i,setI]=useState(0)
 useEffect(()=>{const f=()=>{const r=host.current.getBoundingClientRect(),p=Math.min(.999,Math.max(0,-r.top/Math.max(1,r.height-innerHeight)));setI(Math.floor(p*caps.length))}
  addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
 return <section className="bottle" ref={host} id="vault"><Stalactites color="#0d0407"/>
  <div className="stick"><p className="label top">Chapter III, The Vault</p>
   <Suspense fallback={null}><Scene host={host}/></Suspense>
   <h2 className="cap">{caps[i]}<em>.</em></h2><p className="hint label">Scroll to turn the bottle</p></div></section>}
