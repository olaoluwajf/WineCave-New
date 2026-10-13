import {useState} from 'react'
import {media} from '@/data/media'

export default function AgeGate(){
 const [ok,setOk]=useState(()=>{try{return localStorage.getItem('wc_age')==='1'}catch{return false}})
 if(ok)return null
 const yes=()=>{try{localStorage.setItem('wc_age','1')}catch{};setOk(true)}
 return <div className="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
  <div className="gate-backdrop" style={{backgroundImage:`url(${media.poster})`}} aria-hidden="true"/>
  <div className="gate-panel">
   <p className="gate-brand">Wine Cave</p>
   <p className="label">A private house of wine</p>
   <span className="gate-rule" aria-hidden="true"/>
   <h2 id="gate-title">Are you 18 or <em>older?</em></h2>
   <p className="gate-copy">Please confirm you are of legal drinking age to enter.</p>
   <div className="gate-actions">
    <button className="btn solid" onClick={yes}>Yes, enter</button>
    <a className="btn gate-decline" href="https://www.google.com">No, leave</a>
   </div>
   <p className="gate-note">Please enjoy responsibly</p>
  </div>
 </div>
}
