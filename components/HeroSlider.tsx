'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import NavBar from './NavBar';
import { useRouter } from 'next/navigation';

export default function HeroSlider() {
  const router = useRouter();

  const slides = [
    {
      image: '/backgrounds/hero-bg.jpg',
      title: 'The #1 source for IT solutions',
      subtitle: 'From management to deployment',
      button: 'Contact Us...',
      link: '/about',
    },
    {
      image: '/backgrounds/main-slider-1-2.jpg',
      title: 'Over 20 Years Of Expertise',
      subtitle: 'From Notepad to Visual Studio...',
      button: 'More...',
      link: '/contact',
    },
    {
      image: '/backgrounds/main-slider-1-3.jpg',
      title: 'IT Managed Support Services',
      subtitle: 'Innovative solutions for your business needs...',
      button: 'Let’s Talk...',
      link: '/contact',
    },
  ];

  return (
    <div className="relative w-full max-w-[100vw] mx-auto overflow-hidden ">
      <NavBar
        contactEmail="info@thainnoel.com"
        contactPhone="(085) 834-9461"
        consultationButtonText="Book a Consultation"
        consultationButtonOnClick={() => router.push('/contact')}
      />
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full  h-full overflow-hidden">
              {/* Infinite ZOOM-IN BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover  bg-center animate-zoom-slow"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className=' bg-black/30 w-full h-full' />
              </div>
              {/* TEXT CONTENTt */}
              <div className="relative z-10 h-full max-w-4xl flex justify-center py-40 md:py-[218px] mx-auto">
                <div className='flex flex-col items-center gap-8 '>
                  <div className='flex flex-col gap-4 '>
                    <span className="  text-center justify-start text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-Inter leading-tight sm:leading-[76.80px]">Optimize Your Business Operations & Growth</span>
                    <span className="  text-center justify-start text-white text-2xl font-normal font-Inter leading-9">We help companies streamline processes, implement automation, and scale efficiently. From startups to enterprise, we deliver results that drive growth.</span>
                  </div>
                  <div className='flex flex-col md:flex-row items-center text-white gap-3'>
                    <button
                      className="border-1 border-[#2970FF] px-6 py-4 bg-[#2970FF] hover:bg-white text-white hover:text-[#2970FF] duration-300 cursor-pointer flex gap-2"
                      onClick={() => router.push('/contact')}
                    >
                      <span> Start Your Transformation</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 13H18.5715M14.0001 18L19 13L14 8" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </button>
                    <button
                      className="border-1 border-[#2970FF]  px-6 py-4 hover:bg-white hover:text-[#2970FF] duration-300 cursor-pointer"
                      onClick={() => router.push('/about')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* <div className="max-w-xl text-white space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-lg drop-shadow">{slide.subtitle}</p>
                  <a
                    href={slide.link}
                    className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-all"
                  >
                    {slide.button}
                  </a>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
