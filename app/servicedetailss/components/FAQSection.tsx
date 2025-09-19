import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../components/ui/accordion";

const faqData = [
  {
    question: "What is included in this service?",
    answer: "Our service includes comprehensive analysis, custom strategy development, and full implementation with ongoing support."
  },
  {
    question: "How long does the process take?",
    answer: "The timeline varies depending on your specific needs, but typically ranges from 2-6 weeks for complete implementation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer ongoing support and maintenance to ensure your continued success."
  },
  {
    question: "What makes your service different?",
    answer: "We provide personalized solutions tailored specifically to your business needs with dedicated support throughout the process."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion>
            {faqData.map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}