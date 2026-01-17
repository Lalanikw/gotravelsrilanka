
"use client";

import React, { FormEvent, useState, ChangeEvent, useRef, useEffect } from 'react';

export default function Ask() {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedConversation = [
      ...conversation,
      { role: 'user', content: question }
    ];

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversation: updatedConversation }),
      });

      const data = await response.json();

      setConversation([
        ...updatedConversation, {
          role: 'assistant', content: data.answer}
      ]);
      setQuestion(''); //clear the input after submitting
    } catch (error) {
      console.error('Error:', error);
      setConversation([
        ...updatedConversation,
        { role: 'assistant', content: 'An error occured while processing your request.' }
      ]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    <div className="h-full flex flex-col bg-blue-50 ">
      <h1 className="text-lg font-semibold mb-4 bg-blue-200 p-8">Hi, I am Mala. How can I help you today? </h1>
      <div
    ref={chatContainerRef}
    className='flex-grow overflow-y-auto p-4 space-y-4'>

    {conversation.map((item, index) => (
      <div key={index} className={`p-3 rounded ${item.role === 'user' ? 'bg-green-50' : 'bg-blue-50' }`}>
          <p className={`font-bold ${item.role === 'user' ? '' : 'text-4xl'}`}>
              {item.role === 'user' ? 'You:' : '🐘'}
          </p>
          <p>{item.content}</p>
      </div>
    ))}
</div>
     
      <form onSubmit={handleSubmit} className="mt-auto relative flex p-1 mb-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about Sri Lanka"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit" 
          className=" p-2 bg-green-700 text-white rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Ask'}
        </button>
      </form>
    </div>
  );
}