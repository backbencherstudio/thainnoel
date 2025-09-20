"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div 
      className={`self-stretch p-5 flex flex-col justify-start items-start gap-4 cursor-pointer transition-colors ${
        isOpen 
          ? "bg-indigo-50 outline outline-1 outline-offset-[-1px] outline-blue-600" 
          : "bg-white outline outline-1 outline-offset-[-1px] outline-indigo-50"
      }`}
      onClick={onToggle}
    >
      <div className="self-stretch inline-flex justify-between items-center">
        <div className={`justify-start text-lg font-semibold font-['Inter'] leading-loose ${
          isOpen ? "text-black" : "text-neutral-800"
        }`}>
          {question}
        </div>
        <ChevronDown 
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen 
              ? "rotate-180 text-blue-600" 
              : "text-neutral-800"
          }`} 
        />
      </div>
      {isOpen && (
        <div className="self-stretch justify-start text-neutral-600 text-base font-medium font-['Inter'] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const Faq = (): React.JSX.Element => {
  const [openItem, setOpenItem] = useState(0);

  const faqData = [
    {
      question: "What does it mean to map?",
      answer: "You may use process mapping to examine your workflow in a visual fashion, with each step, decision point, and handoff highlighted so you can spot places that need work.",
    },
    {
      question: "What does workflow automation do?",
      answer: "Workflow automation streamlines repetitive tasks by using technology to automatically execute processes, reducing manual effort and improving efficiency across your organization.",
    },
    {
      question: "Can the sprint cover more than one process?",
      answer: "Yes, our sprint methodology can cover multiple related processes within a single engagement, allowing for comprehensive workflow optimization across different departments or functions.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenItem(index);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px] w-full mx-auto py-24">
        <div className="w-full px-36 inline-flex justify-center items-center gap-12 overflow-hidden">
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-12">
            <div className="self-stretch flex flex-col justify-center items-center gap-4">
              <div className="self-stretch justify-start text-black text-5xl font-bold font-['Inter'] leading-[57.60px]">
                Frequently Asked Questions
              </div>
              <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                Find answers to common inquiries about my services, process, and how to get started on your project.
              </div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
