//src/app/components/Chatbot.js

'use client';
import { useState, useEffect } from 'react';

export default function ChatBot() {  // Make sure this says "export default"
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }
      
      setMessages(prev => [...prev, { role: 'bot', content: data.reply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: '#000000',
          color: 'white',
          border: 'none',
          fontSize: '64px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        🐘
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '350px',
          height: '500px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          {/* Header */}
          <div style={{
            padding: '15px',
            borderBottom: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0 }}>AI Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '10px'
          }}>
            {messages.length === 0 && (
              <div style={{ color: '#666', textAlign: 'center', marginTop: '20px' }}>
                🐘 Hi! Ask me anything!
              </div>
            )}
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{
                  marginBottom: '10px',
                  padding: '8px',
                  borderRadius: '8px',
                  background: msg.role === 'user' ? '#007bff' : '#f1f1f1',
                  color: msg.role === 'user' ? 'white' : 'black',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div style={{ padding: '8px', background: '#f1f1f1', borderRadius: '8px' }}>
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ padding: '10px', borderTop: '1px solid #eee' }}>
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                style={{
                  flex: 1,
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginRight: '8px'
                }}
                placeholder="Type your message..."
              />
              <button 
                onClick={sendMessage} 
                disabled={loading}
                style={{
                  padding: '8px 12px',
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}