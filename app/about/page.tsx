import React from 'react'
import About from './components/about'
import BoostSuccess from '../home/components/BoostSuccess'
import { FAQSection } from '../components/common/faq-section'
import TransformBusiness from '../components/common/TransformBusiness'

export default function AboutPage() {
  return (
    <div>
      <About />
      <BoostSuccess />
      <FAQSection />
      <TransformBusiness />
    </div>
  )
}
