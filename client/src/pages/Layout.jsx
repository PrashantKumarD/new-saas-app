import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu , X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn,useUser } from '@clerk/clerk-react'
const Layout = () => {
  const navigate = useNavigate()
  const [sidebar,setSidebar]=useState(false);
  const {user} = useUser()
  return  user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 bg-white/90 backdrop-blur-sm'>
        <div 
          className='cursor-pointer flex items-center' 
          onClick={() => navigate('/')}
        >
          <div className='relative px-4 py-2 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl border border-primary/40 shadow-lg backdrop-blur-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300'>
            <span className='font-display font-bold text-2xl text-gray-900 hover:scale-105 transition-transform duration-300'>
              Creativ<span className='text-gradient'>o</span>
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
          </div>
        </div>
        {
          sidebar ? <X onClick={()=> setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/> : <Menu onClick={()=>setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>

      </div>
    </div>
  ) : <div className='flex items-center justify-center h-screen'>
    <SignIn/>
  </div>
}

export default Layout