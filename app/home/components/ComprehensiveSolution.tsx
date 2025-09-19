import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { ArrowLeft, ArrowUpRight, CircleArrowOutUpRight } from 'lucide-react'

const ComprehensiveSolution = () => {
    return (
        <div className='flex flex-col gap-12 custom-Container py-25 '>
            <div className='flex flex-col lg:flex-row   justify-between items-start lg:items-end gap-8'>
                <div className="w-full lg:max-w-[687px] justify-start text-black text-5xl font-bold font-Inter leading-[57.60px]"> Comprehensive Solutions for Every Role in Your Business</div>
                <div className="w-full lg:max-w-[514px] lg:text-right text-neutral-600 text-lg font-normal font-Inter leading-loose">We provide role-specific solutions to streamline operations, enhance collaboration, and boost overall efficiency.</div>
            </div>
            <div className='bg-[#F6F8FA] overflow-hidden p-5 md:p-10 flex flex-col md:flex-row justify-between items-center   gap-8'>
                <Tabs defaultValue="founders" className="w-full max-w-[498px] gap-4 ">
                    <TabsList className='bg-white w-fit rounded-none gap-0 md:gap-3 py-7 px-3 '>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 md:px-3 py-4 rounded-none transition" value="founders">For Founders</TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 md:px-3 py-4 rounded-none transition" value="operations">For Operations Leads</TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 md:px-3 py-4 rounded-none transition" value="teams">For Teams</TabsTrigger>
                    </TabsList>
                    <TabsContent value="founders">
                        <div className='w-full max-w-[498px] flex  flex-col gap-8'> 
                            <div className='w-full flex flex-col gap-6'>
                                <div className='w-full flex flex-col gap-4'>
                                    <div className="self-stretch justify-start text-neutral-800 text-3xl font-bold font-Inter leading-10">For Founders</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-3'>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-fit  flex gap-1.5 hover:text-[#2970FF] cursor-pointer '>
                                <span className="justify-start text-Primary-button text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="operations">
                        <div className='w-full max-w-[498px] flex flex-col gap-8'>
                            <div className='w-full flex flex-col gap-6'>
                                <div className='w-full flex flex-col gap-4'>
                                    {/* tabs */}

                                    <div className="self-stretch justify-start text-neutral-800 text-3xl font-bold font-Inter leading-10">For Operations Leads</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-3'>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-fit  flex gap-1.5 hover:text-[#2970FF] cursor-pointer '>
                                <span className="justify-start text-Primary-button text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="teams">
                        <div className='w-full max-w-[498px] flex flex-col gap-8'>
                            <div className='w-full flex flex-col gap-6'>
                                <div className='w-full flex flex-col gap-4'>
                                    {/* tabs */}

                                    <div className="self-stretch justify-start text-neutral-800 text-3xl font-bold font-Inter leading-10">For Teams</div>
                                    <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-Inter capitalize leading-relaxed">Reliable, affordable solar installations for homes: cut bills, boost efficiency, and power sustainably.</div>
                                </div>
                                <div className='w-full flex flex-col gap-3'>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Scalable processes from day one</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Build efficient team structures</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Implement growth-ready systems</span>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <Image src={'/icons/checkmark-square-01-solid-sharp 1.svg'} alt={''} width={200} height={200} className='w-5' />
                                        <span className="justify-start text-neutral-600 text-lg font-normal font-Inter leading-loose">Optimize resource allocation</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-fit  flex gap-1.5 hover:text-[#2970FF] cursor-pointer '>
                                <span className="justify-start text-Primary-button text-lg font-semibold font-Open_Sans leading-relaxed">Read More</span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8L6 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 6.68791C8 6.68791 16.0479 6.00949 17.2692 7.23079C18.4906 8.45209 17.812 16.5 17.812 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
                <Image src={'/ComprehensiveSolution.png'} width={2000} height={2000} alt={''} className='w-full max-w-[574px] ' />
            </div>
        </div>
    )
}

export default ComprehensiveSolution
