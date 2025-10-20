import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isTitleCard?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isTitleCard = false,
}) => {
  if (isTitleCard) {
    return (
      <div className="w-full max-w-[384px] h-auto flex items-center justify-start">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[57.60px] text-left">
          {title}
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[384px] h-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-sm flex flex-col gap-6 sm:gap-8">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2 sm:p-2.5 bg-indigo-50 rounded-lg flex justify-center items-center">
        <Image
          src={icon}
          alt={title}
          width={36}
          height={36}
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
        />
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

export default function WhatsIncluded() {
  const services = [
    {
      icon: "",
      title: "What's Included?",
      description: "",
      isTitleCard: true,
    },
    {
      icon: "/services/icons/icon1.svg",
      title: "Process Mapping Session",
      description: "Understand your current workflow from start to finish.",
    },
    {
      icon: "/services/icons/icon2.svg",
      title: "Current-State & Ideal-State Diagrams",
      description: "Visualise bottlenecks and the improved design.",
    },
    {
      icon: "/services/icons/icon3.svg",
      title: "Workflow Automation",
      description:
        "Implement automation tools where they deliver the most value.",
    },
    {
      icon: "/services/icons/icon4.svg",
      title: "SOP Creation",
      description: "Step-by-step documentation for consistency.",
    },
    {
      icon: "/services/icons/icon6.svg",
      title: "Staff Training Video",
      description: "Loom walkthrough to onboard your team to the new process.",
    },
  ];

  return (
    <>
      <div className="w-full bg-violet-50">
        <div className="max-w-[1320px] w-full mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-stretch justify-center">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} isTitleCard={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
