import React, { useState } from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import DialogueBox from '../components/DialogueBox';
import InputOverlay from '../components/InputOverlay';
import { useGame } from '../context/GameContext';

const Scene5_GeographyClass = () => {
    const { changeScene } = useGame();
    const [step, setStep] = useState(0); // 0: Intro, 1: Task 1, 2: Task 2, 3: Success

    const handleNext = () => {
        if (step === 0) setStep(1);
        else if (step === 3) changeScene('scene6');
    };

    const handleTask1Submit = (value) => {
        setStep(2);
    };

    const handleTask2Submit = (value) => {
        setStep(3);
    };

    return (
        <Scene backgroundImage="/classroom.png">
            <PonyGuide mood={step === 3 ? 'happy' : 'neutral'} position="left" />

            {step === 0 && (
                <DialogueBox
                    speaker="선생님"
                    text="지리학 시간이에요. 칠판을 보고 나라 이름을 맞혀보세요."
                    onNext={handleNext}
                />
            )}

            {step === 1 && (
                <InputOverlay
                    question="이 나라는 어디일까요?"
                    placeholder=""
                    correctAnswers={['네덜란드']}
                    onSubmit={handleTask1Submit}
                >
                    <div className="bg-white p-2 rounded-xl shadow-sm border-2 border-blue-100">
                        <img
                            src="/netherlands-items.png"
                            alt="Netherlands Items"
                            className="w-full max-w-xs h-auto rounded-lg"
                        />
                    </div>
                </InputOverlay>
            )}

            {step === 2 && (
                <InputOverlay
                    question="어느 나라에 가고 싶어요?"
                    placeholder=""
                    onSubmit={handleTask2Submit}
                />
            )}

            {step === 3 && (
                <DialogueBox
                    speaker="포니"
                    text="와, 멋진 곳이네요! 점심 먹으러 식당으로 가요."
                    onNext={handleNext}
                />
            )}
        </Scene>
    );
};

export default Scene5_GeographyClass;
