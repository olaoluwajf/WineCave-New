import {useEffect} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Lenis from 'lenis'
import {AuthProvider} from '@/context/AuthContext'
import {CartProvider} from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Preloader from '@/components/effects/Preloader'
import GlassFab from '@/components/ui/GlassFab'
import AgeGate from '@/components/gate/AgeGate'
import CartDrawer from '@/components/cart/CartDrawer'
import AuthModal from '@/components/auth/AuthModal'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Home from '@/pages/Home'
import Account from '@/pages/Account'
import Product from '@/pages/Product'
import Shop from '@/pages/Shop'
export default function App(){
 const {pathname}=useLocation()
 useEffect(()=>{scrollTo(0,0)},[pathname])
 useEffect(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return
  const l=new Lenis();let id;const raf=t=>{l.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf)
  return()=>{cancelAnimationFrame(id);l.destroy()}},[])
 return <AuthProvider><CartProvider><Preloader/><GlassFab/><AgeGate/><Navbar/>
  <Routes><Route path="/" element={<Home/>}/><Route path="/wines" element={<Shop/>}/><Route path="/wine/:id" element={<Product/>}/><Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/></Routes>
  <Footer/><CartDrawer/><AuthModal/></CartProvider></AuthProvider>}
