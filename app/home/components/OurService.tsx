import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const OurService = () => {
    return (
        <div className='flex flex-col custom-Container gap-6 sm:gap-8 md:gap-12 pb-12 sm:pb-16 md:pb-20 lg:pb-25 pt-6 sm:pt-8 md:pt-10'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6 md:gap-8'>
                <div className="w-full lg:max-w-[687px] text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">Discover Our Services & Experience the Difference</div>
                <div className="w-full lg:max-w-[514px] lg:text-right text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">Explore our services and see how we make your disc golf experience easier and more secure.</div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8'>

                <div className="relative w-full h-[350px] sm:h-[400px] md:h-[504px] px-2 sm:px-3 md:px-4 py-4 sm:py-6 md:py-8 group cursor-pointer overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[url('/ourService/service-card-1.png')] bg-cover bg-center z-0" />

                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-black/30 to-blue-600/40 transition-all duration-500 ease-in-out z-10 origin-top"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 flex flex-col justify-end items-start h-full gap-2.5">

                        {/* Content (Initially Revealed, Hidden on Hover) */}
                        <div className=" absolute z-10 bottom-0 right-0 left-0 group-hover:opacity-0 opacity-100 transition-opacity duration-500 ease-in-out w-full p-2 sm:p-3 md:p-4 bg-white  flex justify-between items-center">
                            <div className="justify-start text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-['Poppins'] leading-tight md:leading-9">
                                Process Optimization
                            </div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-1 sm:p-1.5 md:p-2 lg:p-3 bg-blue-600 rounded-3xl flex justify-start items-center gap-2.5">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 relative overflow-hidden">
                                    <ArrowUpRight className='text-white' />
                                </div>
                            </div>
                        </div>

                        {/* Initially Hidden, Reveales on Hover */}
                        <div className="group-hover:opacity-100 z-11 opacity-0 transition-opacity duration-500 ease-in-out w-full sm:w-72 md:w-80 flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
                            <div className="self-stretch flex flex-col justify-start items-end gap-1.5 sm:gap-2 md:gap-3">
                                <div className="self-stretch text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-['Poppins'] leading-tight md:leading-10">Process Optimization</div>
                                <div className="self-stretch text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                                    Build high-performing teams with optimized structures, clear processes.
                                </div>
                            </div>
                            <div className="hover:border-b border-blue-600 w-fit flex justify-start items-center gap-1">
                                <a href='/servicedetailss' className="flex gap-1 text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-['Open_Sans'] leading-relaxed cursor-pointer">
                                    <span>Read More</span>
                                    <ArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[350px] sm:h-[400px] md:h-[504px] px-2 sm:px-3 md:px-4 py-4 sm:py-6 md:py-8 group cursor-pointer overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[url('/ourService/service-card-2.png')] bg-cover bg-top z-0" />

                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-black/30 to-blue-600/40 transition-all duration-500 ease-in-out z-10 origin-top"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 flex flex-col justify-end items-start h-full gap-2.5">

                        {/* Content (Initially Revealed, Hidden on Hover) */}
                        <div className=" absolute z-10 bottom-0 right-0 left-0 group-hover:opacity-0 opacity-100 transition-opacity duration-500 ease-in-out w-full p-2 sm:p-3 md:p-4 bg-white  flex justify-between items-center">
                            <div className="justify-start text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-['Poppins'] leading-tight md:leading-9">
                                Team Development
                            </div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-1 sm:p-1.5 md:p-2 lg:p-3 bg-blue-600 rounded-3xl flex justify-start items-center gap-2.5">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 relative overflow-hidden">
                                    <ArrowUpRight className='text-white' />
                                </div>
                            </div>
                        </div>

                        {/* Initially Hidden, Reveales on Hover */}
                        <div className="group-hover:opacity-100 z-11 opacity-0 transition-opacity duration-500 ease-in-out w-full sm:w-72 md:w-80 flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
                            <div className="self-stretch flex flex-col justify-start items-end gap-1.5 sm:gap-2 md:gap-3">
                                <div className="self-stretch text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-['Poppins'] leading-tight md:leading-10">Team Development</div>
                                <div className="self-stretch text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                                    Build high-performing teams with optimized structures, clear processes.
                                </div>
                            </div>
                            <div className="hover:border-b border-blue-600 w-fit flex justify-start items-center gap-1">
                                <a href='/servicedetailss' className="flex gap-1 text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-['Open_Sans'] leading-relaxed cursor-pointer">
                                    <span>Read More</span>
                                    <ArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[350px] sm:h-[400px] md:h-[504px] px-2 sm:px-3 md:px-4 py-4 sm:py-6 md:py-8 group cursor-pointer overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute  inset-0 bg-[url('/ourService/service-card-3.png')] bg-cover bg-top z-0" />

                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-black/30 to-blue-600/40 transition-all duration-500 ease-in-out z-10 origin-top"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 flex flex-col justify-end items-start h-full gap-2.5">

                        {/* Content (Initially Revealed, Hidden on Hover) */}
                        <div className=" absolute z-10 bottom-0 right-0 left-0 group-hover:opacity-0 opacity-100 transition-opacity duration-500 ease-in-out w-full p-2 sm:p-3 md:p-4 bg-white  flex justify-between items-center">
                            <div className="justify-start text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-['Poppins'] leading-tight md:leading-9">
                                Strategic Consulting
                            </div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-1 sm:p-1.5 md:p-2 lg:p-3 bg-blue-600 rounded-3xl flex justify-start items-center gap-2.5">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 relative overflow-hidden">
                                    <ArrowUpRight className='text-white' />
                                </div>
                            </div>
                        </div>

                        {/* Initially Hidden, Reveales on Hover */}
                        <div className="group-hover:opacity-100 z-11 opacity-0 transition-opacity duration-500 ease-in-out w-full sm:w-72 md:w-80 flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
                            <div className="self-stretch flex flex-col justify-start items-end gap-1.5 sm:gap-2 md:gap-3">
                                <div className="self-stretch text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-['Poppins'] leading-tight md:leading-10">Strategic Consulting</div>
                                <div className="self-stretch text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                                    Build high-performing teams with optimized structures, clear processes.
                                </div>
                            </div>
                            <div className="hover:border-b border-blue-600 w-fit flex justify-start items-center gap-1">
                                <a href='/servicedetailss' className="flex gap-1 text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-['Open_Sans'] leading-relaxed cursor-pointer">
                                    <span>Read More</span>
                                    <ArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default OurService
