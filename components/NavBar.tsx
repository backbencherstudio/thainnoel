'use client'
import { TableOfContents, X, ChevronDownIcon } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavBarProps {
    logoImage?: string;
    contactEmail?: string;
    contactPhone?: string;
    consultationButtonText?: string;
    consultationButtonOnClick?: () => void;
    className?: string;
}

interface NavigationItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

const NavBar = ({
    logoImage = "/logos/PageBrandLogo.svg",
    contactEmail = "info@thainnoel.com",
    contactPhone = "(085) 834-9461",
    consultationButtonText = "Book a Consultation",
    consultationButtonOnClick,
    className = ""
}: NavBarProps) => {
    const [isOpen, setisOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const change = () => {
        setisOpen(!isOpen)
    }

    const handleNavigation = (path: string) => {
        router.push(path);
        setisOpen(false); // Close mobile menu after navigation
    }

    const handleConsultationClick = () => {
        if (consultationButtonOnClick) {
            consultationButtonOnClick();
        } else {
            router.push('/contact');
        }
        setisOpen(false);
    }

    const navigationItems: NavigationItem[] = [
        { label: "Home", href: "/" },
        { label: "Use Cases", href: "/usecases" },
        { label: "Our Services", href: "/services" },
        { label: "Contact Us", href: "/contact" },
        // { label: "Our Blogs", href: "/blogs" },
        { label: "About Us", href: "/about" },
    ];

    return (
        <div className={`w-screen absolute z-100 ${className}`}>
            <div className=' flex items-center justify-between   text-white  custom-Container py-6 '>
                {/* logo icon  */}
                <div className='bg-transparent'>
                    <Image src={logoImage} alt={''} height={200} width={200} className=' w-[300px] sm:w-[300px] md:w-[400px] xl:w-[500px] 2xl:w-[500px] h-auto -translate-x-2' />
                    {/* <h1 className="text-4xl font-bold uppercase">
                        Optivo.<span className="text-Primary-button">solutions</span>
                    </h1> */}


                </div>
                {/* menu items  */}
                <div className=" hidden lg:flex gap-6 justify-center">
                    {navigationItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${pathname === item.href
                                    ? "py-2.5 border-b-[1.50px] border-Primary-button flex justify-center items-center gap-2.5"
                                    : "py-2.5 flex justify-center items-center gap-2.5"
                                } cursor-pointer`}
                            onClick={() => handleNavigation(item.href)}
                        >
                            <div className="justify-start text-white text-lg font-normal font-['Inter'] leading-loose">
                                {item.label}
                            </div>
                            {item.hasDropdown && (
                                <div className="flex justify-center items-center gap-1">
                                    <ChevronDownIcon className="w-3 h-1.5 text-white" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    className="hidden lg:block border px-6 py-4 hover:bg-white hover:text-black duration-300 cursor-pointer"
                    onClick={handleConsultationClick}
                >
                    {consultationButtonText}
                </button>
                {/* Mobile menu button */}

                <button onClick={change} className={`${isOpen ? 'hidden' : ' block'} lg:hidden mr-1 cursor-pointer`}>
                    <TableOfContents />
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-0 right-0 w-fit h-fit bg-black/70 flex flex-col justify-between items-center py-8 px-6 rounded-lg lg:hidden z-50">
                        <div className="w-full flex flex-col items-center gap-6 text-white">
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    className={`hover:border-b-1 cursor-pointer ${pathname === item.href ? 'border-b-1 border-Primary-button' : ''
                                        }`}
                                    onClick={() => handleNavigation(item.href)}
                                >
                                    {item.label}
                                </button>
                            ))}

                            <button
                                className="px-6 py-4 border border-white hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                                onClick={handleConsultationClick}
                            >
                                {consultationButtonText}
                            </button>
                        </div>

                        {/* Close Icon */}
                        <X
                            onClick={change}
                            className="absolute top-8 right-5 text-white cursor-pointer stroke-3"
                            size={32}
                        />
                    </div>
                )}

            </div >
        </div>
    )
}
export default NavBar
