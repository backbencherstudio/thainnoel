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
        <div className='flex flex-col gap-12 py-25'>
            <div className='flex flex-col lg:flex-row custom-Container justify-between items-start lg:items-end gap-8'>
                <div className="w-full lg:max-w-[687px] justify-start text-black text-4xl md:text-5xl font-bold font-Inter leading-[57.60px]">What our clients say about Optivo.Soluitions</div>
                <div className="w-full lg:max-w-[514px] lg:text-right text-neutral-600 text-lg font-normal font-Inter leading-loose">Discover How Optivo Solutions Has Empowered Businesses to Achieve Digital Excellence</div>
            </div>
            <div>
                <Marquee className=' ' autoFill speed={60} direction="left"  gradient gradientWidth={70} pauseOnHover>
                    {reviewCards.map((review, index) => (
                        <div key={index} className="max-w-[458px] my-2 mx-4  h-[500px] w-full p-[30px] bg-white   outline-1 outline-offset-[-1px] outline-zinc-400 inline-flex flex-col justify-start items-start gap-6  overflow-hidden">
                            <div className="w-full flex-1 flex flex-col justify-start items-start gap-5">
                                <span className="px-2 py-1 bg-blue-600  text-center justify-start text-white text-base font-semibold font-['Inter'] leading-7">{review.tag}</span>
                                <div className="self-stretch flex-1 justify-start text-black text-2xl font-semibold font-['Inter'] leading-loose">{review.review}</div>
                                <div className="w-full flex justify-start items-center gap-4">
                                    <div className="w-12 h-12 relative">
                                        <Image className="w-12 h-12 rounded-[999px] object-cover" src={review.profileImage} alt={review.profileImage} width={200} height={200} />
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <div className="text-center justify-start text-black text-base font-semibold font-['Inter'] leading-7">{review.profileName}</div>
                                        <div className="text-center justify-start text-neutral-600 text-sm font-normal font-['Inter'] leading-normal">{review.companyPosition}</div>
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
