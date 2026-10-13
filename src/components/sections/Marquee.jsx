const t='A private house of wine'
export default function Marquee(){
 const row=[t,'Open daily','250 Ogui Road, Enugu','Timeless','Discreet','Wine Cave']
 return <div className="marquee" aria-hidden="true"><div className="mq-track">{[0,1].map(k=><div key={k}>{row.map((x,i)=><span key={i}>{x}<i/></span>)}</div>)}</div></div>}
