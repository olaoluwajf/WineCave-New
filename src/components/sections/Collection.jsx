import {Link} from 'react-router-dom'
import WineCarousel from '@/components/wine/WineCarousel'
export default function Collection(){
 return <section className="coll" id="collection"><header><h2>Our Wine Collection</h2><Link className="pill" to="/wines">View All Wines</Link></header><WineCarousel/></section>}
