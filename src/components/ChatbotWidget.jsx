// src/components/ChatbotWidget.jsx
import { useState } from 'react';
import { MessageCircle } from 'lucide-react'; // Make sure this is installed or replace with any icon

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-5 right-5 z-50 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Blank Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white border border-gray-300 rounded-2xl shadow-lg z-50 flex flex-col overflow-hidden">
          <div className="bg-orange-600 text-white p-3 font-semibold text-center">
            SevaBot – Coming Soon
          </div>

          <div className="flex-grow flex items-center justify-center text-gray-500 italic">
            Chatbot UI will appear here.
          </div>

          <button
            className="text-sm text-red-500 py-2 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
