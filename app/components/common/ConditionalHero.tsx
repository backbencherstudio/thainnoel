'use client'
import { usePathname, useRouter } from 'next/navigation';
import HeroSlider from '../../../components/HeroSlider';
import DynamicNavigation from './DynamicNavigation';
import { pageConfigurations } from './pageConfigurations';

interface ConditionalHeroProps {
    contactEmail?: string;
    contactPhone?: string;
    consultationButtonText?: string;
    consultationButtonOnClick?: () => void;
}

const ConditionalHero: React.FC<ConditionalHeroProps> = ({
    contactEmail = "info@thainnoel.com",
    contactPhone = "(085) 834-9461",
    consultationButtonText = "Book a Consultation",
    consultationButtonOnClick
}) => {
    const pathname = usePathname();
    const router = useRouter();
    
    // Check if current page iis home page
    const isHomePage = pathname === '/';
    
    if (isHomePage) {
        return <HeroSlider />;
    }
    
    // Get page configuration based on pathname
    const getPageConfig = (path: string) => {
        switch (path) {
            case '/services':
                return pageConfigurations.services;
            case '/servicedetails':
                return pageConfigurations.servicedetails;
            case '/about':
                return pageConfigurations.about;
            case '/usecases':
                return pageConfigurations.usecases;
            case '/contact':
                return pageConfigurations.contact;
            case '/blogs':
                return pageConfigurations.blogs;
            case '/blogdetails':
                return pageConfigurations.blogdetails;
            default:
                return pageConfigurations.home;
        }
    };
    
    const config = getPageConfig(pathname);
    
    return (
        <DynamicNavigation
            title={config.title}
            description={config.description}
            backgroundImage={config.backgroundImage}
            contactEmail={contactEmail}
            contactPhone={contactPhone}
            consultationButtonText={consultationButtonText}
            consultationButtonOnClick={consultationButtonOnClick}
        />
    );
};

export default ConditionalHero;