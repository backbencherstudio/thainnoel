import React from 'react'
import ComprehensiveSolution from './components/ComprehensiveSolution'
import Footer from '../components/common/Footer'
import LogoCarousel from './components/LogoCarousel'
import OurService from './components/OurService'
import TransformBusiness from '../components/common/TransformBusiness'
import TopBar from '@/app/components/common/TopBar'
import WhatClientSay from './components/WhatClientSay'
import BoostSuccess from './components/BoostSuccess'

export default function HomePage() {
  return (
    <>
      <LogoCarousel />
      <OurService />
      <ComprehensiveSolution />
      <BoostSuccess />
      {/* <WhatClientSay /> */}
      <TransformBusiness />
    </>
  )
}
