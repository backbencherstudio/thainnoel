'use client';
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = Array.from({ length: 20 }, (_, i) => `/logos/frame-${i + 1}.png`);

const LogoCarousel = () => {
  return (
    <section id="logoCarousel" className="py-8 sm:py-6 md:py-8 lg:py-12 xl:py-20 px-4 sm:px-4 md:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-12">
        <div className="text-center text-zinc-950 text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-Poppins leading-tight md:leading-10">Our Trusted Technology Partners</div>
        <div className="flex flex-col gap-3 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-9">
          <Marquee speed={60} direction="left" gradient gradientWidth={50}>
            <div className="flex gap-6 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-14">
              {logos.map((logo, index) => (
                <Image key={index} src={logo} alt={`Technology partner ${index + 1}`} width={120} height={48} className="h-8 sm:h-6 md:h-8 lg:h-10 xl:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              ))}
            </div>
          </Marquee>
          <Marquee speed={60} direction="right" gradient gradientWidth={50}>
            <div className="flex gap-6 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-14">
              {logos.map((logo, index) => (
                <Image key={index} src={logo} alt={`Technology partner ${index + 1}`} width={120} height={48} className="h-8 sm:h-6 md:h-8 lg:h-10 xl:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;
