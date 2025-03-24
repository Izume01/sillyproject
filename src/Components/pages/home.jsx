import React from "react";

export default function Home() {
  return (
    <div className="container w-full min-h-screen mx-auto p-8 flex flex-col justify-center items-center">
      <div className="text-center m-6 space-y-4">
        <h1 className="text-5xl font-bold">The Impossible Button</h1>
        <p className="font-medium text-2xl  mb-12">
          Click the button to see the magic happen!
        </p>
      </div>

      <div className="relative m-6 border-2 border-dotted border-gray-500/50 w-[800px] h-[500px] rounded-lg p-3">
        {/* Longer Button */}
        <button className="absolute top-2 left-2 bg-red-500 text-sm hover:bg-red-700 px-12 py-3 border-none shadow-2xl outline-none rounded-lg text-white font-bold">
          DO NOT PRESS!
        </button>
      </div>

      <div className="text-lg font-semibold text-gray-400 text-center mt-8">
        <p>
          Number of times you clicked the button:{" "}
          <span className="font-bold">0</span>
        </p>
        <p>Button Size: 100% </p>
      </div>
    </div>
  );
}
