import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const OurService = () => {
    return (
        <div className='flex flex-col custom-Container gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-25 pt-4 sm:pt-6 md:pt-8 lg:pt-10'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
                <div className="w-full lg:max-w-[687px] text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">Discover Our Services & Experience the Difference</div>
                <div className="w-full lg:max-w-[514px] lg:text-right text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">Explore our services and see how we make your disc golf experience easier and more secure.</div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8'>

                <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[450px] xl:h-[504px] px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8 group cursor-pointer overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[url('/ourService/service-card-1.png')] bg-cover bg-center z-0" />

                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-l from-black/30 to-blue-950 transition-all duration-500 ease-in-out z-10 origin-top"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 flex flex-col justify-end items-start h-full gap-1 sm:gap-2 md:gap-2.5">

                        {/* Content (Initially Revealed, Hidden on Hover) */}
                        <div className=" absolute z-10 bottom-0 right-0 left-0 group-hover:opacity-0 opacity-100 transition-opacity duration-500 ease-in-out w-full p-1 sm:p-2 md:p-3 lg:p-4 bg-white  flex justify-between items-center">
                            <div className="justify-start text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold font-roboto leading-tight md:leading-9">
                                Process Optimization
                            </div>
                            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 bg-blue-600 rounded-3xl flex justify-start items-center gap-2.5">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative overflow-hidden">
                                    <ArrowUpRight className='text-white' />
                                </div>
                            </div>
                        </div>

                        {/* Initially Hidden, Reveales on Hover */}
                        <div className="group-hover:opacity-100 z-11 opacity-0 transition-opacity duration-500 ease-in-out w-full sm:w-64 md:w-72 lg:w-80 flex flex-col justify-start items-start gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                            <div className="self-stretch flex flex-col justify-start items-end gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                                <div className="self-stretch text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-roboto leading-tight md:leading-10">Process Optimization</div>
                                <div className="self-stretch text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed md:leading-loose">
                                    Build high-performing teams with optimized structures, clear processes.
                                </div>
                            </div>
                            <div className="hover:border-b border-blue-600 w-fit flex justify-start items-center gap-1">
                                <a href='/servicedetailss' className="flex gap-1 text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-roboto leading-relaxed cursor-pointer">
                                    <span>Read More</span>
                                    <ArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[450px] xl:h-[504px] px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8 group cursor-pointer overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[url('/ourService/service-card-2.png')] bg-cover bg-top z-0" />

                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-l from-black/30 to-blue-950 transition-all duration-500 ease-in-out z-10 origin-top"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 flex flex-col justify-end items-start h-full gap-1 sm:gap-2 md:gap-2.5">

                        {/* Content (Initially Revealed, Hidden on Hover) */}
                        <div className=" absolute z-10 bottom-0 right-0 left-0 group-hover:opacity-0 opacity-100 transition-opacity duration-500 ease-in-out w-full p-1 sm:p-2 md:p-3 lg:p-4 bg-white  flex justify-between items-center">
                            <div className="justify-start text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold font-roboto leading-tight md:leading-9">
                                Team Development
                            </div>
                            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 bg-blue-600 rounded-3xl flex justify-start items-center gap-2.5">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative overflow-hidden">
                                    <ArrowUpRight className='text-white' />
                                </div>
                            </div>
                        </div>

                        {/* Initially Hidden, Reveales on Hover */}
                        <div className="group-hover:opacity-100 z-11 opacity-0 transition-opacity duration-500 ease-in-out w-full sm:w-64 md:w-72 lg:w-80 flex flex-col justify-start items-start gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                            <div className="self-stretch flex flex-col justify-start items-end gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                                <div className="self-stretch text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-roboto leading-tight md:leading-10">Team Development</div>
                                <div className="self-stretch text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium font-roboto leading-relaxed md:leading-loose">
                                    Build high-performing teams with optimized structures, clear processes.
                                </div>
                            </div>
                            <div className="hover:border-b border-blue-600 w-fit flex justify-start items-center gap-1">
                                <a href='/servicedetailss' className="flex gap-1 text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-roboto leading-relaxed cursor-pointer">
                                    <span>Read More</span>
                                    <ArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[450px] xl:h-[504px] px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8 group cursor-pointer overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute  inset-0 bg-[url('/ourService/service-card-3.png')] bg-cover bg-top z-0" />

                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-l from-black/30 to-blue-950 transition-all duration-500 ease-in-out z-10 origin-top"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 flex flex-col justify-end items-start h-full gap-1 sm:gap-2 md:gap-2.5">

                        {/* Content (Initially Revealed, Hidden on Hover) */}
                        <div className=" absolute z-10 bottom-0 right-0 left-0 group-hover:opacity-0 opacity-100 transition-opacity duration-500 ease-in-out w-full p-1 sm:p-2 md:p-3 lg:p-4 bg-white  flex justify-between items-center">
                            <div className="justify-start text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold font-roboto leading-tight md:leading-9">
                                Strategic Consulting
                            </div>
                            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 bg-blue-600 rounded-3xl flex justify-start items-center gap-2.5">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative overflow-hidden">
                                    <ArrowUpRight className='text-white' />
                                </div>
                            </div>
                        </div>

                        {/* Initially Hidden, Reveales on Hover */}
                        <div className="group-hover:opacity-100 z-11 opacity-0 transition-opacity duration-500 ease-in-out w-full sm:w-64 md:w-72 lg:w-80 flex flex-col justify-start items-start gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                            <div className="self-stretch flex flex-col justify-start items-end gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                                <div className="self-stretch text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-roboto leading-tight md:leading-10">Strategic Consulting</div>
                                <div className="self-stretch text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium font-roboto leading-relaxed md:leading-loose">
                                    Build high-performing teams with optimized structures, clear processes.
                                </div>
                            </div>
                            <div className="hover:border-b border-blue-600 w-fit flex justify-start items-center gap-1">
                                <a href='/servicedetailss' className="flex gap-1 text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-roboto leading-relaxed cursor-pointer">
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
