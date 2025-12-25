import React from 'react'

export default function Cookies() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-black font-['Inter'] leading-tight md:leading-[57.60px]">
            Cookie Policy
          </h1>
        </div>

        {/* Cookie Policy Content */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <section className="flex flex-col gap-3 sm:gap-4">
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Optivo Solutions uses cookies to ensure website functionality, improve performance, and understand how visitors interact with our site.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Cookies may include essential cookies, analytics cookies, and preference cookies. You can control or disable cookies through your browser settings.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              We do not use cookies for advertising or behavioural tracking.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

