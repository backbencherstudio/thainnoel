'use client'
import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
    title: string;
    paragraph: string;
    backgroundImage: string;
    primaryButton?: {
        text: string;
        onClick?: () => void;
        href?: string;
    };
    secondaryButton?: {
        text: string;
        onClick?: () => void;
        href?: string;
    };
    className?: string;
    titleClassName?: string;
    paragraphClassName?: string;
    showParallax?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    paragraph,
    backgroundImage,
    primaryButton,
    secondaryButton,
    className = "",
    titleClassName = "",
    paragraphClassName = "",
    showParallax = true
}) => {
    const [scrollY, setScrollY] = useState(0);

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

    const handleButtonClick = (button: { onClick?: () => void; href?: string }) => {
        if (button.onClick) {
            button.onClick();
        } else if (button.href) {
            window.location.href = button.href;
        }
    };

    return (
        <div
            className={`flex py-12 md:py-[82px] bg-blue-600/30 bg-blend-darken min-h-[400px] md:min-h-[500px] ${className}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: showParallax ? "scroll" : "scroll",
                backgroundPosition: showParallax ? `center center` : "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                transition: showParallax ? "background-position 0s ease-out" : "none",
            }}
        >
            <div className="flex flex-col w-full max-w-[854px] mx-auto px-4 md:px-6 lg:px-8 items-center gap-6 md:gap-8">
                <div className="flex flex-col gap-3 md:gap-4">
                    <span className={`text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-Inter leading-tight md:leading-[76.80px] ${titleClassName}`}>
                        {title}
                    </span>
                    <span className={`text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-Inter leading-relaxed md:leading-9 ${paragraphClassName}`}>
                        {paragraph}
                    </span>
                </div>
                
                {(primaryButton || secondaryButton) && (
                    <div className="flex flex-col sm:flex-row items-center text-white gap-3 w-full sm:w-auto">
                        {primaryButton && (
                            <button 
                                className="w-full sm:w-auto border-1 border-[#2970FF] px-4 md:px-6 py-3 md:py-4 bg-[#2970FF] hover:bg-white text-white hover:text-[#2970FF] duration-300 cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base font-medium"
                                onClick={() => handleButtonClick(primaryButton)}
                            >
                                <span>{primaryButton.text}</span>
                                <svg
                                    width="20"
                                    height="20"
                                    className="md:w-6 md:h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 13H18.5715M14.0001 18L19 13L14 8"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </button>
                        )}
                        
                        {secondaryButton && (
                            <button 
                                className="w-full sm:w-auto border-1 border-[#2970FF] px-4 md:px-6 py-3 md:py-4 hover:bg-white hover:text-[#2970FF] duration-300 cursor-pointer text-sm md:text-base font-medium"
                                onClick={() => handleButtonClick(secondaryButton)}
                            >
                                {secondaryButton.text}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroSection;