import {createContext,useContext,useEffect,useState} from 'react'
const C=createContext()
export const useCart=()=>useContext(C)
const load=k=>{try{return JSON.parse(localStorage.getItem(k))||[]}catch{return[]}}
export function CartProvider({children}){
 const [items,setItems]=useState(()=>load('wc_cart')),[wish,setWish]=useState(()=>load('wc_wish')),[open,setOpen]=useState(false)
 useEffect(()=>{try{localStorage.setItem('wc_cart',JSON.stringify(items));localStorage.setItem('wc_wish',JSON.stringify(wish))}catch{}},[items,wish])
 const add=(w,q=1)=>{setItems(i=>i.find(x=>x.id===w.id)?i.map(x=>x.id===w.id?{...x,qty:x.qty+q}:x):[...i,{id:w.id,name:w.name,price:w.price,img:w.img,region:w.region,qty:q}]);setOpen(true)}
 const setQty=(id,q)=>setItems(i=>i.map(x=>x.id===id?{...x,qty:q}:x).filter(x=>x.qty>0))
 const toggleWish=id=>setWish(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id])
 const count=items.reduce((a,x)=>a+x.qty,0),total=items.reduce((a,x)=>a+x.qty*x.price,0)
 return <C.Provider value={{items,add,setQty,count,total,open,setOpen,wish,toggleWish}}>{children}</C.Provider>}
