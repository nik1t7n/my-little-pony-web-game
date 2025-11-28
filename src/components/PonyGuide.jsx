import React from 'react';

const PonyGuide = ({ mood = 'neutral', position = 'left' }) => {
    // Map moods to assets
    const assets = {
        neutral: '/neutral-regular-pony.png',
        happy: '/smiling-regular-pony.png',
        talking: '/talking-regular-pony.png',
    };

    const src = assets[mood] || assets.neutral;

    // Position classes
    // Source image looks LEFT.
    // If on Left: Mirror to look RIGHT (into scene).
    // If on Right: No mirror to look LEFT (into scene).
    const positionClasses = position === 'left'
        ? 'bottom-0 left-0 md:left-10 transform -scale-x-100'
        : 'bottom-0 right-0 md:right-10';

    return (
        <img
            src={src}
            alt={`Pony Guide ${mood}`}
            className={`absolute w-48 md:w-64 lg:w-80 z-40 transition-all duration-300 ${positionClasses}`}
        />
    );
};

export default PonyGuide;
