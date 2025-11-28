import React, { useState } from 'react';

const InputOverlay = ({ question, placeholder, onSubmit, correctAnswers = [], children }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;

        if (correctAnswers.length > 0) {
            if (correctAnswers.includes(value.trim())) {
                onSubmit(value);
            } else {
                setError(true);
                setTimeout(() => setError(false), 1000);
            }
        } else {
            // Open-ended
            onSubmit(value);
        }
    };

    return (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-pink-50 rounded-3xl p-8 max-w-xl w-full shadow-[0_0_30px_rgba(236,72,153,0.3)] border-4 border-pink-300 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />

                {children && (
                    <div className="mb-6 flex justify-center">
                        {children}
                    </div>
                )}

                <h3 className="text-2xl font-bold text-center mb-6 text-purple-900">
                    {question}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={placeholder}
                        className={`w-full p-4 text-xl border-2 rounded-2xl outline-none transition-all text-center font-medium
              ${error
                                ? 'border-red-400 bg-red-50 animate-shake text-red-600 placeholder-red-300'
                                : 'border-purple-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 text-purple-800 placeholder-purple-300'}`}
                        autoFocus
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-6 rounded-2xl text-xl transition-all transform hover:scale-[1.02] shadow-md active:scale-95"
                    >
                        제출하기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputOverlay;
