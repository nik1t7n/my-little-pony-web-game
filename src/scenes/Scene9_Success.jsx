import React from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import { useGame } from '../context/GameContext';

const Scene9_Success = () => {
    const { resetGame } = useGame();

    const handleRestart = () => {
        resetGame();
    };

    return (
        <Scene backgroundImage="/school-hallway.png">
            {/* Confetti Effect (Simple CSS implementation or just visual flair) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-10 left-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-5 left-3/4 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-500"></div>
            </div>

            {/* Happy Pony Guide (Left) */}
            <PonyGuide mood="happy" position="left" />

            {/* Happy Student Pony (Right) */}
            <img
                src="/happy-student-pony.png"
                alt="Happy Student Pony"
                className="absolute bottom-10 right-10 md:right-32 w-48 md:w-64 z-30"
            />

            {/* Success Message Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
                <div className="bg-white/90 p-8 rounded-3xl shadow-[0_0_50px_rgba(236,72,153,0.5)] border-4 border-pink-400 text-center transform scale-110 pointer-events-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6 animate-pulse">
                        축하합니다!
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-700 font-bold mb-8">
                        게임을 완료했습니다.
                    </p>

                    <button
                        onClick={handleRestart}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform transition hover:scale-105 active:scale-95"
                    >
                        다시 시작하기
                    </button>
                </div>
            </div>
        </Scene>
    );
};

export default Scene9_Success;
