import {Link} from 'react-router-dom'
import {media} from '@/data/media'
export default function Footer(){
 return <footer className="foot" id="visit"><div className="f-bg" style={{backgroundImage:`url(${media.cellar})`}}/>
  <div className="f-hero"><h2>Come in.<br/>Or let us <em>come to you.</em></h2>
   <div className="f-cta"><Link className="pill glassy" to="/wines">Shop wines</Link><a className="pill" href="/#circle">Join the Circle</a></div></div>
  <div className="f-grid"><div><span>Visit</span><p>250 Ogui Road<br/>Enugu<br/>Open daily</p></div>
   <div><span>Explore</span><Link to="/wines">All wines</Link><a href="/#house">The House</a><a href="/#circle">The Circle</a></div>
   <div><span>Follow</span><a href="https://instagram.com/officialwinecave">@officialwinecave</a></div>
   <div><span>House rules</span><p>18+ only.<br/>Please enjoy responsibly.</p></div></div>
  <div className="f-word" aria-hidden="true">Wine Cave</div>
  <div className="f-bar"><span>© 2026 Wine Cave</span><a href="#top" onClick={e=>{e.preventDefault();scrollTo({top:0,behavior:'smooth'})}}>Back to top ↑</a></div></footer>}
