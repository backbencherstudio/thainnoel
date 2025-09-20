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
      <div className="w-96 h-auto flex items-center justify-start">
        <h2 className="text-black text-5xl font-bold leading-[57.60px] text-left">
          How It<br />Works
        </h2>
      </div>
    );
  }

  return (
    <div className="w-96 h-auto p-8 bg-white flex flex-col gap-6">
      <div className="border-b border-indigo-50 flex flex-col justify-center items-start gap-2.5 pb-2.5">
        <div className="opacity-20 text-zinc-400 text-8xl font-semibold leading-[134.40px]">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-neutral-900 text-2xl font-semibold leading-loose">
          {title}
        </h3>
        <p className="text-neutral-600 text-base font-normal leading-relaxed">
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
      <div className="max-w-[1320px] w-full mx-auto py-24">
        <div className="flex flex-wrap gap-8 items-stretch justify-center">
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
