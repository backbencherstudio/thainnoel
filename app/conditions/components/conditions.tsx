import React from 'react'

export default function Conditions() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-black font-['Inter'] leading-tight md:leading-[57.60px]">
            Data Processing Agreement (DPA)
          </h1>
        </div>

        {/* DPA Content */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <section className="flex flex-col gap-3 sm:gap-4">
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              This Data Processing Agreement forms part of the Master Services Agreement between Optivo Solutions and the Client.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              The Client acts as the Data Controller. Optivo Solutions acts as the Data Processor and processes personal data only to deliver contracted services, including the OptiFlo platform.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Optivo implements appropriate technical and organisational security measures, supports data subject rights requests, and ensures all sub-processors meet equivalent data protection obligations.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Upon termination of services, Client data will be returned or securely deleted in accordance with the terms of the agreement.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

