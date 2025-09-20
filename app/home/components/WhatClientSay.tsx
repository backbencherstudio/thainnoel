import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const reviewCards = [
    {
        tag: "Web3 Enthusiast",
        review: `"Our team has seen incredible improvements in productivity and efficiency. The results have exceeded expectations, and we’re thrilled with the impact!"  `,
        profileName: "Sofia G.",
        companyPosition: "Blockchain Enthusiast",
        profileImage: "/profiles/profile-1.jpg",
    },
    {
        tag: "Enterprise Team Lead",
        review: `"Our team has seen incredible improvements in productivity and efficiency. The results have exceeded expectations, and we’re thrilled with the impact!"  `,
        profileName: "Michael L.",
        companyPosition: "Lead Engineer at Decentro Labs",
        profileImage: "/profiles/profile-2.jpg",
    },
    {
        tag: "Startup Founder",
        review: `"Our team has seen incredible improvements in productivity and efficiency. The results have exceeded expectations, and we’re thrilled with the impact!"  `,
        profileName: "Rachel T.",
        companyPosition: "Founder of NovaChain",
        profileImage: "/profiles/profile-3.jpg",
    },
    {
        tag: "Solo Developer",
        review: `"Our team has seen incredible improvements in productivity and efficiency. The results have exceeded expectations, and we’re thrilled with the impact!"`,
        profileName: " ",
        companyPosition: " ",
        profileImage: "/profiles/profile-4.jpg",
    },
]



const WhatClientSay = () => {
    return (
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 py-12 sm:py-16 md:py-20 lg:py-25'>
            <div className='flex flex-col lg:flex-row custom-Container justify-between items-start lg:items-end gap-4 sm:gap-6 md:gap-8'>
                <div className="w-full lg:max-w-[687px] justify-start text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-Inter leading-tight md:leading-[57.60px]">What our clients say about Optivo.Solutions</div>
                <div className="w-full lg:max-w-[514px] lg:text-right text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Discover How Optivo Solutions Has Empowered Businesses to Achieve Digital Excellence</div>
            </div>
            <div>
                <Marquee className=' ' autoFill speed={60} direction="left"  gradient gradientWidth={70} pauseOnHover>
                    {reviewCards.map((review, index) => (
                        <div key={index} className="max-w-[250px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[458px] my-2 mx-1 sm:mx-2 md:mx-4 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full p-3 sm:p-4 md:p-6 lg:p-[30px] bg-white outline-1 outline-offset-[-1px] outline-zinc-400 inline-flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-hidden">
                            <div className="w-full flex-1 flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                                <span className="px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 bg-blue-600 text-center justify-start text-white text-xs sm:text-sm md:text-base font-semibold font-['Inter'] leading-6 md:leading-7">{review.tag}</span>
                                <div className="self-stretch flex-1 justify-start text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-['Inter'] leading-relaxed md:leading-loose">{review.review}</div>
                                <div className="w-full flex justify-start items-center gap-2 sm:gap-3 md:gap-4">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 relative">
                                        <Image className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-[999px] object-cover" src={review.profileImage} alt={review.profileImage} width={200} height={200} />
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <div className="text-center justify-start text-black text-xs sm:text-sm md:text-base font-semibold font-['Inter'] leading-6 md:leading-7">{review.profileName}</div>
                                        <div className="text-center justify-start text-neutral-600 text-xs sm:text-sm font-normal font-['Inter'] leading-normal">{review.companyPosition}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div >
    )
}

export default WhatClientSay
