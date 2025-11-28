import React from 'react';

const DialogueBox = ({ text, speaker, onNext, showNextArrow = true }) => {
    return (
        <div className="absolute bottom-4 left-4 right-4 md:left-20 md:right-20 bg-white/90 border-4 border-pink-300 rounded-xl p-6 shadow-lg z-50">
            {speaker && (
                <div className="absolute -top-10 left-6 bg-pink-400 text-white px-4 py-2 rounded-t-lg font-bold text-xl border-x-4 border-t-4 border-pink-300">
                    {speaker}
                </div>
            )}
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                {text}
            </p>
            {showNextArrow && onNext && (
                <button
                    onClick={onNext}
                    className="absolute bottom-4 right-4 hover:scale-110 transition-transform duration-200"
                >
                    <div className="animate-bounce bg-pink-100 p-2 rounded-full shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>
            )}
        </div>
    );
};

export default DialogueBox;
