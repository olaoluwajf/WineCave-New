import {useState} from 'react'
export default function AgeGate(){
 const [ok,setOk]=useState(()=>{try{return localStorage.getItem('wc_age')==='1'}catch{return false}})
 if(ok)return null
 const yes=()=>{try{localStorage.setItem('wc_age','1')}catch{};setOk(true)}
 return <div className="gate" role="dialog" aria-modal="true" aria-label="Age verification"><div>
  <p className="label">Wine Cave</p><h2>Are you 18 or <em>older</em>?</h2>
  <button className="btn solid" onClick={yes}>Yes, enter</button>
  <a className="btn" href="https://www.google.com">No</a></div></div>}
