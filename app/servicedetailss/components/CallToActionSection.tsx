import React from 'react'

export function CallToActionSection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get started today with our comprehensive service and see the difference professional optimization can make.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Schedule Consultation
          </button>
        </div>
        
        <div className="mt-8 text-blue-100">
          <p>✓ Free initial consultation</p>
          <p>✓ No long-term contracts required</p>
          <p>✓ 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}