import {useEffect,useRef} from 'react'
const A=[58,10,22],B=[8,3,5]
export default function DepthGauge(){
 const t=useRef(),bar=useRef()
 useEffect(()=>{const f=()=>{
  const p=Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))
  document.documentElement.style.setProperty('--depth',p)
  document.body.style.background=`rgb(${A.map((a,i)=>Math.round(a+(B[i]-a)*p))})`
  t.current.textContent=Math.round(p*60)+' m';bar.current.style.transform=`scaleY(${p})`}
  f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
 return <div className="depth" aria-hidden="true" data-html2canvas-ignore><span className="label">Depth</span><i><b ref={bar}/></i><span ref={t} className="label"/></div>}
