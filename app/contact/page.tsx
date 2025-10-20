import React from 'react'
import Contact from './components/contact'
import ContactBoost from './components/contactboost'
import { FAQSection } from '../components/common/faq-section'

export default function ContactPage() {
  return (
    <div>
      <Contact />
      <ContactBoost />
      <FAQSection />
    </div>
  )
}
