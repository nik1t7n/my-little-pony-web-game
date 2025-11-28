import React from 'react';

const ChoiceOverlay = ({ choices, onSelect }) => {
    return (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-2xl border-4 border-blue-300">
                <h3 className="text-2xl font-bold text-center mb-6 text-blue-600">
                    어떻게 말할까요?
                </h3>
                <div className="space-y-3">
                    {choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => onSelect(index)}
                            className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:bg-blue-50 hover:border-blue-400 transition-all text-lg font-medium text-gray-700"
                        >
                            {index + 1}. {choice}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChoiceOverlay;
