import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Gem, Sparkles } from 'lucide-react'
import { Protect, useAuth } from '@clerk/clerk-react'
import CreationItems from '../components/CreationItems'
import axios from 'axios';
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const Dashboard = () => {
  const [creations,setCreations]=useState([])
  const [loading,setLoading]=useState(true)
  const {getToken}=useAuth()
  const getDashboardData = async ()=>{
    try{
      const {data} = await axios.get('/api/user/get-user-creations',{
        headers : {Authorization:  `Bearer ${await getToken()}`}
      })
      if(data.success){
        setCreations(data.creations)
      }
      else{
        toast.error(data.message)
      }
      

    }catch(error){
      toast.error(error.message)
    }
    setLoading(false)
  }
  useEffect(()=>{
    getDashboardData()
  },[])
  return (
    <div className='h-full overflow-y-scroll p-8 bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='font-display font-bold text-3xl text-gray-900 mb-2'>
          Welcome to your <span className='text-gradient'>Creative Studio</span>
        </h1>
        <p className='text-gray-600 text-lg'>
          Track your AI-powered creations and manage your creative workflow
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        <div className='card-premium p-6 hover-lift'>
            <div className='flex justify-between items-start'>
              <div className='text-slate-700'>
                <p className='text-sm font-medium text-gray-500 mb-1'>Total Creations</p>
                <h2 className='text-3xl font-bold text-gray-900'>{creations.length}</h2>
                <p className='text-xs text-green-600 mt-1 font-medium'>↗ +12% this month</p>
              </div>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center shadow-lg'>
                <Sparkles className='w-6 h-6 text-white'/>
              </div>
            </div>
        </div>

        <div className='card-premium p-6 hover-lift'>
            <div className='flex justify-between items-start'>
              <div className='text-slate-700'>
                <p className='text-sm font-medium text-gray-500 mb-1'>Active Plan</p>
                <h2 className='text-2xl font-bold text-gray-900'>
                  <Protect plan='premium' fallback='Free'>Premium</Protect>
                </h2>
                <p className='text-xs text-blue-600 mt-1 font-medium'>
                  <Protect plan='premium' fallback='Upgrade available'>All features unlocked</Protect>
                </p>
              </div>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center shadow-lg'>
                <Gem className='w-6 h-6 text-white'/>
              </div>
            </div>
        </div>

        <div className='card-premium p-6 hover-lift'>
            <div className='flex justify-between items-start'>
              <div className='text-slate-700'>
                <p className='text-sm font-medium text-gray-500 mb-1'>This Week</p>
                <h2 className='text-3xl font-bold text-gray-900'>{Math.min(creations.length, 15)}</h2>
                <p className='text-xs text-purple-600 mt-1 font-medium'>Creations made</p>
              </div>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex justify-center items-center shadow-lg'>
                <div className='w-6 h-6 rounded-full bg-white/20 flex items-center justify-center'>
                  <div className='w-3 h-3 rounded-full bg-white'></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* Recent Creations */}
      {
        loading ? (
          <div className='flex justify-center items-center h-64'>
            <div className='relative'>
              <div className='animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-primary animate-pulse' />
              </div>
            </div>
          </div>
        ) : (
          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <h3 className='font-heading font-semibold text-2xl text-gray-900'>
                Recent Creations
              </h3>
              <div className='text-sm text-gray-500'>
                {creations.length} total items
              </div>
            </div>
            
            <div className='space-y-4'>
              {creations.length > 0 ? (
                creations.map((item) => <CreationItems key={item.id} item={item}/>)
              ) : (
                <div className='card-premium p-12 text-center'>
                  <div className='w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Sparkles className='w-8 h-8 text-white' />
                  </div>
                  <h4 className='font-heading font-semibold text-xl text-gray-900 mb-2'>
                    No creations yet
                  </h4>
                  <p className='text-gray-600 mb-4'>
                    Start creating amazing content with our AI creative tools
                  </p>
                  <button className='btn-primary'>
                    Create Your First Masterpiece
                  </button>
                </div>
              )}
            </div>
          </div>
        )
      }
      
    </div>
  )
}

export default Dashboard