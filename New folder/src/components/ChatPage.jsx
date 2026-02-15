 import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  // Get the person name from Request page, default to "Alex Rivera" if empty
  const [partnerName, setPartnerName] = useState(localStorage.getItem('activeChatPartner') || "Alex Rivera");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: partnerName, text: `Hi! Thanks for approving the request. Ready to swap?`, time: "10:30 AM", isMe: false },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      sender: "Me",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-sans flex items-center justify-center p-6">
      <div className="max-w-5xl w-full h-[80vh] bg-white rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex border border-white">
        
        {/* --- SIDEBAR --- */}
        <div className="w-1/3 bg-gray-50/50 border-r border-gray-100 flex flex-col">
          <div className="p-8"><Link to="/" className="text-xl font-black tracking-tighter text-[#E75A4E]">SKILLSWAP</Link></div>
          <div className="px-4">
            <div className="p-4 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white font-bold">{partnerName.charAt(0)}</div>
              <div>
                <p className="font-bold text-gray-800 text-sm">{partnerName}</p>
                <p className="text-[10px] text-green-500 font-black uppercase tracking-widest">Active Now</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- CHAT AREA --- */}
        <div className="flex-1 flex flex-col">
          <div className="px-10 py-6 border-b border-gray-50 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
               <h3 className="font-black text-gray-700">{partnerName}</h3>
            </div>
            <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-[#E75A4E]">Close Chat</Link>
          </div>

          <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-[#FDFDFD]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[80%]">
                  <div className={`px-6 py-4 rounded-4xl text-sm font-medium ${
                    msg.isMe ? 'bg-gray-900 text-white rounded-br-none' : 'bg-white border border-gray-100 text-gray-600 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                  <p className={`text-[9px] font-bold text-gray-300 mt-2 uppercase ${msg.isMe ? 'text-right' : 'text-left'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-8 bg-white border-t border-gray-50">
            <div className="relative flex items-center bg-gray-50 rounded-4xl px-2 border border-gray-100">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Message ${partnerName}...`}
                className="w-full bg-transparent border-none py-5 px-6 outline-none text-sm font-medium text-gray-700"
              />
              <button type="submit" className="bg-gray-900 text-white p-4 rounded-3xl hover:bg-[#E75A4E] transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;