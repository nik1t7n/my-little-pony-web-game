import React, { useState } from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import DialogueBox from '../components/DialogueBox';
import ChoiceOverlay from '../components/ChoiceOverlay';
import { useGame } from '../context/GameContext';

const Scene2_Hallway = () => {
    const { changeScene } = useGame();
    const [step, setStep] = useState(0); // 0: Intro, 1: Choice, 2: Success
    const [guideMood, setGuideMood] = useState('talking');

    const handleNext = () => {
        if (step === 0) {
            setStep(1);
        } else if (step === 2) {
            changeScene('scene3');
        }
    };

    const handleChoice = (index) => {
        // Correct answer is index 0 (based on game description: "안녕하세요, 저는 알리시아예요...")
        // Actually, looking at the description, the correct one is usually the most polite/grammatically correct.
        // Option 1: 안녕하세요, 저는 알리시아예요. 저는 새로운 학생이에요. 행정실을 찾는데 도와줄 수 있나요? (Correct)

        if (index === 0) {
            setStep(2);
            setGuideMood('happy');
        } else {
            // Incorrect - maybe shake effect or just stay? Description says "Nothing happens" or guide corrects.
            // Let's just do nothing for now as per "Nothing happens" instruction, or maybe a subtle shake.
            alert("다시 시도해보세요! (Try again!)");
        }
    };

    const choices = [
        "안녕하세요, 저는 알리시아예요. 저는 새로운 학생이에요. 행정실을 찾는데 도와줄 수 있나요?",
        "안녕하세요, 저는 알리시아예요. 저 새로운 학생이에요. 행정실 찾기 도와줘요?",
        "안녕하세요, 알리시아예요 저는. 새 학생 저는요. 행정실 도와줄 수 있어요?",
        "안녕하세여, 저는 알리시아예요. 저는 새로운 학생은. 행정실을 찾는 거 도와줘요 수 있어요?"
    ];

    return (
        <Scene backgroundImage="/school-hallway.png">
            {/* Student Pony (Target) */}
            <img
                src="/neutral-student-pony.png"
                alt="Student Pony"
                className="absolute bottom-10 right-10 md:right-32 w-48 md:w-64 z-30"
            />

            <PonyGuide mood={guideMood} position="left" />

            {step === 0 && (
                <DialogueBox
                    speaker="포니"
                    text="봐, 이 포니가 우리 행정실 찾는 거 도와줄까?"
                    onNext={handleNext}
                />
            )}

            {step === 1 && (
                <ChoiceOverlay
                    choices={choices}
                    onSelect={handleChoice}
                />
            )}

            {step === 2 && (
                <DialogueBox
                    speaker="학생 포니"
                    text="네, 도와줄게요. 저 따라와요!"
                    onNext={handleNext}
                />
            )}
        </Scene>
    );
};

export default Scene2_Hallway;
