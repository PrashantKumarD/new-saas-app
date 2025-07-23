import React from 'react'
import { assets } from '../assets/assets'
import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react'


const Footer = () => {
  return (
    
    <footer className="relative bg-gradient-to-b from-slate-50 to-slate-100 text-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-2 py-10 flex flex-col items-center">
                <div className="flex items-center justify-center mb-6">
                    <span className='font-display font-bold text-4xl text-gray-900'>
                        Creativ<span className='text-gradient'>o</span>
                    </span>
                </div>
                <p className="text-gray-500 text-center max-w-xl text-sm font-normal leading-relaxed">
                    From words that captivate to visuals that speak volumes — we’re here to simplify your digital journey. Whether you're writing standout articles, generating the perfect title, polishing your resume, or removing distractions from your images, our intelligent tools are built to bring your vision to life. Designed for creators, professionals, and dreamers alike — everything you need, in one seamless platform.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="text-gray-500 max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">Creativo</a> ©2025. All rights reserved.
                </div>
            </div>
            
        </footer>
  )
}

export default Footer
