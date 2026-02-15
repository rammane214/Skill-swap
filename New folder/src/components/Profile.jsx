 import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const [user, setUser] = useState({
    name: "Ram Mane",
    location: "Sangli, India",
    email: "ram.mane@example.com",
    portfolio: "portfolio.me/rammane", // Now fully editable
    bio: "Passionate Full Stack Developer looking to trade React expertise for high-level UI/UX design principles.",
    skillsOffered: "React, Node.js, Tailwind",
    skillsWanted: "Figma , UI Design, UX Research",
    profileImg: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setUser(prev => ({ ...prev, profileImg: URL.createObjectURL(file) }));
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans text-gray-900 flex items-center justify-center py-16 px-4">
      
      <div className="max-w-6xl w-full bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-white">
        
        {/* --- LEFT SIDEBAR: DARK IDENTITY --- */}
        <div className="md:w-87.5 bg-gray-900 p-12 text-white flex flex-col items-center">
          <div className="relative group cursor-pointer" onClick={() => fileInputRef.current.click()}>
            <div className="w-44 h-44 rounded-full border-[6px] border-gray-800 overflow-hidden bg-gray-800 flex items-center justify-center">
              {user.profileImg ? (
                <img src={user.profileImg} className="w-full h-full object-cover" alt="Profile" />
              ) : (
                <span className="text-5xl opacity-20">👤</span>
              )}
            </div>
            <div className="absolute bottom-2 right-2 bg-[#E75A4E] w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-900">
              <span className="text-xs">✏️</span>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
          </div>

          <div className="mt-8 text-center w-full">
            {isEditing ? (
              <input 
                name="name" 
                value={user.name} 
                onChange={handleInputChange} 
                className="bg-gray-800 text-white text-2xl font-black text-center w-full rounded-lg py-1 outline-none border-b-2 border-[#E75A4E]"
              />
            ) : (
              <h2 className="text-3xl font-black tracking-tight">{user.name}</h2>
            )}
            <p className="text-[#E75A4E] text-[10px] font-black uppercase tracking-[0.3em] mt-2">Elite Member</p>
          </div>

          {/* --- UPDATED CONTACT SECTION (EDITABLE PORTFOLIO) --- */}
          <div className="w-full mt-12 space-y-6 pt-10 border-t border-gray-800">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-bold uppercase text-[10px]">Location</span>
              {isEditing ? (
                <input 
                  name="location"
                  value={user.location}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-gray-700 text-xs text-gray-200 py-1 outline-none text-right"
                />
              ) : (
                <span className="font-medium text-gray-200">{user.location}</span>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 font-bold uppercase text-[10px]">Contact Email</span>
                {isEditing ? (
                  <input 
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="bg-transparent border-b border-gray-700 text-xs text-teal-400 py-1 outline-none"
                  />
                ) : (
                  <span className="font-medium text-teal-400 text-xs truncate">{user.email}</span>
                )}
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 font-bold uppercase text-[10px]">Portfolio</span>
                {isEditing ? (
                  <input 
                    name="portfolio"
                    value={user.portfolio}
                    onChange={handleInputChange}
                    className="bg-transparent border-b border-gray-700 text-xs text-gray-400 py-1 outline-none italic"
                  />
                ) : (
                  <span className="font-medium text-gray-400 text-xs italic truncate">{user.portfolio}</span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10 w-full">
             <Link to="/" className="text-center block w-full py-4 border border-gray-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:border-white transition">
               Sign Out
             </Link>
          </div>
        </div>

        {/* --- RIGHT SIDE: CLEAN CONTENT --- */}
        <div className="flex-1 p-12 md:p-20 bg-white">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-2">Personal Profile</h3>
              <h1 className="text-4xl font-black tracking-tighter text-gray-900">Your Journey</h1>
            </div>
            <Link to="/" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-gray-100 transition border border-gray-100">🏠</Link>
          </div>

          <div className="space-y-14">
            <section className="space-y-4">
              <div className="flex items-center gap-4">
                 <span className="h-px w-8 bg-[#E75A4E]"></span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">About</span>
              </div>
              {isEditing ? (
                <textarea 
                  name="bio" 
                  value={user.bio} 
                  onChange={handleInputChange} 
                  className="w-full p-6 bg-gray-50 rounded-3xl border-none outline-none text-gray-600 italic" 
                  rows="3"
                />
              ) : (
                <p className="text-2xl font-medium text-gray-800 leading-snug italic">"{user.bio}"</p>
              )}
            </section>

            <div className="grid md:grid-cols-2 gap-12 pt-4">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-600">Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {user.skillsOffered.split(',').map((s, index) => (
                    <span key={index} className="px-5 py-2 bg-gray-50 text-gray-900 rounded-full font-bold text-[11px] border border-gray-100">{s.trim()}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#E75A4E]">Interests</h4>
                <div className="flex flex-wrap gap-3">
                  {user.skillsWanted.split(',').map((s, index) => (
                    <span key={index} className="px-5 py-2 bg-[#E75A4E]/5 text-[#E75A4E] rounded-full font-bold text-[11px] border border-[#E75A4E]/10">{s.trim()}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`w-full py-6 rounded-4xl font-black text-xs uppercase tracking-[0.3em] transition-all ${
                  isEditing ? 'bg-teal-500 text-white shadow-2xl shadow-teal-100' : 'bg-gray-900 text-white hover:bg-[#E75A4E]'
                }`}
              >
                {isEditing ? "Save Profile Data" : "Modify Profile"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;