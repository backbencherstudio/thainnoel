'use client'
import React from 'react'
import Image from 'next/image'
import { MailIcon, MapPinIcon, PhoneIcon, ArrowUpRight, CheckCircle } from "lucide-react"
import { Button } from "../../../components/ui/button"

const useCases = [
  { name: "Agency/Creative Ops", isActive: false },
  { name: "Startup Scaling", isActive: true },
  { name: "Remote Team Ops", isActive: false },
  { name: "SaaS Implementation", isActive: false },
  { name: "Leadership Gap Fill", isActive: false },
];

const contactInfo = [
  { icon: PhoneIcon, text: "+85 555 8888 6666" },
  { icon: MailIcon, text: "example@gmail.com" },
  {
    icon: MapPinIcon,
    text: "4517 Washington Ave. Manchester,\nKentucky 39495",
  },
];

const leftFeatures = [
  "Scalable Operations Foundation",
  "Workflow Automation Implementation",
  "Real-Time KPI Dashboards",
];

const rightFeatures = [
  "Process Structuring and Standardization",
  "Chaos-Free Project Execution",
  "Founder Focus, Not Firefighting",
];

const benefits = [
  {
    image: "/usecase/case2.png",
    icon: "chart",
    title: "Quality Full Work",
    description:
      "We deliver high-quality, detail-focused operations support for your business. we build system for long-term performance and reliability.",
  },
  {
    image: "/usecase/case3.png",
    icon: "users",
    title: "100% Work Satisfactions",
    description:
      "Your goals are our priority. We work closely with you at every step to ensure the outcome meets (and exceeds) your expectations.",
  },
];

export default function UseCases() {
  return (
    <div className="w-full max-w-[1320px] overflow-x-hidden mx-auto">
      <div className="w-full py-24 bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            
            {/* Left Sidebar */}
            <div className="flex flex-col items-start justify-center gap-8 flex-shrink-0 w-full lg:w-auto">
              
              {/* Our Use Cases Card */}
              <div className="w-full lg:w-[419px] bg-gradient-to-br from-[#00294B] to-[#3C6399] rounded-lg shadow-lg">
                <div className="p-6">
                  <div className="flex flex-col items-start gap-8 w-full">
                    <h2 className="text-white text-3xl font-bold font-['Inter'] leading-tight">
                      Our Use Cases
                    </h2>

                    <div className="flex flex-col items-start gap-4 w-full">
                      {useCases.map((useCase, index) => (
                        <div
                          key={index}
                          className={`flex h-20 items-center justify-between p-4 w-full cursor-pointer rounded-lg transition-colors ${
                            useCase.isActive ? "bg-[#2970ff]" : "bg-white hover:bg-gray-50"
                          }`}
                        >
                          <div
                            className={`flex-1 text-lg font-semibold font-['Inter'] leading-relaxed ${
                              useCase.isActive ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {useCase.name}
                          </div>

                          <div className="w-12 h-12 flex items-center justify-center">
                            <ArrowUpRight className={`w-6 h-6 ${useCase.isActive ? "text-white" : "text-blue-600"}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Today Card */}
              <div className="w-full lg:w-[419px] bg-gradient-to-br from-[#00294B] to-[#3C6399] rounded-lg shadow-lg">
                <div className="flex flex-col items-start gap-3.5 p-6 w-full">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h2 className="text-white text-3xl font-bold font-['Inter'] leading-tight">
                      Get Started Today
                    </h2>

                    <p className="text-[#e9e9ea] text-lg font-normal font-['Inter'] leading-loose">
                      We step in as your operations partner to build a scalable
                      foundation.
                    </p>
                  </div>

                  <div className="flex flex-col w-full items-start gap-4">
                    <div className="flex flex-col items-start gap-4 w-full">
                      {contactInfo.map((contact, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <contact.icon className="w-6 h-6 text-[#e9e9ea]" />
                          <div className="text-[#e9e9ea] text-lg font-normal font-['Inter'] leading-loose whitespace-pre-line">
                            {contact.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col w-full lg:w-[869px] items-start gap-12">
              
              {/* Hero Image */}
              <div className="w-full h-[414px] relative">
                <Image
                  src="/usecase/case1.png"
                  alt="Business meeting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Main Content */}
              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h1 className="text-black text-5xl font-bold font-['Inter'] leading-tight">
                      Startup Scaling
                    </h1>

                    <p className="text-[#4a4c56] text-lg font-semibold font-['Inter'] leading-loose">
                      You&apos;ve found product–market fit and demand is
                      skyrocketing. But with rapid growth comes growing pains –
                      projects slip through the cracks, processes break, and
                      you&apos;re spending more time firefighting than innovating.
                      As a founder, you worry that inefficient operations will stunt
                      your startup&apos;s potential.
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-6 w-full">
                    <div className="flex flex-col items-start gap-4 w-full">
                      <h2 className="text-black text-3xl font-semibold font-['Inter'] leading-tight">
                        How Optivo Helps
                      </h2>

                      <p className="text-[#4a4c56] text-lg font-normal font-['Inter'] leading-loose">
                        We step in as your operations partner to build a scalable
                        foundation. Our team implements streamlined workflows and
                        automation to eliminate manual busywork and chaos. We set up
                        real-time KPI dashboards so you gain visibility into
                        performance at a glance. With structured processes and
                        metrics in place, you regain control and confidence to scale
                        further – freeing you to focus on product and customers, not
                        paperwork and processes.
                      </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-6">
                      <div className="flex flex-col items-start gap-3">
                        {leftFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1.5 w-full"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <div className="text-[#4a4c56] text-lg font-medium font-['Inter'] leading-loose">
                              {feature}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col items-start gap-3">
                        {rightFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1.5 w-full"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <div className="text-[#4a4c56] text-lg font-medium font-['Inter'] leading-loose">
                              {feature}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#2970ff] hover:bg-[#2970ff]/90 h-14">
                <div className='px-2 flex items-center justify-center'>
                  <span className="text-white text-lg font-normal font-['Inter'] text-center leading-loose">
                    Start Your Transformation
                  </span>
                  <ArrowUpRight className="w-6 h-6 ml-2 text-white" />
                  </div>
                </Button>
              </div>

              {/* Benefits Section */}
              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="text-black text-3xl font-semibold font-['Inter'] leading-tight">
                  Benefits of Taking Service From Us
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-full lg:w-[418px] items-start gap-3"
                    >
                      <div className="w-full h-[210px] relative">
                        <Image
                          src={benefit.image}
                          alt={benefit.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-4 w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                            {benefit.icon === "chart" ? (
                              <Image src="/usecase/quality.svg" alt="check" width={20} height={20} />
                            ) : (
                              <Image src="/usecase/satisfy.svg" alt="check" width={20} height={20} />
                            )}
                          </div>
                          <h3 className="text-black text-2xl font-medium font-['Inter'] leading-tight">
                            {benefit.title}
                          </h3>
                        </div>

                        <p className="text-[#4a4c56] text-lg font-normal font-['Inter'] leading-loose">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
