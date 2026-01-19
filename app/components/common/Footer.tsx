'use client'
import { ArrowUpRight, Instagram, InstagramIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const disp = (e) => {
    e.preventDefault(); // prevent the page from refreshing
    const email = document.getElementById('email');
    console.log("Form submitted with email:", email);
  };

  return (
    <div className='w-full  bg-gradient-to-l from-sky-950 to-slate-500 text-white  '>

      <div className='custom-Container pt-15 md:pt-[100px]'>
        <div className='flex flex-wrap flex-row justify-between gap-10 pb-8'>
          <div className='flex flex-col gap-6 w-fit'>
            <div className='flex flex-col gap-2'>
              <Image src={'/logos/PageBrandLogo.svg'} alt={''} height={200} width={200} className=' w-[400px] sm:w-[400px] md:w-[400px] xl:w-[500px] 2xl:w-[500px] h-auto md:-mt-10 ' />
              <div className="w-full max-w-[457px] justify-start text-white text-lg font-normal font-['Inter'] leading-loose">We help companies streamline processes, implement automation, and scale efficiently. From startups to enterprise, we deliver results that drive growth.</div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className="self-stretch justify-start text-white text-2xl font-semibold leading-9">Sign up for our newsletter</div>
              <form onSubmit={disp} className="w-fit md:w-full outline-1 outline-offset-[-1px] outline-white inline-flex justify-between items-center md:mb-[60px]">
                <input id='email' className="focus:outline-0 w-full pl-4 pr-3 py-3   text-gray-200 text-base font-normal font-['Inter'] leading-7" placeholder='Enter your email...'></input>
                <button type='submit' className="p-2 cursor-pointer flex justify-center items-center gap-2.5">
                  <ArrowUpRight />
                </button>
              </form>
            </div>
          </div>
          {/* usefull links  */}
          <div className='flex flex-col gap-7.5 w-fit'>
            <div className="justify-start text-white text-lg font-bold font-['Inter'] leading-loose">Useful Links</div>
            <div className='flex flex-col gap-4'>
              <Link href="/about" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">About Us</Link>
              <Link href="/usecases" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">Use Cases</Link>
              <Link href="/services" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">Our Services</Link>
              {/* <Link href="/blogs" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">Our Blogs</Link> */}
              <Link href="/contact" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>
          {/* Legals */}
          <div className='flex flex-col gap-7.5 w-fit'>
            <div className="justify-start text-white text-lg font-bold font-['Inter'] leading-loose">Legals</div>
            <div className='flex flex-col gap-4'>
              <Link href="/privacy-policy" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">Terms of Services</Link>
              <Link href="/cookies" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">Cookies Disclaimer</Link>
            </div>
          </div>
          {/* contact us*/}
          <div className='flex flex-col gap-4 w-fit'>
            <div className='flex flex-col gap-5'>
              <div className="self-stretch justify-start text-white text-lg font-bold font-['Inter'] leading-loose">Contact Us</div>
              <div className='flex flex-col gap-[5px]'>
                <div className='flex flex-col gap-2'>
                  <div className="justify-start text-white text-lg font-medium font-['Inter'] leading-loose">Email:</div>
                  <Link href="mailto:info@optivo.solutions" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">info@optivo.solutions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center py-4 border-t-1 border-white text-white text-lg font-normal font-['Inter'] leading-loose">© 2025 Optivo Solutions</div>
      </div>
    </div>
  )
}

export default Footer
