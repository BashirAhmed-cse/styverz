import { FAQSection } from '@/components/FAQSection'
import Hero from '@/components/Hero'
import HeroLanding from '@/components/HeroLanding'
import HostGallery from '@/components/HostGallery'

import { HowWork } from '@/components/HowWork'
import { SuccessStorySection } from '@/components/SuccessStorySection'
import React from 'react'

const Main = () => {
  return (
    <div className=''>
      <Hero/>
      
        <SuccessStorySection/>
        <HowWork/>
        <HostGallery/>
        <FAQSection/>
        <HeroLanding/>
     
    </div>
  )
}

export default Main