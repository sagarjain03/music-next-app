import React from 'react'
import Hero from './components/ui/Hero'
import FeaturedCourses from './components/FeaturedCourses'
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo'
import MovingCards from './components/MovingCards'
import UpcomingWebinars from './components/UpcomingWebinars'


const page = () => {
  return (
    
    <div>
      
      <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
   
    
    <Hero/>
    <FeaturedCourses/>
    <br />
    <StickyScrollRevealDemo/>
    <MovingCards/>
    <UpcomingWebinars/>
   </main>
    </div>
   
  )
}

export default page
