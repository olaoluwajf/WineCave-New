import {useEffect,useRef} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {storyLines} from '@/data/chapters'
import {media} from '@/data/media'
gsap.registerPlugin(ScrollTrigger)
export default function Story(){
 const r=useRef()
 useEffect(()=>{const c=gsap.context(()=>{
  gsap.to('.story .scrub span',{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:'.scrub',start:'top 75%',end:'bottom 55%',scrub:true}})
  gsap.utils.toArray('.h-img img').forEach((im,k)=>gsap.fromTo(im,{yPercent:k?8:-8},{yPercent:k?-8:8,ease:'none',scrollTrigger:{trigger:im,scrub:true}}))},r);return()=>c.revert()},[])
 return <section className="story" id="house" ref={r}>
  <figure className="h-img a"><img src={media.cellar} alt="Barrels in a cellar" loading="lazy"/></figure>
  <div className="h-text"><p className="label">The House</p><p className="scrub">{storyLines.split(' ').map((w,i)=><span key={i}>{w} </span>)}</p>
   <p className="h-sub">Find us at 250 Ogui Road, Enugu, open daily. Come in for a bottle, or let us bring it to you.</p></div>
  <figure className="h-img b"><img src={media.pour} alt="Red wine being poured" loading="lazy"/></figure></section>}
