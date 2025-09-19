import React from 'react'

interface AccordionProps {
  children: React.ReactNode
}

interface AccordionItemProps {
  children: React.ReactNode
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

export function Accordion({ children }: AccordionProps) {
  return <div className="space-y-2">{children}</div>
}

export function AccordionItem({ children }: AccordionItemProps) {
  return <div className="border border-gray-200 rounded-lg">{children}</div>
}

export function AccordionTrigger({ children, className = "" }: AccordionTriggerProps) {
  return (
    <button className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 ${className}`}>
      <span>{children}</span>
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export function AccordionContent({ children, className = "" }: AccordionContentProps) {
  return (
    <div className={`px-4 pb-3 text-gray-600 ${className}`}>
      {children}
    </div>
  )
}