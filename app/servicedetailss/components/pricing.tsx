import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-[104px] px-4 sm:px-6 md:px-8 lg:px-[100px] py-12 sm:py-16 md:py-20 relative w-full bg-[#f3f6fe] overflow-hidden">
      <div className="flex flex-col w-full lg:w-[836px] items-start gap-6 sm:gap-8 pr-0 lg:pr-[52px] border-r-0 lg:border-r border-[#A0A6B8]">
        <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
          <h2 className="w-full text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">
            Ready to eliminate bottlenecks and speed up delivery?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
            Book your free 30-minute consultation and get your process sprint scheduled.
          </p>
        </div>

        <Button className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#2970ff] hover:bg-[#2970ff]/90 w-full sm:w-auto">
        <div className="flex flex-row items-center justify-center gap-2">
        <span className="text-center text-white text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-loose">
            Book a KPI Consultation
          </span>
          <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        </Button>
      </div>

      <div className="flex flex-col w-full lg:w-[106px] items-start gap-4 sm:gap-6">
        <h3 className="text-black text-xl sm:text-2xl md:text-3xl font-medium font-['Inter'] leading-tight md:leading-10">
          Pricing
        </h3>

        <div className="flex flex-col items-start justify-center gap-1 w-full">
          <p className="text-neutral-600 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
            Starting at
          </p>
          <div className="font-semibold">
            <span className="text-[#2970ff] text-3xl sm:text-4xl font-semibold font-['Inter'] leading-tight sm:leading-[50.40px]">$199</span>
            <span className="text-[#2970ff] text-base sm:text-lg font-semibold font-['Inter'] leading-relaxed">/</span>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[-200px] sm:top-[-250px] md:top-[-300px] lg:top-[-308px] left-[50px] sm:left-[100px] md:left-[150px] lg:left-[179px] w-[800px] sm:w-[1000px] md:w-[1200px] lg:w-[1462px] h-[500px] sm:h-[700px] md:h-[800px] lg:h-[996px] opacity-30 lg:opacity-100"
        alt="Vector"
        src="/services/icons/vector.svg"
      />
    </section>
  );
};
