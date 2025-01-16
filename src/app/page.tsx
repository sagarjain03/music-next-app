import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/ui/Hero'
import FeaturedCourses from './components/FeaturedCourses'
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo'


const page = () => {
  return (
    
    <div>
      
      <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
   
    
    <Hero/>
    <FeaturedCourses/>
    <br />
    <StickyScrollRevealDemo/>
   </main>
    </div>
   
  )
}

export default page
