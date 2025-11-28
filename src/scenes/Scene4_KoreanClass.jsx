import React, { useState } from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import DialogueBox from '../components/DialogueBox';
import MatchingGame from '../components/MatchingGame';
import { useGame } from '../context/GameContext';

const Scene4_KoreanClass = () => {
    const { changeScene } = useGame();
    const [step, setStep] = useState(0); // 0: Intro, 1: Game, 2: Success

    const pairs = [
        { id: 1, left: "비가 오면", right: "집에 있어요" },
        { id: 2, left: "배고프면", right: "밥 먹어요" },
        { id: 3, left: "시간이 없으면", right: "빨리 가요" },
        { id: 4, left: "친구를 만나면", right: "기뻐요" },
        { id: 5, left: "학교에 가면", right: "선생님을 봐요" },
    ];

    const handleComplete = () => {
        setStep(2);
    };

    const handleNext = () => {
        if (step === 0) setStep(1);
        else if (step === 2) changeScene('scene5');
    };

    return (
        <Scene backgroundImage="/classroom.png">
            <PonyGuide mood={step === 2 ? 'happy' : 'neutral'} position="left" />

            {step === 0 && (
                <DialogueBox
                    speaker="선생님"
                    text="오늘 일기를 쓰고, -(으)면 문법 매칭 과제를 하세요."
                    onNext={handleNext}
                />
            )}

            {step === 1 && (
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <MatchingGame pairs={pairs} onComplete={handleComplete} />
                </div>
            )}

            {step === 2 && (
                <DialogueBox
                    speaker="포니"
                    text="잘했어요! 다음 수업으로 가요."
                    onNext={handleNext}
                />
            )}
        </Scene>
    );
};

export default Scene4_KoreanClass;
