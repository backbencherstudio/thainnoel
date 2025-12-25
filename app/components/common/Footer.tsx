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
              <Link href="/conditions" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">DPA</Link>
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
                <div className='flex flex-col gap-2'>
                  <div className="justify-start text-white text-lg font-medium font-['Inter'] leading-loose">Phone:</div>
                  <Link href="tel:+8555588886666" className="justify-start text-gray-200 text-base font-normal font-['Inter'] leading-7 cursor-pointer hover:text-white transition-colors">(085) 834-9461</Link>
                </div>
              </div>
            </div>
            <div className='flex gap-3'>
              {/* <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:opacity-80 transition-opacity'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27 0C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5C0 2.23858 2.23858 0 5 0H27ZM16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM15.999 11.2002C18.6499 11.2002 20.7997 13.3491 20.7998 16C20.7998 18.651 18.65 20.7998 15.999 20.7998C13.3482 20.7996 11.1992 18.6508 11.1992 16C11.1993 13.3492 13.3483 11.2004 15.999 11.2002ZM25.5996 4.7998C24.7163 4.80002 24.0002 5.51609 24 6.39941C24 7.28294 24.7161 7.99979 25.5996 8C26.4833 8 27.2002 7.28307 27.2002 6.39941C27.2 5.51596 26.4831 4.7998 25.5996 4.7998Z" fill="white" />
                </svg>
              </Link>

              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:opacity-80 transition-opacity'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6 0H6.4C2.86538 0 0 2.86538 0 6.4V25.6C0 29.1346 2.86538 32 6.4 32H13.6V22.4H8V17.6H13.6V12C13.6 9.79086 15.3909 8 17.6 8H24V12.8H19.4C18.8477 12.8 18.4 13.2477 18.4 13.8V17.6H24V22.4H18.4V32H25.6C29.1346 32 32 29.1346 32 25.6V6.4C32 2.86538 29.1346 0 25.6 0Z" fill="white" />
                </svg>
              </Link> */}

              <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:opacity-80 transition-opacity'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C13.5559 32 11.2399 31.4516 9.16797 30.4717L1.375 31.7705C0.700015 31.883 0.113141 31.2995 0.222656 30.624L1.49707 22.7666C0.536584 20.7114 0 18.4183 0 16C2.06161e-06 7.16346 7.16346 2.26793e-05 16 0ZM11.0215 9.59961C10.2364 9.59985 9.59985 10.2364 9.59961 11.0215C9.59961 17.3053 14.6938 22.3994 20.9775 22.3994C21.763 22.3994 22.3994 21.763 22.3994 20.9775V20.1982C22.3994 19.3804 21.9019 18.6445 21.1426 18.3408L20.3203 18.0127C19.4859 17.679 18.5348 18.0401 18.1328 18.8438C18.1067 18.8385 16.3443 18.4781 14.9326 17.0664C13.5106 15.6442 13.1553 13.8662 13.1553 13.8662C13.9591 13.4642 14.3211 12.5132 13.9873 11.6787L13.6582 10.8564C13.3544 10.0973 12.6185 9.59961 11.8008 9.59961H11.0215Z" fill="white" />
                </svg>
              </Link>

            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center py-4 border-t-1 border-white text-white text-lg font-normal font-['Inter'] leading-loose">© 2025 Optivo Solutions</div>
      </div>
    </div>
  )
}

export default Footer
