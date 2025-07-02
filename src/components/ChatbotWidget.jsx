import { useState } from "react";
import { MessageCircle } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! How can we help you today?" },
  ]);

  const options = {
    main: ["Login Issue", "Payment", "Profile", "Other"],
    Login: ["Password Error", "Username Error", "Forgot Password"],
    Payment: ["UPI", "Card", "Wallet"],
    Other: ["Connect to support", "Email us at nishiill@gmail.com"],
  };

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { role: "user", text: option }]);

    switch (option) {
      case "Login Issue":
        setMessages((prev) => [
          ...prev,
          { role: "user", text: option },
          { role: "bot", text: "Please select your issue:" },
          ...options.Login.map((item) => ({ role: "button", text: item })),
        ]);
        break;

      case "Payment":
        setMessages((prev) => [
          ...prev,
          { role: "user", text: option },
          { role: "bot", text: "Choose a payment method:" },
          ...options.Payment.map((item) => ({ role: "button", text: item })),
        ]);
        break;

      case "Other":
        setMessages((prev) => [
          ...prev,
          { role: "user", text: option },
          ...options.Other.map((text) => ({ role: "bot", text })),
        ]);
        break;

      case "Profile":
        setMessages((prev) => [
          ...prev,
          { role: "user", text: option },
          { role: "bot", text: "You can edit your profile from the dashboard settings." },
        ]);
        break;

      default:
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "Thanks for the info! Let us know if you need more help." },
        ]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-5 right-5 z-50 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white border border-gray-300 rounded-2xl shadow-lg z-50 flex flex-col overflow-hidden">
          <div className="bg-orange-600 text-white p-3 font-semibold text-center">
            SevaBot
          </div>

          {/* Message Area */}
          <div className="flex-grow p-2 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.role === "user"
                    ? "text-right text-gray-700"
                    : "text-left text-black"
                }`}
              >
                {msg.role === "button" ? (
                  <button
                    onClick={() => handleOptionClick(msg.text)}
                    className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-full hover:bg-orange-500 hover:text-white transition text-sm"
                  >
                    {msg.text}
                  </button>
                ) : (
                  <div className="inline-block bg-gray-100 px-3 py-2 rounded-md max-w-[75%]">
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reset & Close */}
          <div className="p-2 flex justify-between border-t text-sm">
            <button
              onClick={() =>
                setMessages([
                  { role: "bot", text: "Hi! How can we help you today?" },
                  ...options.main.map((text) => ({ role: "button", text })),
                ])
              }
              className="text-blue-500 hover:underline"
            >
              Reset
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
