// Page configurations for different pages using DynamicNavigation

export const pageConfigurations = {
    home: {
        title: "Optimize Your Business Operations & Growth",
        description: "We help companies streamline processes, implement automation, and scale efficiently. From startups to enterprise, we deliver results that drive growth.",
        backgroundImage: "/backgrounds/hero-bg.jpg",
        navigationItems: [
            { label: "Home", active: true, href: "/" },
            { label: "Use Cases", active: false, href: "/usecases" },
            { label: "Our Services", active: false, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: false, href: "/contact" },
            { label: "Our Blogs", active: false, href: "/blogs" },
            { label: "About Us", active: false, href: "/about" },
        ]
    },
    services: {
        title: "Our Services",
        description: "Comprehensive solutions tailored to your business needs. From automation to strategic consulting.",
        backgroundImage: "/nav/nav0.png",
        navigationItems: [
            { label: "Home", active: false, href: "/" },
            { label: "Use Cases", active: false, href: "/usecases" },
            { label: "Our Services", active: true, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: false, href: "/contact" },
            { label: "Our Blogs", active: false, href: "/blogs" },
            { label: "About Us", active: false, href: "/about" },
        ]
    },
    servicedetails: {
        title: "Service Details",
        description: "Detailed information about our comprehensive service offerings and how they can benefit your business.",
        backgroundImage: "/nav/nav1.png",
        navigationItems: [
            { label: "Home", active: false, href: "/" },
            { label: "Use Cases", active: false, href: "/usecases" },
            { label: "Our Services", active: true, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: false, href: "/contact" },
            { label: "Our Blogs", active: false, href: "/blogs" },
            { label: "About Us", active: false, href: "/about" },
        ]
    },
    about: {
        title: "About Us",
        description: "Learn about our mission, values, and the team behind our success in transforming businesses.",
        backgroundImage: "/nav/nav2.png",
        navigationItems: [
            { label: "Home", active: false, href: "/" },
            { label: "Use Cases", active: false, href: "/usecases" },
            { label: "Our Services", active: false, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: false, href: "/contact" },
            { label: "Our Blogs", active: false, href: "/blogs" },
            { label: "About Us", active: true, href: "/about" },
        ]
    },
    usecases: {
        title: "Use Cases",
        description: "Discover real-world applications and success stories of our solutions across different industries.",
        backgroundImage: "/nav/nav3.png",
        navigationItems: [
            { label: "Home", active: false, href: "/" },
            { label: "Use Cases", active: true, href: "/usecases" },
            { label: "Our Services", active: false, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: false, href: "/contact" },
            { label: "Our Blogs", active: false, href: "/blogs" },
            { label: "About Us", active: false, href: "/about" },
        ]
    },
    contact: {
        title: "Contact Us",
        description: "Get in touch with our experts. We're here to help you transform your business operations.",
        backgroundImage: "/nav/nav4.png",
        navigationItems: [
            { label: "Home", active: false, href: "/" },
            { label: "Use Cases", active: false, href: "/usecases" },
            { label: "Our Services", active: false, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: true, href: "/contact" },
            { label: "Our Blogs", active: false, href: "/blogs" },
            { label: "About Us", active: false, href: "/about" },
        ]
    },
    blogs: {
        title: "Our Blogs",
        description: "Stay updated with the latest insights, trends, and best practices in business transformation.",
        backgroundImage: "/nav/nav5.png",
        navigationItems: [
            { label: "Home", active: false, href: "/" },
            { label: "Use Cases", active: false, href: "/usecases" },
            { label: "Our Services", active: false, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: false, href: "/contact" },
            { label: "Our Blogs", active: true, href: "/blogs" },
            { label: "About Us", active: false, href: "/about" },
        ]
    },
    blogdetails: {
        title: "Blog Details",
        description: "Read our detailed articles and insights on business transformation and operational excellence.",
        backgroundImage: "/nav/nav6.png",
        navigationItems: [
            { label: "Home", active: false, href: "/" },
            { label: "Use Cases", active: false, href: "/usecases" },
            { label: "Our Services", active: false, hasDropdown: true, href: "/services" },
            { label: "Contact Us", active: false, href: "/contact" },
            { label: "Our Blogs", active: true, href: "/blogs" },
            { label: "About Us", active: false, href: "/about" },
        ]
    }
};

// Usage example in a page component:
/*
import DynamicNavigation from '../components/common/DynamicNavigation';
import { pageConfigurations } from '../components/common/pageConfigurations';

const ServicesPage = () => {
    const config = pageConfigurations.services;
    
    return (
        <DynamicNavigation
            title={config.title}
            description={config.description}
            backgroundImage={config.backgroundImage}
            navigationItems={config.navigationItems}
            logoImage="/logos/logo1.svg"
            contactEmail="info@thainnoel.com"
            contactPhone="(085) 834-9461"
            consultationButtonText="Book a Consultation"
            onNavigationClick={(item, index) => {
                // Handle navigation
                console.log('Navigating to:', item.href);
            }}
            consultationButtonOnClick={() => {
                // Handle consultation booking
                console.log('Opening consultation form');
            }}
        />
    );
};
*/