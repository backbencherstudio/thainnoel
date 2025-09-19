"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqData = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We primarily work with startups, remote-first teams, agencies, and growing companies looking to streamline operations. If your business is scaling and needs smarter systems, we can help.",
    defaultOpen: true,
  },
  {
    question: "How do you customize your services for each client?",
    answer:
      "We start with a comprehensive discovery phase to understand your unique challenges, goals, and existing workflows. Then we create a tailored strategy that aligns with your business objectives and integrates seamlessly with your current processes.",
  },
  {
    question: "Do I need to change my current tools?",
    answer:
      "Not necessarily. We work with your existing tech stack whenever possible and only recommend changes when they'll significantly improve efficiency or solve critical problems. Our goal is to enhance what you have, not replace everything.",
  },
  {
    question: "What if I only need help for a few months?",
    answer:
      "We offer flexible engagement models including short-term projects, consulting sprints, and month-to-month arrangements. Whether you need a quick optimization or ongoing support, we can structure our services to match your timeline and budget.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see initial improvements within 2-4 weeks of implementation. However, the timeline varies depending on project complexity and scope. We provide clear milestones and regular progress updates throughout our engagement.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form or schedule a free consultation call. We'll discuss your challenges, goals, and how we can help. From there, we'll create a customized proposal outlining our recommended approach and next steps.",
  },
]

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(0) // Only one item can be open at a time

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index))
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="flex flex-col xl:flex-row justify-start items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        {/* Left Section */}
        <div className="w-full xl:flex-1 flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Header Section */}
          <div className="w-full flex flex-col justify-center items-center gap-3 sm:gap-4 text-center xl:text-left">
            <h1 className="w-full text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[57.60px]">
              Frequently Asked Questions
            </h1>
            <p className="w-full text-neutral-600 text-sm xs:text-base sm:text-lg md:text-xl font-normal font-sans leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose">
              Find answers to common inquiries about my services, process, and how to get started on your project.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] relative">
            <img
              src="/faq/faq.png"
              alt="Professional consultant working at desk"
              className="w-full h-[88%] object-cover"
            />
          </div>
        </div>

        {/* Right Section - FAQ Items */}
        <div className="w-full xl:w-[600px] 2xl:w-[760px] flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openItem === index

            return (
              <div
                key={index}
                className={cn(
                  "w-full p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4 outline-1 outline-offset-[-1px] transition-all duration-300 ease-in-out",
                  "hover:shadow-lg hover:shadow-blue-100 hover:scale-[1.01] sm:hover:scale-[1.02] transform",
                  isOpen 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 outline-blue-300 shadow-lg shadow-blue-200 scale-[1.01] sm:scale-[1.02]" 
                    : "bg-white outline-indigo-50 hover:outline-indigo-100"
                )}
              >
                <div
                  className="w-full flex justify-between items-start sm:items-center cursor-pointer group"
                  onClick={() => toggleItem(index)}
                >
                  <div
                    className={cn(
                      "flex-1 text-sm xs:text-base sm:text-lg md:text-xl font-semibold font-sans leading-relaxed sm:leading-relaxed md:leading-loose transition-colors duration-200 pr-2",
                      isOpen ? "text-white" : "text-neutral-800 group-hover:text-blue-600"
                    )}
                  >
                    {faq.question}
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-300 ease-in-out flex-shrink-0",
                      isOpen 
                        ? "text-white rotate-180 scale-110" 
                        : "text-neutral-800 rotate-0 group-hover:text-blue-600 group-hover:scale-110"
                    )}
                  />
                </div>

                {/* Animated content area */}
                <div
                  className={cn(
                    "w-full overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen 
                      ? "max-h-[300px] sm:max-h-[250px] md:max-h-[200px] opacity-100" 
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className={cn(
                    "text-gray-200 text-xs xs:text-sm sm:text-base md:text-lg font-medium font-sans leading-relaxed sm:leading-relaxed md:leading-relaxed",
                    "transform transition-all duration-300 ease-in-out",
                    isOpen 
                      ? "translate-y-0" 
                      : "-translate-y-2"
                  )}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}