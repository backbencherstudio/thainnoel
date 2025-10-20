'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import NavBar from './NavBar';

export default function BgAnim() {
  const slides = [
    {
      image: '/backgrounds/main-slider-1-1.jpg',
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
    <section className="main-slider">
      <div
        className="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": { "el": "#main-slider-pagination", "type": "bullets", "clickable": true }, "navigation": { "nextEl": "#main-slider__swiper-button-next", "prevEl": "#main-slider__swiper-button-prev" }, "autoplay": { "delay": 6500 }}'
      >
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full overflow-hidden">
                {/* Background Image with Zoom Animation */}
                <div
                  className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30 z-0" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full max-w-4xl flex justify-center py-20 md:py-[218px] mx-auto">
                  <div className="flex flex-col items-center gap-8 text-center">
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-Inter">
                      {slide.title}
                    </h2>
                    <p className="text-white text-lg sm:text-2xl font-normal font-Inter leading-9">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col md:flex-row gap-3">
                      <a
                        href={slide.link}
                        className="border border-[#2970FF] px-6 py-4 bg-[#2970FF] hover:bg-white text-white hover:text-[#2970FF] transition duration-300 flex items-center gap-2 rounded"
                      >
                        <span>{slide.button}</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M3 13H18.5715M14 18L19 13L14 8" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </a>
                      <a
                        href="/contact"
                        className="border border-[#2970FF] px-6 py-4 text-white hover:bg-white hover:text-[#2970FF] transition duration-300 rounded"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="main-slider__nav">
          <div className="swiper-button-prev" id="main-slider__swiper-button-prev">
            <i className="icon-right-arrow icon-left-arrow"></i>
          </div>
          <div className="swiper-button-next" id="main-slider__swiper-button-next">
            <i className="icon-right-arrow"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
