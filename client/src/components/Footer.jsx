import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    
    <footer className="w-full bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-2 py-10 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-10"
                        src={assets.logo} />
                </div>
                <p className="text-gray-500 text-center max-w-xl text-sm font-normal leading-relaxed">
                    From words that captivate to visuals that speak volumes — we’re here to simplify your digital journey. Whether you're writing standout articles, generating the perfect title, polishing your resume, or removing distractions from your images, our intelligent tools are built to bring your vision to life. Designed for creators, professionals, and dreamers alike — everything you need, in one seamless platform.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="text-gray-500 max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">Quick.Ai</a> ©2025. All rights reserved.
                </div>
            </div>
            
        </footer>
  )
}

export default Footer
