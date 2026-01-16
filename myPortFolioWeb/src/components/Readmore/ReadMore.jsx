import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ReadMore = ({ text, limit = 150 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Agar text short hai
    if (text.length <= limit) {
        return <p className="text-gray-400 text-sm mb-4">{text}</p>;
    }

    const displayedText = isExpanded
        ? text
        : text.substring(0, limit) + '...';

    return (
        <p className="text-gray-400 text-xs mb-6">
            {displayedText}

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 text-[#009EC5] font-semibold hover:text-white transition duration-200 ml-2"
            >
                <span>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </span>

                {isExpanded ? (
                    <FaChevronUp size={14} />
                ) : (
                    <FaChevronDown size={14} />
                )}
            </button>
        </p>
    );
};

export default ReadMore;
