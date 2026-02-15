 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 flex flex-col relative overflow-hidden bg-[#FDFDFD]">
      
      {/* --- BACKGROUND GRADIENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-[#E75A4E]/25 blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-400/30 blur-[140px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* --- STICKY NAVBAR --- */}
        <nav className="sticky top-0 z-100 w-full border-b border-white/20 bg-white/70 backdrop-blur-2xl transition-all duration-300">
          <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto w-full flex-wrap">
            
            {/* Logo */}
            <div className="text-xl font-black tracking-tighter text-[#E75A4E] drop-shadow-sm">SKILLSWAP</div>
            
            {/* Hamburger Button (Visible only on Mobile) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-[#E75A4E] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>

            {/* Nav Links */}
            {/* Logic: Hidden on mobile unless isMenuOpen is true. Always flex on medium screens. */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto gap-6 md:gap-8 text-sm font-bold text-gray-800 mt-4 md:mt-0 border-t border-gray-100 md:border-none pt-4 md:pt-0`}>
              <Link to="/" className="hover:text-[#E75A4E] transition-all w-full md:w-auto text-center">Home</Link>
              <Link to="/browse" className="hover:text-[#E75A4E] transition-all w-full md:w-auto text-center">Browse</Link>
              <Link to="/request" className="hover:text-[#E75A4E] transition-all w-full md:w-auto text-center">Request</Link>
              
              {isLoggedIn ? (
                <>
                  <Link to="/chat" className="hover:text-[#E75A4E] transition-all w-full md:w-auto text-center">Chat</Link>
                  <Link to="/profile" className="hover:text-[#E75A4E] transition-all w-full md:w-auto text-center">Profile</Link>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-600 transition-all md:border-l md:border-gray-300/50 md:pl-6 w-full md:w-auto text-center py-2 md:py-0"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="bg-[#E75A4E] text-white px-6 py-2 rounded-lg font-bold hover:bg-black transition shadow-lg w-full md:w-auto text-center">
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>

        {/* --- REST OF THE CONTENT --- */}
        <header className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-6">
          <div className="grid md:grid-cols-2 items-start mb-6 gap-10">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-gray-900">
                Exchange Skills <span className="text-transparent bg-clip-text" style={{ WebkitTextStroke: "2px #111827" }}>Virtually!</span>
              </h1>
              <p className="text-base text-gray-700 max-w-md leading-relaxed italic font-semibold">
                We believe in the power of collaborative learning and the transformative potential of skill exchange.
              </p>
              
              <Link to="/browse">
                <button className="bg-[#E75A4E] text-white px-8 py-3 rounded-lg font-bold shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95">
                  Explore Skills
                </button>
              </Link>
            </div>
            
            <div className="hidden md:flex flex-col items-end justify-end h-full">
               <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md p-2 rounded-full shadow-lg border border-white/50">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-900">90K <span className="text-gray-600 font-bold text-xs uppercase tracking-tighter">Members</span></p>
               </div>
            </div>
          </div>

          <div className="w-full h-64 md:h-96 rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/80">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Collaborative learning" />
          </div>
        </header>

        {/* Footer */}
        <footer className="py-10 bg-white/20 backdrop-blur-3xl text-center border-t border-white/30 mt-auto">
          <div className="text-2xl font-black tracking-tighter text-[#E75A4E] mb-2">SKILLSWAP</div>
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em]">© 2026 SkillSwap Virtual Platform</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;