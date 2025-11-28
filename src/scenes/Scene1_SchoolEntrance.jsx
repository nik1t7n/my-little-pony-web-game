import React, { useState } from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import DialogueBox from '../components/DialogueBox';
import { useGame } from '../context/GameContext';

const Scene1_SchoolEntrance = () => {
    const { changeScene } = useGame();
    const [dialogue, setDialogue] = useState("우리 학교에 들어가서 행정실에서 개인 시간표 받아야 해요");
    const [ponyMood, setPonyMood] = useState('talking');

    const handleBuildingClick = (building) => {
        if (building === 'school') {
            setPonyMood('happy');
            setDialogue("잘했어요! 학교로 들어갑시다.");
            setTimeout(() => {
                changeScene('scene2');
            }, 2000);
        } else {
            setPonyMood('neutral');
            setDialogue("아니에요, 거기는 학교가 아니에요. 다시 찾아보세요.");
        }
    };

    return (
        <Scene backgroundImage="/street-view.png">
            {/* Clickable Zones */}
            <div className="absolute inset-0 flex">
                {/* Restaurant (Left) */}
                <div
                    onClick={() => handleBuildingClick('restaurant')}
                    className="w-1/3 h-full cursor-pointer hover:bg-white/10 transition-colors"
                    title="식당"
                />

                {/* School (Middle) */}
                <div
                    onClick={() => handleBuildingClick('school')}
                    className="w-1/3 h-full cursor-pointer hover:bg-white/10 transition-colors"
                    title="학교"
                />

                {/* Hospital (Right) */}
                <div
                    onClick={() => handleBuildingClick('hospital')}
                    className="w-1/3 h-full cursor-pointer hover:bg-white/10 transition-colors"
                    title="병원"
                />
            </div>

            <PonyGuide mood={ponyMood} position="left" />

            <DialogueBox
                speaker="포니"
                text={dialogue}
                showNextArrow={false}
            />
        </Scene>
    );
};

export default Scene1_SchoolEntrance;
