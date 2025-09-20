import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { ArrowLeft, ArrowUpRight, CircleArrowOutUpRight } from 'lucide-react'

const ComprehensiveSolution = () => {
    return (
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 custom-Container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-25'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
                <div className="w-full lg:max-w-[687px] justify-start text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-Inter leading-tight md:leading-[57.60px]">Comprehensive Solutions for Every Role in Your Business</div>
                <div className="w-full lg:max-w-[514px] lg:text-right text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">We provide role-specific solutions to streamline operations, enhance collaboration, and boost overall efficiency.</div>
            </div>
            <div className='bg-[#F6F8FA] overflow-hidden p-2 sm:p-3 md:p-4 lg:p-6 xl:p-10 flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
                <Tabs defaultValue="founders" className="w-full lg:max-w-[498px] gap-3 sm:gap-4">
                    <TabsList className='bg-white w-full lg:w-fit rounded-none gap-0 sm:gap-1 md:gap-2 lg:gap-3 py-2 sm:py-3 md:py-4 lg:py-7 px-1 sm:px-2 md:px-3 flex flex-col sm:flex-row'>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 px-1 sm:px-2 md:px-3 py-1 sm:py-2 md:py-3 lg:py-4 rounded-none transition text-xs sm:text-sm md:text-base whitespace-nowrap" value="founders">For Founders</TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 px-1 sm:px-2 md:px-3 py-1 sm:py-2 md:py-3 lg:py-4 rounded-none transition text-xs sm:text-sm md:text-base whitespace-nowrap" value="operations">For Operations Leads</TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 px-1 sm:px-2 md:px-3 py-1 sm:py-2 md:py-3 lg:py-4 rounded-none transition text-xs sm:text-sm md:text-base whitespace-nowrap" value="teams">For Teams</TabsTrigger>
                    </TabsList>
                    <TabsContent value="founders">
                        <div className='w-full lg:max-w-[498px] flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8'> 
                            <div className='w-full flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
                                <div className='w-full flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-4'>
                                    <div className="self-stretch justify-start text-neutral-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-Inter leading-tight md:leading-10">For Founders</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-3'>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <a href="/servicedetailss" className='w-fit flex gap-1 sm:gap-1.5 hover:text-[#2970FF] cursor-pointer'>
                                <span className="justify-start text-Primary-button text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="16" height="17" className="sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </TabsContent>
                    <TabsContent value="operations">
                        <div className='w-full lg:max-w-[498px] flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
                            <div className='w-full flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
                                <div className='w-full flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-4'>
                                    <div className="self-stretch justify-start text-neutral-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-Inter leading-tight md:leading-10">For Operations Leads</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-3'>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <a href="/servicedetailss" className='w-fit flex gap-1 sm:gap-1.5 hover:text-[#2970FF] cursor-pointer'>
                                <span className="justify-start text-Primary-button text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="16" height="17" className="sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </TabsContent>
                    <TabsContent value="teams">
                        <div className='w-full lg:max-w-[498px] flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
                            <div className='w-full flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
                                <div className='w-full flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-4'>
                                    <div className="self-stretch justify-start text-neutral-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-Inter leading-tight md:leading-10">For Teams</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-3'>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1 sm:gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-3 sm:w-4 md:w-5 flex-shrink-0' />
                                        <span className="justify-start text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-Inter leading-relaxed md:leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <a href="/servicedetailss" className='w-fit flex gap-1 sm:gap-1.5 hover:text-[#2970FF] cursor-pointer'>
                                <span className="justify-start text-Primary-button text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="16" height="17" className="sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </TabsContent>
                </Tabs>
                <Image src={'/ComprehensiveSolution.png'} width={2000} height={2000} alt={''} className='w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[574px] mt-3 sm:mt-4 md:mt-6 lg:mt-0' />
            </div>
        </div>
    )
}

export default ComprehensiveSolution
