'use client';

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

// Message type definition
interface Message {
  sender: 'user' | 'model';
  text: string;
}

// Service item type definition
interface Service {
  title: string;
}

// Props for Chatbot
interface ChatbotProps {
  services?: Service[];
}

const Chatbot = ({ services = [] }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const apiKey = "AIzaSyDWvHAsPzX_VbmXo4VrJE7TeAzv0zNiEdk";

  useEffect(() => {
    const menuOptions =
      services.length > 0
        ? services.map((service) => `- ${service.title}`).join('\n')
        : "No specific topics available at the moment.";

    setMessages([
      {
        sender: 'model',
        text: "🙋‍♀️ Hi! Welcome to Perficio. I'm your digital assistant.\n\nHow can I help you today?\nPlease type in your question below or choose a topic from the menu to begin 👇",
      },
      {
        sender: 'model',
        text: `**Our Services:**\n${menuOptions}\n\nType your question or select a topic!`,
      },
    ]);
  }, [services]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const chatHistory = [...messages, userMessage].map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const payload = {
        contents: chatHistory,
        generationConfig: {
          maxOutputTokens: 50,
          temperature: 0.7,
          topP: 0.9,
        },
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        setMessages((prev) => [
          ...prev,
          { sender: 'model', text },
          { sender: 'model', text: 'Would you like to connect with an agent for more help? Please call: +91 98765 43210' },
        ]);
      } else {
        console.error('Unexpected API response structure:', result);
        setMessages((prev) => [...prev, { sender: 'model', text: 'Sorry, I could not get a response. Please try again.' }]);
      }
    } catch (err) {
      console.error('Gemini API error:', err);
      setMessages((prev) => [...prev, { sender: 'model', text: 'Oops! Something went wrong. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-[#1D4ED8] text-white p-4 text-center font-bold text-lg rounded-t-lg">
        Perficio Chatbot
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`rounded-xl p-3 max-w-[70%] text-sm shadow-md ${
                msg.sender === 'user'
                  ? 'bg-[#E0F2FE] text-gray-900 rounded-br-none'
                  : 'bg-[#BFDBFE] text-gray-900 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 rounded-xl p-3 max-w-[70%] text-sm animate-pulse">Thinking...</div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center gap-2">
        <textarea
          className="flex-1 resize-none border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#1D4ED8] outline-none"
          placeholder="Type your message..."
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button
          onClick={handleSendMessage}
          disabled={loading || input.trim() === ''}
          className={`bg-[#B91C1C] text-white rounded-lg p-2 px-4 font-semibold transition-colors duration-200 ${
            loading || input.trim() === '' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#DC2626]'
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
