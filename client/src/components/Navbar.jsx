import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
import toast from 'react-hot-toast'

const Navbar = () => {
  const navigate = useNavigate()

  const {user} = useUser()
  const {openSignIn} = useClerk()


  return (
    <nav className='fixed top-0 z-50 w-full'>
      <div className='bg-transparent'>
        <div className='flex justify-between items-center px-6 py-4 sm:px-12 xl:px-20 max-w-7xl mx-auto'>
          <div 
            className='flex items-center gap-3 cursor-pointer group' 
            onClick={() => navigate('/')}
          >
            <div className='relative px-4 py-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl border border-primary/30 shadow-lg backdrop-blur-sm group-hover:shadow-xl group-hover:border-primary/40 transition-all duration-300'>
              <span className='font-display font-bold text-3xl text-gray-900 group-hover:scale-105 transition-transform duration-300'>
                Creativ<span className='text-gradient'>o</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            {user ? (
              <div className='flex items-center gap-8'>
                <button 
                  onClick={() => navigate('/ai')}
                  className='hidden sm:flex items-center gap-2 px-5 py-3 text-base font-bold text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer'
                >
                  <Sparkles className='w-5 h-5' />
                  Dashboard
                </button>
                <div className='scale-110'>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-200"
                      }
                    }}
                  />
                </div>
              </div>
            ) : (
              <button 
                onClick={() => {
                  openSignIn()
                  // Toast will be shown after successful login via useEffect in App component
                }} 
                className='group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-primary rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25'
              >
                <span className='relative z-10'>Get Started</span>
                <ArrowRight className='w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200'/>
                <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
