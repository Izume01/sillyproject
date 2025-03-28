import React, { useState } from "react";
import Popups from "../component/popup";
import Bdos from "../component/bdos";

export default function Home() {
  const data = [
    "Click. Nothing.",
    "Nope.",
    "Still nothing.",
    "Uh-huh.",
    "You did it. So?",
    "Again? Really?",
    "A faint hum...",
    "Keep going...",
    "Almost there... (to what?)",
    "That was... anticlimactic.",
    "Not this time.",
  ];

  const [position, setPosition] = useState({ top: 250, left: 340 });
  const [_isHovering, setIsHovering] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("Click Me");
  const [buttonSize, setButtonSize] = useState(100);

  function handleRandomPosition() {
    const containerWidth = 800;
    const containerHeight = 500;
    const buttonWidth = 120;
    const buttonHeight = 50;

    const maxTop = containerHeight - buttonHeight;
    const maxLeft = containerWidth - buttonWidth;

    const top = Math.floor(Math.random() * maxTop);
    const left = Math.floor(Math.random() * maxLeft);

    setPosition({ top, left });
  }

  function handleRandom() {
    handleRandomPosition();
    const random = Math.floor(Math.random() * data.length);
    return data[random];
  }

  function handleMouseEnter() {
    setIsHovering(true);
    const message = handleRandom();
    setCurrentMessage(message);
    handleRandomPosition();
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function handleClick() {
    setClickCount((prevCount) => prevCount + 1);
    setButtonSize((prevSize) => prevSize / 1.05);
    handleRandomPosition();
  }

  return (
    <div className="container w-full min-h-screen mx-auto p-8 flex flex-col justify-center items-center">
      {buttonSize > 6 ? (
        <div>
        <div className="text-center m-6 space-y-4">
          <h1 className="text-5xl font-bold">The Impossible Button</h1>
          <p className="font-medium text-2xl mb-12">
            Click the button to see the magic happen!
          </p>
        </div>

        <div className="relative m-6 border-2 overflow-hidden border-dotted border-gray-500/50 w-[800px] h-[500px] rounded-lg p-3">
          {/* Moving Button */}
          <button
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              overflow: "visible", // Allow text to overflow outside the button
              whiteSpace: "nowrap", // Prevent text from wrapping
              transition: "top 0.2s ease, left 0.2s ease", // Smooth movement
              scale: `${buttonSize}%`,
              transformOrigin: "center",
            }}
            className="absolute bg-red-500 text-sm hover:bg-red-700 px-12 py-3 border-none shadow-2xl outline-none rounded-lg text-white font-bold transition-all duration-300"
          >
            {currentMessage}
          </button>
        </div>

        <div className="text-lg font-semibold text-gray-400 text-center mt-8">
          <p>
            Number of times you clicked the button:{" "}
            <span className="font-bold">{clickCount}</span>
          </p>
          <p>Button Size: {buttonSize.toFixed(2)}%</p>
        </div>
      </div>
      ) : (
        <div className="text-5xl font-bold text-center">
            "You did it!"
        </div>

      )}


      {clickCount > 6 && <Popups />}
      {clickCount > 12 &&  <Popups />}
      {clickCount > 24 && 
        <Bdos/>
      }
    </div>
  );
}
