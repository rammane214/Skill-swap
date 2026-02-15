 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, you would send formData to your backend here
    alert("Account Created Successfully! Welcome to SkillSwap.");
    navigate("/"); // Redirecting to Home Page
  };

  const handleGoogleSignup = () => {
    alert("Connecting to Google Account Picker...");
    // Simulate successful google auth
    setTimeout(() => {
        navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-162.5 relative z-10 border border-white">
        
        {/* --- LEFT SIDE: THE VIBE --- */}
        <div className="md:w-1/2 bg-teal-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>

          <div className="relative z-10">
            <Link to="/" className="text-2xl font-black tracking-tighter uppercase">SKILLSWAP</Link>
          </div>

          <div className="relative z-10 space-y-6">
            <h1 className="text-5xl font-black leading-tight">Start Your <br/> Skill Journey.</h1>
            <p className="text-teal-100 text-lg italic font-medium">"Knowledge increases by sharing but not by saving."</p>
          </div>

          {/* Attractive Achievement Badge */}
          <div className="relative z-10 flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">🚀</div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">New Member Perk</p>
              <p className="text-xs font-bold uppercase tracking-widest">Get 3 Free Swap Requests</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE FORM --- */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-400 font-medium">Join our global community of learners.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium text-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium text-sm"
                placeholder="Create a strong password"
              />
            </div>

            <p className="text-[10px] text-gray-400 leading-relaxed">
              By signing up, you agree to our <span className="text-teal-600 font-bold">Terms of Service</span> and <span className="text-teal-600 font-bold">Privacy Policy</span>.
            </p>

            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-teal-600 transition-all shadow-xl shadow-gray-100 active:scale-95"
            >
              Create My Account
            </button>
          </form>

          {/* Social Signups */}
          <div className="mt-6">
            <div className="relative flex py-4 items-center">
              <div className="grow border-t border-gray-100"></div>
              <span className="shrink mx-4 text-gray-300 text-[10px] font-black uppercase">Or sign up with</span>
              <div className="grow border-t border-gray-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleGoogleSignup}
                type="button" 
                className="flex items-center justify-center gap-2 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all font-bold text-xs"
              >
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4" alt="Google"/> Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all font-bold text-xs">
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-4" alt="Github"/> Github
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm font-bold text-gray-400">
            Already have an account? <Link to="/login" className="text-teal-600 hover:underline">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;