import React, { useState, useEffect } from 'react';

export const UseScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Check if window is defined (so we're on the browser)
        if (typeof window !== 'undefined') {
            const updatePosition = () => {
                setScrollPosition(window.scrollY);
            };

            window.addEventListener('scroll', updatePosition);
            updatePosition(); // Initialize state with current scroll position
            return () => window.removeEventListener('scroll', updatePosition);
        }
    }, []);

    return scrollPosition;
};