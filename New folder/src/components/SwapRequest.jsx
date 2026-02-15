 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SwapRequest = () => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState({
    skillRequested: "",
    skillOffered: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your swap request has been sent! You'll be notified when they accept.");
    navigate("/browse");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-[-5%] left-[-5%] w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-6xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-150 relative z-10 border border-white">
        
        {/* --- LEFT SIDE: THE INFO --- */}
        <div className="md:w-5/12 bg-gray-900 p-12 text-white flex flex-col justify-between relative">
          <div className="relative z-10">
            <Link to="/" className="text-xl font-black tracking-tighter text-[#E75A4E]">SKILLSWAP</Link>
          </div>

          <div className="relative z-10 space-y-8">
            <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-teal-500/30">
              New Request
            </div>
            <h1 className="text-5xl font-black leading-tight">Propose a <br/> Skill Swap.</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              You're requesting a swap with <span className="text-white font-bold">Alex Rivera</span>. Be clear about what you can teach in return!
            </p>
          </div>

          {/* Non-clickable Benefit Card */}
          <div className="relative z-10 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center text-xl">🤝</div>
                <p className="font-bold text-sm">Swap Etiquette</p>
             </div>
             <p className="text-xs text-gray-500 leading-relaxed">
               Requests with personalized messages are <span className="text-teal-400 font-bold">80% more likely</span> to be accepted.
             </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE ACTION FORM --- */}
        <div className="md:w-7/12 p-12 flex flex-col justify-center bg-white">
          <div className="mb-10 flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Request Details</h2>
              <p className="text-gray-400 font-medium">Define your exchange terms below.</p>
            </div>
            <Link to="/browse" className="text-xs font-bold text-gray-300 hover:text-[#E75A4E] transition">Cancel</Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 italic">Skill You Want</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    className="w-full p-4 bg-teal-50/30 border border-teal-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-bold text-sm text-teal-800"
                    placeholder="e.g. React Development"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">🎯</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 italic">Skill You'll Teach</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    className="w-full p-4 bg-orange-50/30 border border-orange-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E75A4E] transition-all font-bold text-sm text-orange-800"
                    placeholder="e.g. UI Design"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">✨</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 italic">Personalized Message</label>
              <textarea 
                rows="4"
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all font-medium text-sm"
                placeholder="Hi! I saw you wanted to learn UI Design. I have 3 years experience and would love to trade that for some React help..."
              ></textarea>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-gray-900 text-white px-12 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#E75A4E] transition-all shadow-xl shadow-gray-200 active:scale-95"
              >
                Send Request
              </button>
              <p className="text-[10px] text-gray-300 font-bold uppercase tracking-tighter">
                Typically responds in <span className="text-gray-500">24 hours</span>
              </p>
            </div>
          </form>

          {/* Bottom Security Note */}
          <div className="mt-12 pt-8 border-t border-gray-50 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">🔒</div>
             <p className="text-[10px] text-gray-400 font-medium">Your contact details are only shared once the swap is accepted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapRequest;