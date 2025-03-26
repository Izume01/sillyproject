import React, { useState, useEffect } from "react";

export default function Bdos() {
  const [visibility, setVisibility] = useState(true);
  const [progress, setProgress] = useState(6);


  useEffect(() => {
    const interval = setInterval(() => {
        setProgress((prevProgress) => {
            if (prevProgress <= 0) {
                clearInterval(interval); 
                setVisibility(false);  
                return 0;
            }
            return prevProgress - 1;  
        });
    }, 1000);
    
    // Initialize countdown from 6
    setProgress(6);

    return () => clearInterval(interval);
}, []);

return (
    <>
        {visibility && (
            <div className="flex flex-col p-24 h-screen fixed z-50 shadow-2xl rounded-lg overflow-hidden w-full bg-[#0079D8] font-bdos text-white">
                <h2 className="text-8xl font-bold mb-8">:(</h2>

                <div className="mb-10">
                    <p className="text-2xl font-medium max-w-2xl leading-normal">
                        Your PC ran into a problem and needs to restart. We're just
                        collecting some error info, and then we'll restart for you.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-medium">20% complete</h2>
                </div>

                <div className="flex gap-10 items-start">
                    <div className="w-32 h-32 border-2 border-white flex items-center justify-center">
                        <svg
                            viewBox="0 0 100 100"
                            className="w-full h-full p-2"
                            fill="white"
                        >
                            {/* QR Code pattern - simplified representation */}
                            <rect
                                x="10"
                                y="10"
                                width="80"
                                height="80"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            />
                            <rect x="20" y="20" width="20" height="20" />
                            <rect x="60" y="20" width="20" height="20" />
                            <rect x="20" y="60" width="20" height="20" />
                            <rect x="50" y="50" width="20" height="20" />
                            <rect x="25" y="25" width="10" height="10" fill="#0079D8" />
                            <rect x="65" y="25" width="10" height="10" fill="#0079D8" />
                            <rect x="25" y="65" width="10" height="10" fill="#0079D8" />
                            <path d="M10,40 h30 v10 h-30 z" />
                            <path d="M50,30 h10 v30 h-10 z" />
                            <path d="M70,50 h20 v10 h-20 z" />
                        </svg>
                    </div>

                    <div className="space-y-2 flex-1">
                        <h2 className="text-lg">
                            If you'd like to know more, you can search online later for this
                            error: <span className="font-bold">CRITICAL_PROCESS_DIED</span>
                        </h2>
                        <h2 className="text-lg">
                            <span className="font-bold">What failed: </span>{" "}
                            <span>bdos.sys</span>
                        </h2>
                        <h2 className="text-lg">
                            <span className="font-bold">Stop code: </span>{" "}
                            <span>0x000000EF</span>
                        </h2>

                        <div className="bg-white/10 px-4 py-3 rounded">
                        <div className="text-lg font-semibold">
                            Restart in {progress} seconds
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        )}
    </>
);
}
