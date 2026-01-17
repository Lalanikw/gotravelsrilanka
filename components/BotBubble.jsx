// components/BotBubble.js
"use client";

import React, { useState } from 'react';
import Ask from './ask';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

 const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {isOpen ? (
        <div className="fixed bottom-4 right-4 w-full max-w-md h-2/3 bg-gray-50 shadow-lg rounded-lg z-50">
          <h2 className="text-lg font-semibold p-1"></h2>
          <button onClick={handleToggle} 
                  className="absolute top-4 right-2 bg-gray-300 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
          <Ask />
        </div>
      ) : (
        <button
          onClick={handleToggle}
          className="fixed bottom-4 right-6 rounded-full p-2 bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-800 transition-colors"
          >
            <p className='font-semibold text-xl m-1'> Ask Mala</p>
             <p className="text-6xl">&#128024;</p>
        </button>
      )}
    </div>
  );
}

