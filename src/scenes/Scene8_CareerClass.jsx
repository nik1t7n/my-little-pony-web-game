import React, { useState } from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import DialogueBox from '../components/DialogueBox';
import InputOverlay from '../components/InputOverlay';
import { useGame } from '../context/GameContext';

const Scene8_CareerClass = () => {
    const { changeScene } = useGame();
    const [step, setStep] = useState(0); // 0: Intro, 1: Hobby, 2: Profession, 3: End

    const handleNext = () => {
        if (step === 0) setStep(1);
        else if (step === 3) {
            changeScene('scene9'); // Go to Success Scene
        }
    };

    const handleHobbySubmit = (value) => {
        setStep(2);
    };

    const handleProfessionSubmit = (value) => {
        setStep(3);
    };

    return (
        <Scene backgroundImage="/classroom.png">
            <PonyGuide mood={step === 3 ? 'happy' : 'neutral'} position="left" />

            {step === 0 && (
                <DialogueBox
                    speaker="선생님"
                    text="진로 수업입니다. 요즘 무슨 취미를 시작했나요?"
                    onNext={handleNext}
                />
            )}

            {step === 1 && (
                <InputOverlay
                    question="무슨 취미 시작했어요? (-기 시작하다 문법을 사용하세요)"
                    placeholder=""
                    onSubmit={handleHobbySubmit}
                />
            )}

            {step === 2 && (
                <InputOverlay
                    question="이 직업은 무엇일까요?"
                    placeholder=""
                    correctAnswers={['소방관']}
                    onSubmit={handleProfessionSubmit}
                >
                    <div className="bg-red-50 p-6 rounded-full shadow-lg border-4 border-red-200 text-center inline-block">
                        <p className="text-5xl mb-2">🚒 🧯 👨‍🚒</p>
                        <p className="text-lg font-bold text-red-800">불을 꺼요</p>
                    </div>
                </InputOverlay>
            )}

            {step === 3 && (
                <DialogueBox
                    speaker="포니"
                    text="모든 수업이 끝났어요! 오늘 하루 정말 수고했어요."
                    onNext={handleNext}
                />
            )}
        </Scene>
    );
};

export default Scene8_CareerClass;
