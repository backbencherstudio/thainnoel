import React from 'react'
import { WhatsIncludedSection } from './WhatsIncludedSection'
// import { ProblemSolutionSection } from './ProblemSolutionSection'
// import { WhoIsItForSection } from './WhoIsItForSection'
// import { WhyChooseSection } from './WhyChooseSection'
import { HowItWorksSection } from './HowItWorksSection'
import { FAQSection } from './FAQSection'
// import { CallToActionSection } from './CallToActionSection'

export default function ServiceDetails() {
  return (
    <div>
      <WhatsIncludedSection />
      {/* <ProblemSolutionSection /> */}
      {/* <WhoIsItForSection /> */}
      {/* <WhyChooseSection /> */}
      <HowItWorksSection />
      <FAQSection />
      {/* <CallToActionSection /> */}
    </div>
  )
}
