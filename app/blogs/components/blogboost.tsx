import HeroSection from '@/app/components/common/boostSection';
import React from 'react'

export default function ServiceBoost() {
  return (
    <HeroSection
    title="Boost Your Success with Our  100%  Guarantee"
    paragraph="We help companies streamline processes, implement automation, and scale efficiently.
From startups to enterprise"
    backgroundImage="/backgrounds/boost-success-bg.png"
    primaryButton={{
        text: "Start Your Transformation",
        onClick: () => {
            // Add your primary button logic here
            console.log("Start Your Transformation clicked");
        }
    }}
    secondaryButton={{
        text: "Learn More",
        onClick: () => {
            // Add your secondary button logic here
            console.log("Learn More clicked");
        }
    }}
/>
  )
}
