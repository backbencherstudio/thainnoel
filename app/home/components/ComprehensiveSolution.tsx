import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { ArrowLeft, ArrowUpRight, CircleArrowOutUpRight } from 'lucide-react'

const ComprehensiveSolution = () => {
    return (
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 custom-Container py-12 sm:py-16 md:py-20 lg:py-25'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6 md:gap-8'>
                <div className="w-full lg:max-w-[687px] justify-start text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-Inter leading-tight md:leading-[57.60px]">Comprehensive Solutions for Every Role in Your Business</div>
                <div className="w-full lg:max-w-[514px] lg:text-right text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">We provide role-specific solutions to streamline operations, enhance collaboration, and boost overall efficiency.</div>
            </div>
            <div className='bg-[#F6F8FA] overflow-hidden p-3 sm:p-4 md:p-5 lg:p-10 flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8'>
                <Tabs defaultValue="founders" className="w-full lg:max-w-[498px] gap-4">
                    <TabsList className='bg-white w-full lg:w-fit rounded-none gap-0 sm:gap-2 md:gap-3 py-3 sm:py-4 md:py-7 px-2 md:px-3 flex flex-col sm:flex-row'>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 px-2 sm:px-3 md:px-3 py-2 sm:py-3 md:py-4 rounded-none transition text-xs sm:text-sm md:text-base" value="founders">For Founders</TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 px-2 sm:px-3 md:px-3 py-2 sm:py-3 md:py-4 rounded-none transition text-xs sm:text-sm md:text-base" value="operations">For Operations Leads</TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 px-2 sm:px-3 md:px-3 py-2 sm:py-3 md:py-4 rounded-none transition text-xs sm:text-sm md:text-base" value="teams">For Teams</TabsTrigger>
                    </TabsList>
                    <TabsContent value="founders">
                        <div className='w-full lg:max-w-[498px] flex flex-col gap-4 sm:gap-6 md:gap-8'> 
                            <div className='w-full flex flex-col gap-3 sm:gap-4 md:gap-6'>
                                <div className='w-full flex flex-col gap-2 sm:gap-3 md:gap-4'>
                                    <div className="self-stretch justify-start text-neutral-800 text-xl sm:text-2xl md:text-3xl font-bold font-Inter leading-tight md:leading-10">For Founders</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-1.5 sm:gap-2 md:gap-3'>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <a href="/servicedetailss" className='w-fit flex gap-1.5 hover:text-[#2970FF] cursor-pointer'>
                                <span className="justify-start text-Primary-button text-sm sm:text-base md:text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="20" height="21" className="md:w-6 md:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </TabsContent>
                    <TabsContent value="operations">
                        <div className='w-full lg:max-w-[498px] flex flex-col gap-6 md:gap-8'>
                            <div className='w-full flex flex-col gap-4 md:gap-6'>
                                <div className='w-full flex flex-col gap-3 md:gap-4'>
                                    <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-bold font-Inter leading-tight md:leading-10">For Operations Leads</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-base md:text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-2 md:gap-3'>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <a href="/servicedetailss" className='w-fit flex gap-1.5 hover:text-[#2970FF] cursor-pointer'>
                                <span className="justify-start text-Primary-button text-sm sm:text-base md:text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="20" height="21" className="md:w-6 md:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </TabsContent>
                    <TabsContent value="teams">
                        <div className='w-full lg:max-w-[498px] flex flex-col gap-6 md:gap-8'>
                            <div className='w-full flex flex-col gap-4 md:gap-6'>
                                <div className='w-full flex flex-col gap-3 md:gap-4'>
                                    <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-bold font-Inter leading-tight md:leading-10">For Teams</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-base md:text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-2 md:gap-3'>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <a href="/servicedetailss" className='w-fit flex gap-1.5 hover:text-[#2970FF] cursor-pointer'>
                                <span className="justify-start text-Primary-button text-sm sm:text-base md:text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="20" height="21" className="md:w-6 md:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </TabsContent>
                </Tabs>
                <Image src={'/ComprehensiveSolution.png'} width={2000} height={2000} alt={''} className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[574px] mt-4 sm:mt-6 lg:mt-0' />
            </div>
        </div>
    )
}

export default ComprehensiveSolution
