import React from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isTitleCard?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  isTitleCard = false,
}) => {
  if (isTitleCard) {
    return (
      <div className="w-full max-w-[384px] h-auto flex items-center justify-start">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[57.60px] text-left">
          How It<br />Works
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[384px] h-auto p-4 sm:p-6 md:p-8 bg-white flex flex-col gap-4 sm:gap-6">
      <div className="border-b border-indigo-50 flex flex-col justify-center items-start gap-2 sm:gap-2.5 pb-2 sm:pb-2.5">
        <div className="opacity-20 text-zinc-400 text-4xl sm:text-6xl md:text-8xl font-semibold leading-tight sm:leading-[134.40px]">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 flex-1">
        <h3 className="text-neutral-900 text-lg sm:text-xl md:text-2xl font-semibold leading-tight md:leading-loose">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm sm:text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HowItWorks = (): React.JSX.Element => {
  const steps = [
    {
      number: "",
      title: "How It Works",
      description: "",
      isTitleCard: true,
    },
    {
      number: "01",
      title: "Discovery Call",
      description: "Figure out what process you want to make better.",
    },
    {
      number: "02",
      title: "Process Mapping",
      description: "Get a picture of the existing situation and find the problems.",
    },
    {
      number: "03",
      title: "Process Mapping",
      description: "Create the ideal flow and integrate tools.",
    },
    {
      number: "04",
      title: "SOPs and Implementation",
      description: "Document the new method and teach your staff how to use it.",
    },
    {
      number: "05",
      title: "Handovers",
      description: "Give people the tools and guidance they need to be successful over the long run.",
    },
  ];

  return (
    <div className="w-full bg-violet-50">
      <div className="max-w-[1320px] w-full mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-stretch justify-center">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              isTitleCard={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
