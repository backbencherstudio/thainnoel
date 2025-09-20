import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section className="flex items-center justify-center gap-[104px] px-[100px] py-20 relative w-full bg-[#f3f6fe] overflow-hidden">
      <div className="flex flex-col w-[836px] items-start gap-8 pr-[52px] border-r border-[#A0A6B8]">
        <div className="flex flex-col w-[736px] items-start gap-4">
          <h2 className="w-[737px] text-black text-5xl font-bold font-['Inter'] leading-[57.60px]">
            Ready to eliminate bottlenecks and speed up delivery?
          </h2>
          <p className="text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">
            Book your free 30-minute consultation and get your process sprint scheduled.
          </p>
        </div>

        <Button className="inline-flex h-14 items-center justify-center gap-2 px-6 py-4 bg-[#2970ff] hover:bg-[#2970ff]/90">
        <div className="flex flex-row items-center justify-center gap-2">
        <span className="text-center text-white text-lg font-normal font-['Inter'] leading-loose">
            Book a KPI Consultation
          </span>
          <ArrowRightIcon className="w-6 h-6" />
        </div>
        </Button>
      </div>

      <div className="flex flex-col w-[106px] items-start gap-6">
        <h3 className="text-black text-3xl font-medium font-['Inter'] leading-10">
          Pricing
        </h3>

        <div className="flex flex-col items-start justify-center gap-1 w-full">
          <p className="text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">
            Starting at
          </p>
          <div className="font-semibold">
            <span className="text-[#2970ff] text-4xl font-semibold font-['Inter'] leading-[50.40px]">$199</span>
            <span className="text-[#2970ff] text-lg font-semibold font-['Inter'] leading-relaxed">/</span>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[-308px] left-[179px] w-[1462px] h-[996px]"
        alt="Vector"
        src="/services/icons/vector.svg"
      />
    </section>
  );
};
