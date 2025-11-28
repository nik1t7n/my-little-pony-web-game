import React from 'react';
import Scene from '../components/Scene';
import { useGame } from '../context/GameContext';

const Scene3_Timetable = () => {
    const { changeScene } = useGame();

    const handleNext = () => {
        changeScene('scene4');
    };

    const subjects = [
        "한국어",
        "지리학",
        "식당",
        "학급 활동 시간",
        "진로 수업"
    ];

    return (
        <Scene backgroundImage="/notebook.png" className="flex items-center justify-center">
            <div className="bg-white/90 p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl w-full transform rotate-1 border-2 border-gray-300">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 border-b-4 border-gray-800 pb-4">
                    개인 시간표
                </h2>

                <ul className="space-y-4 mb-8">
                    {subjects.map((subject, index) => (
                        <li key={index} className="text-2xl font-medium text-gray-700 border-b border-gray-200 pb-2">
                            {index + 1}. {subject}
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center">
                    <button
                        onClick={handleNext}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-transform transform hover:scale-105 shadow-lg"
                    >
                        다음
                    </button>
                </div>
            </div>
        </Scene>
    );
};

export default Scene3_Timetable;
