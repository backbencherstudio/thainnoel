
'use client'
import { useRef, useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import ConsultationForm from '../../../components/forms/ConsultationForm'
import { DateRangePicker } from '../../../components/reusable/DateRangePicker'


const TransformBusiness = () => {
    const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const [selectedTimezone, setSelectedTimezone] = useState<any>({
        value: defaultTimezone,
        label: defaultTimezone,
    })

    const initialDate = new Date()
    initialDate.setHours(0, 0, 0, 0)

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate)
    const selectedDateRef = useRef<Date | undefined>(initialDate)
    const selectedTimezoneRef = useRef<string>(defaultTimezone)

    const timezoneValue = typeof selectedTimezone === 'string'
        ? selectedTimezone
        : selectedTimezone?.value || selectedTimezone?.label || defaultTimezone

    const handleDateSelect = (value: Date | undefined) => {
        const normalized = value ? new Date(value) : undefined
        if (normalized) {
            normalized.setHours(0, 0, 0, 0)
        }
        selectedDateRef.current = normalized
        setSelectedDate(normalized)
        console.debug('[Consultation] Date selection changed:', {
            selectedDate: normalized ? normalized.toISOString() : null,
        })
    }

    const handleTimezoneChange = (value: any) => {
        setSelectedTimezone(value)
        const extracted = typeof value === 'string'
            ? value
            : value?.value || value?.label || defaultTimezone
        selectedTimezoneRef.current = extracted
        console.debug('[Consultation] Timezone selection changed:', {
            selectedTimezone: extracted,
        })
    }

    return (
        <div className='flex flex-col custom-Container gap-8 sm:gap-10 md:gap-12 py-16 sm:py-20 md:py-24'>
            <div className='flex flex-col lg:flex-row  justify-between items-start lg:items-end gap-6 sm:gap-8'>
                <div className="w-full max-w-[562px] text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">Ready to Transform Your Business?</div>
                <div className="w-full lg:max-w-96 lg:text-right text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">Get a free consultation and discover how we can optimize your operations</div>
            </div>
            <div className='flex flex-col  md:flex-row justify-between gap-6 sm:gap-8'>
                <div className='h-auto sm:h-[800px] md:h-[939px] max-w-[720px] w-full items-start'>
                    {/* form **/}
                    <ConsultationForm
                        selectedDate={selectedDateRef.current}
                        selectedTimezone={selectedTimezoneRef.current}
                        selectedDateRef={selectedDateRef}
                        selectedTimezoneRef={selectedTimezoneRef}
                    />
                </div>
                <div className='w-full max-w-[600px] flex flex-col gap-4 sm:gap-6 items-center'>
                    {/* callender */}
                    <div className=" lg:max-w-72 text-center  text-neutral-800 text-xl sm:text-2xl font-semibold font-roboto leading-tight md:leading-9">Let&apos;s Talk – Pick a Time That Works for You</div>
                    <div className='flex flex-col p-6 sm:p-8 md:p-10 w-full  gap-[25px] sm:gap-[33.85px] shadow-[0px_4px_25.899999618530273px_24px_rgba(109,109,109,0.03)] items-center'>
                        <div className="w-full text-zinc-900 text-2xl sm:text-3xl font-bold font-['Proxima_Nova'] leading-tight md:leading-10">Select a Date & Time</div>
                        <DateRangePicker date={selectedDate} onSelect={handleDateSelect} />
                        <div className='w-full flex gap-[18.7px] items-center'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4361_462)">
                                    <path d="M10.8703 0.123211C9.41376 0.123211 8.04656 0.398026 6.76867 0.947657C5.47704 1.49729 4.35373 2.24959 3.39875 3.20457C2.44376 4.15956 1.69146 5.28286 1.14183 6.57449C0.592198 7.85238 0.317383 9.21959 0.317383 10.6761C0.317383 12.1326 0.592198 13.4998 1.14183 14.7777C1.69146 16.0694 2.44376 17.1927 3.39875 18.1476C4.35373 19.1026 5.47704 19.8549 6.76867 20.4046C8.04656 20.9542 9.41376 21.229 10.8703 21.229C12.3268 21.229 13.694 20.9542 14.9719 20.4046C16.2635 19.8549 17.3868 19.1026 18.3418 18.1476C19.2968 17.1927 20.0491 16.0694 20.5987 14.7777C21.1484 13.4998 21.4232 12.1326 21.4232 10.6761C21.4232 9.21959 21.1484 7.85238 20.5987 6.57449C20.0491 5.28286 19.2968 4.15956 18.3418 3.20457C17.3868 2.24959 16.2635 1.49729 14.9719 0.947657C13.694 0.398026 12.3268 0.123211 10.8703 0.123211ZM9.81911 19.0442C8.77482 18.9206 7.80609 18.6114 6.91294 18.1167C6.00605 17.6358 5.22283 17.0243 4.56328 16.2823C3.90372 15.5403 3.38157 14.6884 2.99683 13.7266C2.61209 12.7647 2.41972 11.7479 2.41972 10.6761C2.41972 10.3463 2.44033 10.0234 2.48155 9.70738C2.52277 9.39135 2.57774 9.08218 2.64644 8.77988L7.69617 13.8502V14.9014C7.69617 15.4785 7.90228 15.9732 8.3145 16.3854C8.72672 16.7976 9.22826 17.0037 9.81911 17.0037V19.0442ZM17.0948 16.3648C16.9574 15.9388 16.7067 15.5884 16.3425 15.3136C15.9784 15.0388 15.5627 14.9014 15.0956 14.9014H14.0444V11.7273C14.0444 11.4387 13.9413 11.1914 13.7352 10.9853C13.5291 10.7792 13.2749 10.6761 12.9726 10.6761H6.645V8.57377H8.76795C9.0565 8.57377 9.30383 8.47072 9.50995 8.26461C9.71606 8.05849 9.81911 7.80429 9.81911 7.50199V5.39966H11.9214C12.5123 5.39966 13.0138 5.19355 13.4261 4.78133C13.8383 4.3691 14.0444 3.87444 14.0444 3.29733V2.84388C14.8139 3.15992 15.5215 3.57901 16.1673 4.10116C16.8132 4.62331 17.3697 5.22446 17.8368 5.90463C18.304 6.5848 18.6682 7.33023 18.9292 8.14094C19.1903 8.9379 19.3208 9.78296 19.3208 10.6761C19.3208 11.7754 19.1216 12.8128 18.7231 13.7884C18.3246 14.764 17.7819 15.6228 17.0948 16.3648Z" fill="#1A1A1A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4361_462">
                                        <rect width="21.1058" height="21.1058" fill="white" transform="matrix(1 0 0 -1 0.317383 21.229)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <TimezoneSelect
                                value={selectedTimezone}
                                onChange={handleTimezoneChange}
                                className='w-full'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransformBusiness
