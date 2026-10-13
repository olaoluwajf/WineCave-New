import {useEffect} from 'react'
export default function Drawer({open,onClose,label,children}){
 useEffect(()=>{if(!open)return;const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[open,onClose])
 if(!open)return null
 return <><div className="overlay" onClick={onClose}/><aside className="drawer" role="dialog" aria-modal="true" aria-label={label}>
  <button className="close" onClick={onClose} aria-label="Close">Close <i>×</i></button>{children}</aside></>}
