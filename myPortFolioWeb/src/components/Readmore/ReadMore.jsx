import React, { useState, useEffect } from 'react';

const ReadMore = ({ text, limit = 150 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // New state to track if it's a mobile screen

    useEffect(() => {
        // Function to check screen width (Tailwind's 'md' break is 768px)
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check and set up event listener
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Cleanup function
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 1. If it's a desktop view (or not a mobile screen), show the full text without ReadMore functionality.
    if (!isMobile) {
        return <p className="text-gray-400 text-base mb-6">{text}</p>;
    }
    
    // 2. Mobile View Logic
    
    // If text is already short, show full text.
    if (text.length <= limit) {
        return <p className="text-gray-400 text-base mb-6">{text}</p>;
    }

    // Determine the text to display on mobile
    const displayedText = isExpanded ? text : text.substring(0, limit) + '...';

    // Tailwind classes for the button
    const buttonClasses = "text-[#009EC5] font-semibold hover:text-white transition duration-200 ml-1";

    return (
        <p className="text-gray-400 text-base mb-6">
            {displayedText}
            
            {/* The Read More / Read Less Button, only visible on mobile (as per the if condition above) */}
            <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className={buttonClasses}
            >
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </p>
    );
};

export default ReadMore;