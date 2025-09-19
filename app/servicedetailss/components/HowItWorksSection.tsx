import React from 'react'

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a comprehensive analysis of your current situation, challenges, and goals."
    },
    {
      number: "02", 
      title: "Strategy Development",
      description: "Based on our findings, we develop a customized strategy tailored to your specific needs."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy with your team, providing guidance and support throughout the process."
    },
    {
      number: "04",
      title: "Monitoring & Support",
      description: "We monitor progress and provide ongoing support to ensure continued success and optimization."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step process ensures successful implementation and sustainable results
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}