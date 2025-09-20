import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = (): React.JSX.Element => {
  const features = [
    {
      icon: "/frame-2147229565-2.svg",
      title: "Speed Without Sacrifice",
      description: "A full process overhaul in just 14 days.",
      height: "h-[134px]",
    },
    {
      icon: "/frame-2147229564.svg",
      title: "Automation Built-In",
      description:
        "We identify where automation can save you time and integrate it immediately.",
      height: "",
    },
    {
      icon: "/frame-2147229565-3.svg",
      title: "Clarity for Every Step",
      description:
        "Your process is documented and visualised, making it easy for new hires and current staff to follow.",
      height: "",
    },
    {
      icon: "/frame-2147229565-1.svg",
      title: "Custom Solutions",
      description:
        "We don't use generic templates — your process is redesigned for your exact business model.",
      height: "",
    },
    {
      icon: "/frame-2147229565.svg",
      title: "Long-Term Impact",
      description:
        "With SOPs and training in place, your improved workflows stick.",
      height: "h-[134px]",
    },
  ];

  return (
    <section className="flex items-start justify-between px-[140px] py-[100px] relative w-full">
      <div className="flex flex-col w-[676px] items-start gap-[22px] relative">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] font-title-48-bold font-[number:var(--title-48-bold-font-weight)] text-black text-[length:var(--title-48-bold-font-size)] tracking-[var(--title-48-bold-letter-spacing)] leading-[var(--title-48-bold-line-height)] [font-style:var(--title-48-bold-font-style)]">
            Why Choose Our Process Flow Sprint?
          </h2>

          <p className="relative w-[678px] mr-[-2.00px] font-body-18-regular font-[number:var(--body-18-regular-font-weight)] text-[#4a4c56] text-[length:var(--body-18-regular-font-size)] tracking-[var(--body-18-regular-letter-spacing)] leading-[var(--body-18-regular-line-height)] [font-style:var(--body-18-regular-font-style)]">
            Many businesses attempt process improvements internally but stall
            when changes disrupt daily operations. Our sprint method ensures
            your team keeps working while improvements happen in the background
            — so you see benefits fast without slowing down.
          </p>
        </div>

        <img
          className="self-stretch w-full h-[454px] relative object-cover"
          alt="Rectangle"
          src="/rectangle-34624446-2.png"
        />
      </div>

      <div className="flex flex-col w-[569px] items-start gap-4 relative">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`flex items-start gap-3 p-4 relative self-stretch w-full bg-foundation-blueblue-50 border border-solid border-[#2970ff] ${feature.height}`}
          >
            <CardContent className="flex items-start gap-3 p-0 w-full">
              <img
                className="relative w-9 h-9"
                alt="Frame"
                src={feature.icon}
              />

              <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-b text-2xl tracking-[0] leading-[33.6px]">
                  {feature.title}
                </h3>

                <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#4a4c56] text-base tracking-[0] leading-[25.6px]">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
