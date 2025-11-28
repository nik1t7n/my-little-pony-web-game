import React from 'react';
import { useGame } from '../context/GameContext';
import Scene1_SchoolEntrance from '../scenes/Scene1_SchoolEntrance';
import Scene2_Hallway from '../scenes/Scene2_Hallway';
import Scene3_Timetable from '../scenes/Scene3_Timetable';
import Scene4_KoreanClass from '../scenes/Scene4_KoreanClass';
import Scene5_GeographyClass from '../scenes/Scene5_GeographyClass';
import Scene6_Cafeteria from '../scenes/Scene6_Cafeteria';
import Scene7_ClassActivity from '../scenes/Scene7_ClassActivity';
import Scene8_CareerClass from '../scenes/Scene8_CareerClass';
import Scene9_Success from '../scenes/Scene9_Success';

const GameContainer = () => {
    const { currentScene } = useGame();

    const renderScene = () => {
        switch (currentScene) {
            case 'scene1':
                return <Scene1_SchoolEntrance />;
            case 'scene2':
                return <Scene2_Hallway />;
            case 'scene3':
                return <Scene3_Timetable />;
            case 'scene4':
                return <Scene4_KoreanClass />;
            case 'scene5':
                return <Scene5_GeographyClass />;
            case 'scene6':
                return <Scene6_Cafeteria />;
            case 'scene7':
                return <Scene7_ClassActivity />;
            case 'scene8':
                return <Scene8_CareerClass />;
            case 'scene9':
                return <Scene9_Success />;
            default:
                return <Scene1_SchoolEntrance />;
        }
    };

    return (
        <div className="w-full h-screen bg-gray-900">
            {renderScene()}
        </div>
    );
};

export default GameContainer;
