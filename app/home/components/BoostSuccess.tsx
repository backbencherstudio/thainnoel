'use client'
import React from 'react';
import HeroSection from '../../components/common/boostSection';

const BoostSuccess = () => {
    return (
        <HeroSection
            title="Boost Your Success with Our 100% Guarantee"
            paragraph="We help companies streamline processes, implement automation, and scale efficiently. From startups to enterprise."
            backgroundImage="/backgrounds/boost-success-bg.png"
            primaryButton={{
                text: "Start Your Transformation",
                href: "/servicedetailss"
            }}
            secondaryButton={{
                text: "Learn More",
                href: "/servicedetailss"
            }}
        />
    );
};

export default BoostSuccess;
