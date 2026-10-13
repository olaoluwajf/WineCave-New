import {useEffect,useRef} from 'react'
export default function Cursor(){
 const dot=useRef(),ring=useRef()
 useEffect(()=>{
  if(!matchMedia('(pointer:fine)').matches)return
  let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y,id;const root=document.documentElement.style
  const mv=e=>{x=e.clientX;y=e.clientY;root.setProperty('--mx',x+'px');root.setProperty('--my',y+'px')}
  const ov=e=>ring.current.classList.toggle('big',!!e.target.closest('a,button,input,.card,.tier'))
  const loop=()=>{rx+=(x-rx)*.14;ry+=(y-ry)*.14
   dot.current.style.transform=`translate(${x}px,${y}px)`;ring.current.style.transform=`translate(${rx}px,${ry}px)`;id=requestAnimationFrame(loop)}
  addEventListener('mousemove',mv);addEventListener('mouseover',ov);loop()
  return()=>{removeEventListener('mousemove',mv);removeEventListener('mouseover',ov);cancelAnimationFrame(id)}},[])
 return <div data-html2canvas-ignore><div ref={ring} className="cur-ring"/><div ref={dot} className="cur-dot"/></div>}
