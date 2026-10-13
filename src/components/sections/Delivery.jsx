import {Link} from 'react-router-dom'
import {media} from '@/data/media'
const steps=[['01','Choose','Pick your bottles from the collection.'],['02','Tell us','Share where you are and when you want it.'],['03','Receive','We bring it chilled, to your door.']]
export default function Delivery(){
 return <section className="delivery"><div className="d-bg" style={{backgroundImage:`url(${media.ice})`}}/>
  <div className="d-top"><div><p className="kick">Delivery</p><h2>Chilled, and<br/>at your <em>door.</em></h2></div>
   <svg className="badge" viewBox="0 0 160 160" aria-hidden="true"><defs><path id="bc" d="M80 80m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0"/></defs>
    <text fontSize="11" letterSpacing="4" fill="#F3E9DC"><textPath href="#bc">DELIVERY · ENUGU · WINE CAVE · AT ANY HOUR ·</textPath></text>
    <circle cx="80" cy="80" r="26" fill="none" stroke="#F3E9DC" strokeWidth=".8"/><path d="M71 92l9-9 9 9M80 83V66" fill="none" stroke="#F3E9DC" strokeWidth="1.2" transform="rotate(90 80 80)"/></svg></div>
  <div className="d-bot"><ol>{steps.map(([n,h,p])=><li key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p></li>)}</ol>
   <Link className="pill glassy" to="/wines">Order now</Link></div></section>}
