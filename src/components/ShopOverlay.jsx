import React from 'react';

const ShopOverlay = ({ items, balance, onBuy, title }) => {
    return (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-4xl w-full shadow-2xl border-4 border-orange-300">
                <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4">
                    <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
                    <div className="text-2xl font-bold text-green-600 bg-green-100 px-4 py-2 rounded-lg">
                        {balance.toLocaleString()}원
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item) => {
                        const canAfford = balance >= item.price;
                        return (
                            <button
                                key={item.id}
                                onClick={() => canAfford && onBuy(item)}
                                disabled={!canAfford}
                                className={`p-6 rounded-xl border-4 transition-all transform hover:scale-105
                  ${canAfford
                                        ? 'bg-white border-orange-200 hover:border-orange-500 hover:shadow-lg'
                                        : 'bg-gray-100 border-gray-300 opacity-60 cursor-not-allowed'}`}
                            >
                                <div className="text-6xl mb-4">{item.icon}</div>
                                <div className="text-2xl font-bold mb-2 text-gray-800">{item.name}</div>
                                <div className="text-xl font-medium text-gray-600">{item.price.toLocaleString()}원</div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ShopOverlay;
