import {useEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import {media,px} from '@/data/media'
const T=[[6,10,15,24,px(3934057,600)],[62,6,17,22,px(11943565,600)],[10,58,16,24,px(9170979,600)],[70,56,18,26,px(11596884,600)],[36,66,14,20,px(3934056,600)],[30,16,13,18,px(6662509,600)]]
export default function Preloader(){
 const r=useRef(),[done,setDone]=useState(false)
 useEffect(()=>{const c=gsap.context(()=>{
  const t=gsap.timeline({onComplete:()=>setDone(true)})
  t.from('.tile',{opacity:0,y:50,scale:.9,duration:.9,stagger:.12,ease:'expo.out'})
   .to('.tile',{opacity:0,duration:.6,delay:.5,ease:'power2.in'},'go')
   .to('.tile.core',{opacity:1,left:0,top:0,width:'100vw',height:'100vh',duration:1.2,ease:'expo.inOut'},'go')
   .to(r.current,{opacity:0,duration:.6},'-=.1')},r);return()=>c.revert()},[])
 return done?null:<div className="pre" ref={r} aria-hidden="true" data-html2canvas-ignore>
  {T.map(([l,t,w,h,s],i)=><div key={i} className="tile" style={{left:l+'%',top:t+'%',width:w+'vw',height:h+'vh',backgroundImage:`url(${s})`}}/>)}
  <div className="tile core" style={{left:'42%',top:'30%',width:'18vw',height:'30vh',backgroundImage:`url(${media.poster})`}}/></div>}
