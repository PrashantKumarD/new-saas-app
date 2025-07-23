import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { ArrowRight, Lock } from 'lucide-react'

const AiTools = () => {
    const navigate = useNavigate()
    const {user} = useUser()
    
    return (
        <section className='py-24 px-6 sm:px-12 xl:px-20 bg-gradient-to-b from-white to-slate-50'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16 fade-in-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
                        <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
                        <span className='text-primary font-medium text-sm'>AI-Powered Creative Tools</span>
                    </div>
                    
                    <h2 className='font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6'>
                        Powerful <span className='text-gradient'>Creative Tools</span>
                    </h2>
                    
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        Everything you need to create, enhance, and optimize your creative content with cutting-edge AI technology. 
                        <span className='block mt-2 font-medium text-gray-800'>
                            Choose from our comprehensive suite of professional creative tools.
                        </span>
                    </p>
                </div>

                {/* Tools Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {AiToolsData.map((tool, index) => (
                        <div 
                            key={index} 
                            className='group card-premium p-8 cursor-pointer relative overflow-hidden'
                            onClick={() => user && navigate(tool.path)}
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {/* Background gradient overlay */}
                            <div 
                                className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500'
                                style={{
                                    background: `linear-gradient(135deg, ${tool.bg.from} 0%, ${tool.bg.to} 100%)`
                                }}
                            ></div>

                            {/* Icon with gradient background */}
                            <div className='relative mb-6'>
                                <div 
                                    className='w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'
                                    style={{
                                        background: `linear-gradient(135deg, ${tool.bg.from} 0%, ${tool.bg.to} 100%)`
                                    }}
                                >
                                    <tool.Icon className='w-8 h-8 text-white' />
                                </div>
                                
                                {/* Lock icon for non-authenticated users */}
                                {!user && (
                                    <div className='absolute -top-2 -right-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center'>
                                        <Lock className='w-3 h-3 text-white' />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className='relative z-10'>
                                <h3 className='font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors'>
                                    {tool.title}
                                </h3>
                                
                                <p className='text-gray-600 mb-6 leading-relaxed'>
                                    {tool.description}
                                </p>

                                {/* CTA */}
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm font-medium text-gray-500'>
                                        {user ? 'Try it now' : 'Sign in required'}
                                    </span>
                                    
                                    <div className='flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform duration-300'>
                                        <ArrowRight className='w-4 h-4' />
                                    </div>
                                </div>
                            </div>

                            {/* Hover border effect */}
                            <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300'></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className='text-center mt-16'>
                    <div className='inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg'>
                        <div className='flex -space-x-2'>
                            <div className='w-8 h-8 bg-gradient-primary rounded-full border-2 border-white'></div>
                            <div className='w-8 h-8 bg-gradient-secondary rounded-full border-2 border-white'></div>
                            <div className='w-8 h-8 bg-gradient-accent rounded-full border-2 border-white'></div>
                        </div>
                        <span className='text-gray-700 font-medium'>
                            Join thousands of creators using our AI creative tools
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AiTools
