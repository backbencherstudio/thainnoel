'use client'
import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/NavBar';

interface DynamicNavigationProps {
    title: string;
    description: string;
    backgroundImage: string;
    contactEmail?: string;
    contactPhone?: string;
    consultationButtonText?: string;
    consultationButtonOnClick?: () => void;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    showParallax?: boolean;
}

const DynamicNavigation: React.FC<DynamicNavigationProps> = ({
    title,
    description,
    backgroundImage,
    contactEmail = "info@example.com",
    contactPhone = "(085) 834-9461",
    consultationButtonText = "Book a Consultation",
    consultationButtonOnClick,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    showParallax = true
}) => {
    const [scrollY, setScrollY] = useState(0);

    // Debug: Log the background image
    console.log('DynamicNavigation - Background image:', backgroundImage);

    useEffect(() => {
        if (!showParallax) return;
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showParallax]);

    return (
        <div className={`flex flex-col w-full items-start relative ${className}`}>
            {/* Unified Navigation */}
            <NavBar 
                contactEmail={contactEmail}
                contactPhone={contactPhone}
                consultationButtonText={consultationButtonText}
                consultationButtonOnClick={consultationButtonOnClick}
            />

            {/* Main Hero Section */}
            <section 
                className="w-full mx-auto h-[600px] relative bg-black/50 overflow-hidden"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "scroll",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Main Content */}
                <div className="w-full mx-auto top-[209px] absolute inline-flex flex-col justify-center items-center gap-8 z-10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className={`w-[766px] text-center justify-start text-white text-6xl font-bold font-['Inter'] leading-[76.80px] ${titleClassName}`}>
                            {title}
                        </div>
                        <div className={`w-[751px] text-center justify-start text-white text-2xl font-normal font-['Inter'] leading-9 ${descriptionClassName}`}>
                            {description}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DynamicNavigation;