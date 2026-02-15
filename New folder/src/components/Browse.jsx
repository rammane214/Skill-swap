 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate = useNavigate();
  const [skills] = useState([
    { id: 1, name: "Alex Rivera", teach: "React JS", want: "UI Design", icon: "⚛️", color: "from-blue-500/10 to-teal-500/10" },
    { id: 2, name: "Sarah Chen", teach: "Figma", want: "Python", icon: "🎨", color: "from-purple-500/10 to-pink-500/10" },
    { id: 3, name: "Marcus Thorne", teach: "Node.js", want: "Marketing", icon: "🌐", color: "from-green-500/10 to-emerald-500/10" },
    { id: 4, name: "Elena Gilbert", teach: "SEO", want: "Spanish", icon: "📈", color: "from-orange-500/10 to-yellow-500/10" },
    { id: 5, name: "David Kim", teach: "Data Science", want: "Trading", icon: "📊", color: "from-indigo-500/10 to-cyan-500/10" },
    { id: 6, name: "Sophia Lopez", teach: "Motion Design", want: "React", icon: "🎬", color: "from-rose-500/10 to-orange-500/10" },
  ]);

  const handleStartChat = (userName) => {
    localStorage.setItem('activeChatPartner', userName);
    navigate('/chat');
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900 selection:bg-[#E75A4E] selection:text-white">
      
      {/* --- CLEAN NAV --- */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-gray-900 italic">
            SKILL<span className="text-[#E75A4E]">SWAP</span>
          </div>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#E75A4E] transition-all shadow-xl active:scale-95"
          >
            Return Home
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <span className="px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            Discovery Mode
          </span>
          <h1 className="text-7xl font-black tracking-tighter leading-[0.9]">
            Find your <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-[#E75A4E]">perfect match.</span>
          </h1>
          <p className="max-w-xl text-gray-500 font-medium text-lg italic">
            The simplest way to trade what you know for what you want to learn.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-16 relative">
          <div className="absolute inset-0 bg-linear-to-r from-teal-400 to-[#E75A4E] blur-2xl opacity-10 rounded-full"></div>
          <input 
            type="text" 
            placeholder="Search by skill name..." 
            className="relative w-full p-6 bg-white rounded-full border border-gray-100 shadow-2xl shadow-gray-200 outline-none focus:ring-2 focus:ring-[#E75A4E]/20 transition-all font-medium text-center"
          />
        </div>
      </header>

      {/* --- GRID --- */}
      <main className="max-w-7xl mx-auto px-6 pb-40 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-[3rem] p-1 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              
              <div className={`h-full w-full bg-linear-to-br ${item.color} rounded-[2.8rem] p-8`}>
                
                {/* Card Top */}
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <button 
                    onClick={() => handleStartChat(item.name)}
                    className="p-3 bg-white rounded-full hover:bg-gray-900 hover:text-white transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </button>
                </div>

                {/* Name */}
                <div className="mt-8">
                  <h3 className="text-2xl font-black tracking-tight text-gray-900">{item.name}</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">Global Member</p>
                </div>

                {/* Skill Details */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/50">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Teaching</p>
                    <p className="font-bold text-sm text-teal-600">{item.teach}</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/50">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Learning</p>
                    <p className="font-bold text-sm text-[#E75A4E]">{item.want}</p>
                  </div>
                </div>

                {/* Main Action */}
                <Link 
                  to="/request" 
                  className="mt-8 flex items-center justify-center gap-2 w-full py-5 bg-gray-900 text-white rounded-4xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#E75A4E] transition-all"
                >
                  Send Proposal
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default Browse;