import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  isFixedHeight?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  isFixedHeight = false,
}) => {
  return (
    <div
      className={`w-full p-4 bg-indigo-50 border border-blue-500 flex items-start gap-3 ${
        isFixedHeight ? "h-32" : "h-auto"
      }`}
    >
      <div className="w-12 h-12 p-2.5 bg-white rounded-sm flex justify-center items-center">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
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

export const WhyChoseUs = (): React.JSX.Element => {
  const features = [
    {
      icon: "/services/icons/icon7.svg",
      title: "Speed Without Sacrifice",
      description: "A full process overhaul in just 14 days.",
      isFixedHeight: true,
    },
    {
      icon: "/services/icons/icon8.svg",
      title: "Automation Built-In",
      description:
        "We identify where automation can save you time and integrate it immediately.",
    },
    {
      icon: "/services/icons/icon9.svg",
      title: "Clarity for Every Step",
      description:
        "Your process is documented and visualised, making it easy for new hires and current staff to follow.",
    },
    {
      icon: "/services/icons/icon10.svg",
      title: "Custom Solutions",
      description:
        "We don't use generic templates — your process is redesigned for your exact business model.",
    },
    {
      icon: "/services/icons/icon11.svg",
      title: "Long-Term Impact",
      description:
        "With SOPs and training in place, your improved workflows stick.",
      isFixedHeight: true,
    },
  ];

  return (

    <>
    <div className="w-full ">
                <div className="w-[1320px] mx-auto py-24 flex justify-between items-start">
      {/* Left Column */}
      <div className="w-[676px] flex flex-col items-start gap-5">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-black text-5xl font-bold leading-[57.60px]">
            Why Choose Our Process Flow Sprint?
          </h2>
          <p className="w-[678px] text-neutral-600 text-lg font-normal leading-loose">
            Many businesses attempt process improvements internally but stall
            when changes disrupt daily operations. Our sprint method ensures
            your team keeps working while improvements happen in the background
            — so you see benefits fast without slowing down.
          </p>
        </div>
        <div className="w-full h-[454px] bg-black/20">
          <Image
            src="/services/flow.png"
            alt="Process Flow Sprint"
            width={676}
            height={454}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-[569px] flex flex-col items-start gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            isFixedHeight={feature.isFixedHeight}
          />
        ))}
      </div>
    </div>
    </div>

    </>

  );
};
