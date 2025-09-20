'use client';
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  '/logos/logo1.svg',
  '/logos/logo2.svg',
  '/logos/logo3.svg',
  '/logos/logo4.svg',
  '/logos/logo5.svg',
  '/logos/logo6.svg',
  '/logos/logo5.svg',
  '/logos/logo4.svg',
  '/logos/logo3.svg',
  '/logos/logo2.svg',
  '/logos/logo1.svg',
  '/logos/logo2.svg',
  '/logos/logo3.svg',
  '/logos/logo4.svg',
  '/logos/logo5.svg',
  '/logos/logo6.svg',
  '/logos/logo5.svg',
  '/logos/logo4.svg',
  '/logos/logo3.svg',
  '/logos/logo2.svg',
   

];

const LogoCarousel = () => {
  return (
    <section id="logoCarousel" className="py-6 sm:py-8 md:py-12 lg:py-20">
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-12">
        <div className="text-center text-zinc-950 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold font-Poppins leading-tight md:leading-10">Our Trusted Technology Partners</div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-9">
          <Marquee speed={60} direction="left" gradient>
            <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14">
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt={`logo ${index}`} className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
              ))}
            </div>
          </Marquee>
          <Marquee speed={60} direction="right" gradient>
            <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14">
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt={`logo ${index}`} className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;
