import React, { useState, useEffect } from "react";

export default function Popups() {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Delay popup appearance for dramatic effect
        const timer = setTimeout(() => {
            setVisible(true);
            // Optional: Play annoying sound here
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const movePopup = () => {
        // Move popup randomly when user tries to close it
        setPosition({
            x: Math.random() * 70,
            y: Math.random() * 70
        });
    };

    const closePopup = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div 
            className="fixed z-50 shadow-2xl rounded-lg overflow-hidden bg-black" 
            style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -50%)' }}
        >
            <div className="bg-gradient-to-r from-yellow-300 to-red-500 p-6 max-w-md text-center border-4 border-yellow-500">
                <div className="animate-pulse text-xl font-extrabold text-red-600">CONGRATULATIONS!!!</div>
                <h1 className="text-3xl font-black text-white my-2 drop-shadow-md">YOU ARE THE 1,000,000th VISITOR!</h1>
                <div className="text-4xl my-3">🎉 💰 🎁</div>
                <img className="mx-auto my-4 border-2 border-white" src="https://placehold.co/300x200/ff0000/ffffff?text=CLAIM+NOW" alt="Claim prize" />
                <p className="text-xl font-bold text-white bg-red-600 py-2 animate-bounce">CLAIM YOUR FREE PRIZE NOW!!!</p>
                <div className="flex justify-between mt-6">
                    <button 
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                        onClick={closePopup}
                    >
                        YES PLEASE!
                    </button>
                    <button 
                        className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
                        onMouseOver={movePopup}
                    >
                        No thanks
                    </button>
                </div>
            </div>
        </div>
    );
}