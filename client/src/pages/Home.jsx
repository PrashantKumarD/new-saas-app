import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero/>
        <AiTools/>
        <Plan/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
