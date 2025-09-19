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
            className={`flex py-[82px] bg-blue-600/30 bg-blend-darken ${className}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: showParallax ? "scroll" : "scroll",
                backgroundPosition: showParallax ? `center center` : "center",
                backgroundSize: "100% auto",
                transition: showParallax ? "background-position 0s ease-out" : "none",
            }}
        >
            <div className="flex flex-col !max-w-[854px] custom-Container items-center gap-8">
                <div className="flex flex-col gap-4">
                    <span className={`text-center justify-start text-white text-6xl font-bold font-Inter leading-[76.80px] ${titleClassName}`}>
                        {title}
                    </span>
                    <span className={`text-center justify-start text-white text-2xl font-normal font-Inter leading-9 ${paragraphClassName}`}>
                        {paragraph}
                    </span>
                </div>
                
                {(primaryButton || secondaryButton) && (
                    <div className="flex flex-col md:flex-row items-center text-white gap-3">
                        {primaryButton && (
                            <button 
                                className="border-1 border-[#2970FF] px-6 py-4 bg-[#2970FF] hover:bg-white text-white hover:text-[#2970FF] duration-300 cursor-pointer flex gap-2"
                                onClick={() => handleButtonClick(primaryButton)}
                            >
                                <span>{primaryButton.text}</span>
                                <svg
                                    width="24"
                                    height="24"
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
                                className="border-1 border-[#2970FF] px-6 py-4 hover:bg-white hover:text-[#2970FF] duration-300 cursor-pointer"
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