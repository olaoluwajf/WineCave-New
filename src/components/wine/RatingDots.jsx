export default function RatingDots({v}){return <span className="dots" aria-label={v+' of 5'}>{[1,2,3,4,5].map(k=><i key={k} className={k<=v?'on':''}/>)}</span>}
