import {Link,useNavigate} from 'react-router-dom'
import {media} from '@/data/media'
import {wines} from '@/data/wines'
export default function Hero(){
 const p=wines.find(w=>w.id===4),nav=useNavigate()
 return <section className="hero">
  <video autoPlay muted loop playsInline poster={media.poster} aria-hidden="true"><source src={media.video} type="video/mp4"/></video>
  <Link to={'/wine/'+p.id} className="pickcard"><span className="s">This week's picks<br/>by sommeliers</span><b>{p.name.toUpperCase()}</b>
   <svg viewBox="0 0 160 60" aria-hidden="true">{Array.from({length:19},(_,i)=><line key={i} x1={80+(i-9)*2} y1="4" x2={80+(i-9)*8.4} y2="56" stroke="#F3E9DC" strokeWidth=".7"/>)}<path d="M8 40Q80 -6 152 40" fill="none" stroke="#F3E9DC" strokeWidth=".7"/></svg>
   <span className="s">{p.region}<br/>{p.grape.split(',').slice(0,2).join(' · ')}</span><span className="xs">750 ml</span></Link>
  <div className="hero-copy"><h1>Wine.<br/>Timeless.<br/>Discreet.</h1><button className="pill glassy" onClick={()=>nav('/wines')}>Start Your Tasting Journey</button></div></section>}
