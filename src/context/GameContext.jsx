import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [currentScene, setCurrentScene] = useState('scene1');
  const [money, setMoney] = useState(12000); // Initial money: 12,000 KRW
  const [inventory, setInventory] = useState([]);
  const [flags, setFlags] = useState({}); // For tracking game progress/choices

  const changeScene = (sceneId) => {
    setCurrentScene(sceneId);
  };

  const updateMoney = (amount) => {
    setMoney((prev) => prev + amount);
  };

  const setFlag = (key, value) => {
    setFlags((prev) => ({ ...prev, [key]: value }));
  };

  const resetGame = () => {
    setMoney(12000);
    setInventory([]);
    setFlags({});
    setCurrentScene('scene1');
  };

  return (
    <GameContext.Provider
      value={{
        currentScene,
        changeScene,
        money,
        updateMoney,
        inventory,
        setInventory,
        flags,
        setFlag,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
