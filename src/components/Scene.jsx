import React from 'react';

const Scene = ({ backgroundImage, children, className = '' }) => {
    return (
        <div
            className={`w-full h-screen bg-cover bg-center relative overflow-hidden ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/10" /> {/* Optional overlay for better text contrast */}
            {children}
        </div>
    );
};

export default Scene;
