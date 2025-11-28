import React, { useState } from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import DialogueBox from '../components/DialogueBox';
import InputOverlay from '../components/InputOverlay';
import { useGame } from '../context/GameContext';

const Scene7_ClassActivity = () => {
    const { changeScene } = useGame();
    const [step, setStep] = useState(0); // 0: Intro, 1: Midterm, 2: Final, 3: Success

    const handleNext = () => {
        if (step === 0) setStep(1);
        else if (step === 3) changeScene('scene8');
    };

    const handleMidtermSubmit = (value) => {
        setStep(2);
    };

    const handleFinalSubmit = (value) => {
        setStep(3);
    };

    return (
        <Scene backgroundImage="/notebook.png" className="flex items-center justify-center">
            <PonyGuide mood={step === 3 ? 'happy' : 'neutral'} position="left" />

            {step === 0 && (
                <DialogueBox
                    speaker="포니"
                    text="학급 활동 시간이에요. 다이어리에 시험 날짜를 적어볼까요?"
                    onNext={handleNext}
                />
            )}

            {step === 1 && (
                <InputOverlay
                    question="중간 시험 날짜를 적으세요."
                    placeholder=""
                    correctAnswers={['2025년10월15일', '2025년 10월 15일', '2025.10.15']}
                    onSubmit={handleMidtermSubmit}
                >
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-md border-2 border-yellow-400 rotate-2 transform transition-transform hover:rotate-0">
                        <p className="text-lg font-bold text-gray-800 text-center mb-1">메모</p>
                        <p className="text-xl text-gray-900">중간 시험: 2025.10.15</p>
                    </div>
                </InputOverlay>
            )}

            {step === 2 && (
                <InputOverlay
                    question="기말 시험 날짜를 적으세요."
                    placeholder=""
                    correctAnswers={['2025년12월20일', '2025년 12월 20일', '2025.12.20']}
                    onSubmit={handleFinalSubmit}
                >
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-md border-2 border-yellow-400 -rotate-1 transform transition-transform hover:rotate-0">
                        <p className="text-lg font-bold text-gray-800 text-center mb-1">메모</p>
                        <p className="text-xl text-gray-900">기말 시험: 2025.12.20</p>
                    </div>
                </InputOverlay>
            )}

            {step === 3 && (
                <DialogueBox
                    speaker="포니"
                    text="완벽해요! 이제 마지막 수업인 진로 수업으로 가요."
                    onNext={handleNext}
                />
            )}
        </Scene>
    );
};

export default Scene7_ClassActivity;
