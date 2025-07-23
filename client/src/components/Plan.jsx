import React from 'react'
import {PricingTable} from '@clerk/clerk-react'
import { Crown, Zap, Star } from 'lucide-react'

const Plan = () => {
  return (
    <section className='py-24 px-6 sm:px-12 xl:px-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 floating-animation'></div>
      <div className='absolute bottom-20 right-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-5 floating-animation' style={{animationDelay: '3s'}}></div>
      
      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16 fade-in-up'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
            <Crown className='w-4 h-4 text-primary' />
            <span className='text-primary font-medium text-sm'>Flexible Pricing</span>
          </div>
          
          <h2 className='font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6'>
            Choose Your <span className='text-gradient'>Plan</span>
          </h2>
          
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Start for free and scale up as you grow. Find the perfect plan for your creative journey.
            <span className='block mt-2 font-medium text-gray-800'>
              No hidden fees, cancel anytime.
            </span>
          </p>
        </div>

        {/* Features highlights */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          <div className='flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm'>
            <div className='w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center'>
              <Zap className='w-5 h-5 text-white' />
            </div>
            <div>
              <div className='font-semibold text-gray-900'>Lightning Fast</div>
              <div className='text-sm text-gray-600'>Generate content in seconds</div>
            </div>
          </div>
          
          <div className='flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm'>
            <div className='w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center'>
              <Star className='w-5 h-5 text-white' />
            </div>
            <div>
              <div className='font-semibold text-gray-900'>Premium Quality</div>
              <div className='text-sm text-gray-600'>Professional-grade results</div>
            </div>
          </div>
          
          <div className='flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm'>
            <div className='w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center'>
              <Crown className='w-5 h-5 text-white' />
            </div>
            <div>
              <div className='font-semibold text-gray-900'>24/7 Support</div>
              <div className='text-sm text-gray-600'>We're here to help you succeed</div>
            </div>
          </div>
        </div>

        {/* Pricing Table Container */}
        <div className='relative'>
          <div className='card-premium p-8 bg-white/90 backdrop-blur-xl'>
            <PricingTable />
          </div>
        </div>

        {/* Trust indicators */}
        <div className='mt-12 text-center'>
          <div className='inline-flex items-center gap-6 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200'>
            <div className='flex items-center gap-2 text-gray-600'>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              <span className='text-sm font-medium'>99.9% Uptime</span>
            </div>
            <div className='w-px h-6 bg-gray-300'></div>
            <div className='flex items-center gap-2 text-gray-600'>
              <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
              <span className='text-sm font-medium'>SSL Secured</span>
            </div>
            <div className='w-px h-6 bg-gray-300'></div>
            <div className='flex items-center gap-2 text-gray-600'>
              <div className='w-3 h-3 bg-purple-500 rounded-full'></div>
              <span className='text-sm font-medium'>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan
