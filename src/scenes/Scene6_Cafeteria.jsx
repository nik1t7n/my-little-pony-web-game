import React, { useState } from 'react';
import Scene from '../components/Scene';
import PonyGuide from '../components/PonyGuide';
import DialogueBox from '../components/DialogueBox';
import ShopOverlay from '../components/ShopOverlay';
import { useGame } from '../context/GameContext';

const Scene6_Cafeteria = () => {
    const { changeScene, money, updateMoney, inventory, setInventory } = useGame();
    const [step, setStep] = useState(0); // 0: Intro, 1: Food, 2: Drink, 3: Success

    const foods = [
        { id: 'bibimbap', name: '비빔밥', price: 3000, icon: '🍚' },
        { id: 'bulgogi', name: '불고기', price: 6000, icon: '🥩' },
        { id: 'kimchi', name: '김치찌개', price: 4000, icon: '🥘' },
    ];

    const drinks = [
        { id: 'juice', name: '주스', price: 2000, icon: '🧃' },
        { id: 'water', name: '물', price: 1500, icon: '💧' },
        { id: 'coffee', name: '커피', price: 3000, icon: '☕' },
    ];

    const handleNext = () => {
        if (step === 0) setStep(1);
        else if (step === 3) changeScene('scene7');
    };

    const handleBuyFood = (item) => {
        updateMoney(-item.price);
        setInventory([...inventory, item]);
        setStep(2);
    };

    const handleBuyDrink = (item) => {
        updateMoney(-item.price);
        setInventory([...inventory, item]);
        setStep(3);
    };

    return (
        <Scene backgroundImage="/school-hallway.png"> {/* Placeholder for Cafeteria */}
            <PonyGuide mood={step === 3 ? 'happy' : 'neutral'} position="left" />

            {step === 0 && (
                <DialogueBox
                    speaker="포니 (Pony)"
                    text="배가 고파요! 맛있는 점심을 먹어요."
                    onNext={handleNext}
                />
            )}

            {step === 1 && (
                <ShopOverlay
                    title="메뉴"
                    items={foods}
                    balance={money}
                    onBuy={handleBuyFood}
                />
            )}

            {step === 2 && (
                <ShopOverlay
                    title="음료"
                    items={drinks}
                    balance={money}
                    onBuy={handleBuyDrink}
                />
            )}

            {step === 3 && (
                <DialogueBox
                    speaker="포니 (Pony)"
                    text="잘 먹었습니다! 이제 교실로 돌아가요."
                    onNext={handleNext}
                />
            )}
        </Scene>
    );
};

export default Scene6_Cafeteria;
