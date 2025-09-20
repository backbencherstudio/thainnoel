import React from 'react'
import ServiceBoost from './components/detailboost'
import { HowItWorksSection } from './components/HowItWorksSection'
import WhatsIncluded from './components/whatsIncluded'
import { SolutionSection } from './components/SolutionSection'

export default function ServiceDetailsPage() {
  return (
    <div>




        <ServiceBoost />
        <HowItWorksSection />
        <WhatsIncluded />
        <SolutionSection />
    </div>
  )
}
