import {Link} from 'react-router-dom'
import {wines,types} from '@/data/wines'
import {media} from '@/data/media'
export default function StyleTiles(){
 return <section className="styles"><header><h2>Shop by style</h2><Link className="pill" to="/wines">View All Wines</Link></header>
  <div className="tiles">{types.slice(1).map((t,k)=><Link key={t} to={'/wines?type='+encodeURIComponent(t)} className="stile">
   <img src={media.styles[t]} alt="" loading="lazy"/><span className="no">0{k+1}</span><h3>{t}</h3><span className="ct">{wines.filter(w=>w.type===t).length} wines</span></Link>)}</div></section>}
