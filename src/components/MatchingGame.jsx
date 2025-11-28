import React, { useState, useEffect } from 'react';

const MatchingGame = ({ pairs, onComplete }) => {
    const [leftItems, setLeftItems] = useState([]);
    const [rightItems, setRightItems] = useState([]);
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [matched, setMatched] = useState({}); // { leftId: rightId }
    const [wrongPair, setWrongPair] = useState(null);

    useEffect(() => {
        // Shuffle items
        const left = pairs.map(p => ({ id: p.id, text: p.left }));
        const right = pairs.map(p => ({ id: p.id, text: p.right })).sort(() => Math.random() - 0.5);
        setLeftItems(left);
        setRightItems(right);
    }, [pairs]);

    const handleLeftClick = (id) => {
        if (matched[id]) return;
        setSelectedLeft(id);
        setWrongPair(null);
    };

    const handleRightClick = (id) => {
        if (!selectedLeft) return;

        if (selectedLeft === id) {
            // Correct match
            const newMatched = { ...matched, [selectedLeft]: id };
            setMatched(newMatched);
            setSelectedLeft(null);

            if (Object.keys(newMatched).length === pairs.length) {
                setTimeout(onComplete, 1000);
            }
        } else {
            // Wrong match
            setWrongPair({ left: selectedLeft, right: id });
            setTimeout(() => {
                setWrongPair(null);
                setSelectedLeft(null);
            }, 500);
        }
    };

    return (
        <div className="flex justify-between w-full max-w-4xl mx-auto p-8 bg-white/90 rounded-xl shadow-xl">
            <div className="space-y-4 w-5/12">
                {leftItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => handleLeftClick(item.id)}
                        className={`w-full p-4 text-lg font-bold rounded-lg border-2 transition-all
              ${matched[item.id] ? 'bg-green-200 border-green-500 text-green-800 cursor-default' :
                                selectedLeft === item.id ? 'bg-blue-200 border-blue-500 text-blue-800' :
                                    wrongPair?.left === item.id ? 'bg-red-200 border-red-500 animate-shake' :
                                        'bg-white border-gray-300 hover:bg-gray-50'}`}
                    >
                        {item.text}
                    </button>
                ))}
            </div>

            <div className="space-y-4 w-5/12">
                {rightItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => handleRightClick(item.id)}
                        className={`w-full p-4 text-lg font-bold rounded-lg border-2 transition-all
              ${Object.values(matched).includes(item.id) ? 'bg-green-200 border-green-500 text-green-800 cursor-default' :
                                wrongPair?.right === item.id ? 'bg-red-200 border-red-500 animate-shake' :
                                    'bg-white border-gray-300 hover:bg-gray-50'}`}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MatchingGame;
