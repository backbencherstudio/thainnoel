import React from 'react'

export default function Privacy() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-black font-['Inter'] leading-tight md:leading-[57.60px]">
            Optivo Solutions – Privacy & Data Protection Pack
          </h1>
        </div>

        {/* Privacy Policy Section */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <section className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-neutral-900 text-xl sm:text-2xl md:text-3xl font-bold font-['Inter'] leading-tight">
              Privacy Policy
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              This Privacy Policy explains how Optivo Solutions (&quot;we&quot;, &quot;us&quot;) collects, uses, and protects personal data when you use our website, services, or the OptiFlo SaaS platform.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              We collect only the data required to deliver services, respond to enquiries, operate OptiFlo, and meet legal obligations. Data may include names, email addresses, business contact details, and system usage data.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              We do not sell personal data. Data is shared only with trusted processors under contract and safeguarded using appropriate technical and organisational measures.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              You have the right to access, correct, or request deletion of your data in accordance with UK GDPR and applicable Canadian privacy laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

