import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Sparkles, ArrowRight, Play, Users, Star } from 'lucide-react'

const Hero = () => {
    const navigate = useNavigate()
    
    // Screenshots data with main image first
    const screenshots = [
      { src: "/Screenshot 2025-07-23 220604.png", alt: "Creativo Dashboard" },
      { src: "/Screenshot 2025-07-23 220650.png", alt: "AI Content Generation" },
      { src: "/Screenshot 2025-07-23 220756.png", alt: "Image Editing Tools" },
      { src: "/Screenshot 2025-07-23 220851.png", alt: "Creative Templates" },
      { src: "/Screenshot 2025-07-23 220915.png", alt: "Export Options" }
    ]
    
    const [activeScreenshot, setActiveScreenshot] = useState(0)
    
    // Function to smoothly scroll to the action section
    const scrollToAction = () => {
      const actionSection = document.getElementById('action-section')
      if (actionSection) {
        actionSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background with enhanced gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
        <div className='absolute inset-0 bg-[url(/gradientBackground.png)] bg-cover bg-center opacity-30'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-white/50 to-transparent'></div>
      </div>

      {/* Floating elements */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 floating-animation'></div>
      <div className='absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-15 floating-animation' style={{animationDelay: '2s'}}></div>
      <div className='absolute bottom-40 left-20 w-12 h-12 bg-gradient-accent rounded-full opacity-25 floating-animation' style={{animationDelay: '4s'}}></div>

      <div className='relative z-10 w-full px-6 sm:px-12 xl:px-20 max-w-7xl mx-auto'>
        <div className='text-center space-y-8 fade-in-up'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-primary/20 text-sm font-medium text-primary shadow-lg'>
            <Sparkles className='w-4 h-4' />
            <span>Next-Gen AI Creative Suite</span>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
          </div>

          {/* Main Heading */}
          <div className='space-y-6'>
            <h1 className='font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-gray-900'>
              Unleash Your 
              <span className='block text-gradient'>Creative Potential</span>
              <span className='block text-gray-900'>With Creativo AI</span>
            </h1>
            
            <p className='text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light'>
              From AI-powered content creation to professional image editing, 
              <span className='block mt-2 font-medium text-gray-800'>
                Creativo transforms your ideas into stunning reality in seconds.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
            <button 
              onClick={() => navigate('/ai')} 
              className='group relative inline-flex items-center cursor-pointer gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-primary rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 min-w-[200px]'
            >
              <span className='relative z-10'>Start Creating Free</span>
              <ArrowRight className='w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200'/>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
            
            <button 
              onClick={scrollToAction}
              className='group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-gray-700 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-primary/30 transition-all cursor-pointer duration-300 hover:scale-105 hover:shadow-xl min-w-[200px]'
            >
              <Play className='w-5 h-5 group-hover:scale-110 transition-transform duration-200' />
              <span>See It In Action</span>
            </button>
          </div>

          {/* Premium Screenshots Showcase */}
          <div id='action-section' className='pt-12 pb-8'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>See Creativo in Action</h3>
              <p className='text-gray-600'>Experience the power of AI-driven creativity</p>
            </div>
            
            {/* Screenshot Gallery */}
            <div className='relative max-w-6xl mx-auto'>
              {/* Main featured screenshot */}
              <div className='relative group mb-8'>
                <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='relative bg-white rounded-2xl shadow-2xl p-2 border border-gray-200/50 backdrop-blur-sm'>
                  <img 
                    src={screenshots[activeScreenshot].src}
                    alt={screenshots[activeScreenshot].alt}
                    className='w-full h-auto rounded-xl shadow-lg transition-all duration-500 group-hover:scale-[1.02]'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none'></div>
                </div>
                
                {/* Image title */}
                <div className='absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/50 shadow-lg'>
                  <p className='text-sm font-semibold text-gray-800'>{screenshots[activeScreenshot].alt}</p>
                </div>
              </div>

              {/* Secondary screenshots grid */}
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
                {screenshots.map((screenshot, index) => {
                  const isActive = activeScreenshot === index;
                  
                  return (
                    <div 
                      key={index} 
                      className={`group relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-105 ring-2 ring-primary/50' : 'hover:scale-105'}`}
                      onClick={() => setActiveScreenshot(index)}
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-lg transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                      <div className={`relative bg-white rounded-xl shadow-lg p-1.5 border backdrop-blur-sm overflow-hidden transition-all duration-300 ${isActive ? 'border-primary/50 shadow-xl' : 'border-gray-200/30'}`}>
                        <img 
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className='w-full h-48 object-cover rounded-lg transition-all duration-300 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-lg pointer-events-none'></div>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <div className='absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-semibold'>
                            Active
                          </div>
                        )}
                      </div>
                      
                      {/* Floating badge */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full border-2 border-white shadow-lg transition-all duration-300 flex items-center justify-center ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <Sparkles className='w-3 h-3 text-white' />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating elements around screenshots */}
              <div className='absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full opacity-30 floating-animation'></div>
              <div className='absolute -top-2 -right-8 w-6 h-6 bg-gradient-secondary rounded-full opacity-25 floating-animation' style={{animationDelay: '1s'}}></div>
              <div className='absolute -bottom-6 -left-2 w-4 h-4 bg-gradient-accent rounded-full opacity-35 floating-animation' style={{animationDelay: '2.5s'}}></div>
              <div className='absolute -bottom-4 -right-6 w-10 h-10 bg-gradient-primary rounded-full opacity-20 floating-animation' style={{animationDelay: '3s'}}></div>
            </div>
          </div>

          {/* Social Proof */}
          <div className='pt-8'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600'>
              {/* User stats */}
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <div className='w-12 h-12 rounded-full bg-gradient-primary border-2 border-white shadow-md flex items-center justify-center'>
                    <Users className='w-6 h-6 text-white' />
                  </div>
                  <div className='w-10 h-10 rounded-full bg-gradient-secondary border-2 border-white shadow-md flex items-center justify-center'>
                    <Sparkles className='w-5 h-5 text-white' />
                  </div>
                </div>
                <div className='text-left'>
                  <div className='font-semibold text-gray-900'>25,000+ Creators</div>
                  <div className='text-sm text-gray-500'>Building amazing content daily</div>
                </div>
              </div>

              {/* Divider */}
              <div className='hidden sm:block w-px h-12 bg-gray-300'></div>

              {/* Rating */}
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                  ))}
                </div>
                <div className='text-left'>
                  <div className='font-semibold text-gray-900'>4.9/5 Rating</div>
                  <div className='text-sm text-gray-500'>From 1,200+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg viewBox="0 0 1440 120" className='w-full h-auto'>
          <path 
            fill="rgba(255,255,255,0.8)" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
