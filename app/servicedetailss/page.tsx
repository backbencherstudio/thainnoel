import React from 'react'
import ServiceBoost from './components/detailboost'
import { ProblemSolution } from './components/ProblemSolution'
import WhatsIncluded from './components/whatsIncluded'
import { WhyChoseUs } from './components/WhyChoseUs'
import { HowItWorks } from './components/HowItWorks'
import TransformBusiness from '../components/common/TransformBusiness'

export default function ServiceDetailsPage() {
  return (
    <div>
        <ProblemSolution />
        <WhatsIncluded />
        <ServiceBoost />
        <WhyChoseUs />
        <HowItWorks />
        <TransformBusiness />
    </div>
  )
}
