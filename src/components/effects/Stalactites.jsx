import {useMemo} from 'react'
export default function Stalactites({color='#12060A',flip=false}){
 const d=useMemo(()=>{let s=7,r=()=>(s=(s*9301+49297)%233280)/233280,x=0,p='M0 0'
  while(x<1440){const w=30+r()*70,h=25+r()*75;p+=` L${x} 0 L${x+w/2} ${h} L${x+w} 0`;x+=w}
  return p+' L1440 0 Z'},[])
 return <svg className={'stal'+(flip?' flip':'')} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path d={d} fill={color}/></svg>}
