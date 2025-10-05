import React from 'react'
import Link from 'next/link'

const TopBar = () => {
    return (
        <div className="bg-gradient-to-l from-sky-950 to-slate-500  ">
            <div className="flex   items-start justify-between custom-Container py-2.5">
                {/* left contact content  */}
                <div className=" flex flex-col md:flex-row justify-start items-start gap-2 md:gap-4">
                    <Link href="mailto:info@example.com" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.05957 10.2983C7.8127 11.5733 10.1882 11.5732 11.9414 10.2983L18 5.89111V12.6001C18 14.8092 16.2091 16.6001 14 16.6001H4C1.79086 16.6001 0 14.8092 0 12.6001V5.89014L6.05957 10.2983ZM14 0.399902C15.8977 0.399902 17.4851 1.72172 17.8955 3.49463L10.7646 8.68115C9.71292 9.44555 8.28798 9.4457 7.23633 8.68115L0.103516 3.49365C0.514135 1.7211 2.10259 0.399902 4 0.399902H14Z" fill="white" />
                        </svg>
                        <span className=" text-neutral-50 text-lg font-medium font-Inter leading-relaxed">info@optivo.solutions</span>
                    </Link>
                    <Link href="tel:+858349461" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.69959 2.16675H2.48892C2.02836 2.16675 1.65368 2.54209 1.66633 3.00247C1.93358 12.7334 6.93269 17.7325 16.6636 17.9997C17.124 18.0124 17.4994 17.6377 17.4994 17.1772V13.9665C17.4994 13.6369 17.3053 13.3383 17.0041 13.2045L14.1823 11.9503C13.9124 11.8304 13.5992 11.8621 13.3589 12.0337L11.2099 13.5687C10.9729 13.7381 10.6626 13.7715 10.3961 13.6537C7.82534 12.5179 7.14818 11.8407 6.01233 9.27C5.89458 9.0035 5.92798 8.69328 6.09733 8.45619L7.63233 6.3072C7.80398 6.06688 7.83573 5.75369 7.71578 5.48381L6.46163 2.66197C6.32779 2.36083 6.02914 2.16675 5.69959 2.16675Z" fill="white" />
                        </svg>
                        <span className=" text-neutral-50 text-lg font-medium font-Inter leading-relaxed">(085) 834-9461 </span>
                    </Link>
                </div>
                {/* right logos  */}
                <div className="flex h-[28px] justify-center items-center gap-3">
                    {/* <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 0.5C17.7614 0.5 20 2.73858 20 5.5V15.5C20 18.2614 17.7614 20.5 15 20.5H5C2.23858 20.5 0 18.2614 0 15.5V5.5C0 2.73858 2.23858 0.5 5 0.5H15ZM10 5.5C7.23858 5.5 5 7.73858 5 10.5C5 13.2614 7.23858 15.5 10 15.5C12.7614 15.5 15 13.2614 15 10.5C15 7.73858 12.7614 5.5 10 5.5ZM10 7.5C11.6569 7.5 13 8.84315 13 10.5C13 12.1569 11.6569 13.5 10 13.5C8.34315 13.5 7 12.1569 7 10.5C7 8.84315 8.34315 7.5 10 7.5ZM16 3.5C15.4477 3.5 15 3.94772 15 4.5C15 5.05228 15.4477 5.5 16 5.5C16.5523 5.5 17 5.05228 17 4.5C17 3.94772 16.5523 3.5 16 3.5Z" fill="white" />
                        </svg>
                    </Link> */}
                    {/* <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0.5H4C1.79086 0.5 0 2.29086 0 4.5V16.5C0 18.7091 1.79086 20.5 4 20.5H8.5V14.5H5V11.5H8.5V9.5C8.5 7.29086 10.2909 5.5 12.5 5.5H15V8.5H12.5C11.9477 8.5 11.5 8.94772 11.5 9.5V11.5H15V14.5H11.5V20.5H16C18.2091 20.5 20 18.7091 20 16.5V4.5C20 2.29086 18.2091 0.5 16 0.5Z" fill="white" />
                        </svg>
                    </Link> */}
                    <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.5C15.5228 0.5 20 4.97715 20 10.5C20 16.0228 15.5228 20.5 10 20.5C8.47241 20.5 7.02447 20.1574 5.72949 19.5449L1.375 20.2705C0.700015 20.383 0.113141 19.7995 0.222656 19.124L0.935547 14.7295C0.335243 13.445 0 12.0114 0 10.5C0 4.97716 4.47716 0.500013 10 0.5ZM6.88867 6.5C6.39792 6.50012 6.00012 6.89792 6 7.38867C6 11.316 9.18397 14.5 13.1113 14.5C13.6021 14.4999 13.9999 14.1021 14 13.6113V13.1748C14 12.633 13.67 12.1456 13.167 11.9443L12.7002 11.7578C12.1788 11.5494 11.5842 11.7752 11.333 12.2773C11.3091 12.2725 10.2122 12.0462 9.33301 11.167C8.45385 10.2878 8.22752 9.19089 8.22266 9.16699C8.72483 8.91577 8.95056 8.32121 8.74219 7.7998L8.55566 7.33301C8.35444 6.82996 7.86699 6.50004 7.3252 6.5H6.88867Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default TopBar
