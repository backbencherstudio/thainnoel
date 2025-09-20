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
      <div className="w-96 h-auto flex items-center justify-start">
        <h2 className="text-black text-5xl font-bold leading-[57.60px] text-left">
          {title}
        </h2>
      </div>
    );
  }

  return (
    <div className="w-96 h-auto p-8 bg-white rounded-lg shadow-sm flex flex-col gap-8">
      <div className="w-16 h-16 p-2.5 bg-indigo-50 rounded-lg flex justify-center items-center">
        <Image
          src={icon}
          alt={title}
          width={36}
          height={36}
          className="w-9 h-9"
        />
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
        <div className="max-w-[1320px] w-full mx-auto py-24">
          <div className="flex flex-wrap gap-8 items-stretch justify-center">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} isTitleCard={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
