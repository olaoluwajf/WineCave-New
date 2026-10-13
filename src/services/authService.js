// Mock auth on localStorage. Replace this one file with Supabase Auth later.
const wait=()=>new Promise(r=>setTimeout(r,500))
const get=k=>{try{return JSON.parse(localStorage.getItem(k))}catch{return null}}
export const authService={
 current:()=>get('wc_session'),
 async signUp({name,email,password}){await wait();const u=get('wc_users')||[]
  if(u.some(x=>x.email===email))throw new Error('This email is already a member.')
  const user={name,email,password,tier:'Reserve'};localStorage.setItem('wc_users',JSON.stringify([...u,user]))
  const s={name,email,tier:user.tier};localStorage.setItem('wc_session',JSON.stringify(s));return s},
 async signIn({email,password}){await wait();const user=(get('wc_users')||[]).find(x=>x.email===email&&x.password===password)
  if(!user)throw new Error('Email or password is incorrect.')
  const s={name:user.name,email,tier:user.tier};localStorage.setItem('wc_session',JSON.stringify(s));return s},
 signOut(){localStorage.removeItem('wc_session')}}
