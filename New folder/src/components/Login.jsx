 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    navigate("/");
  };

  // Google Account Picker Simulation
  const handleGoogleLogin = () => {
    // In a real app, this triggers the Firebase or Google OAuth popup
    alert("Opening Google Account Selector...");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-96 relative z-10 border border-white">
        
        {/* --- LEFT SIDE: THE VIBE --- */}
        <div className="md:w-1/2 bg-[#E75A4E] p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>

          <div className="relative z-10">
            <Link to="/" className="text-2xl font-black tracking-tighter">SKILLSWAP</Link>
          </div>

          <div className="relative z-10 space-y-6">
            <h1 className="text-5xl font-black leading-tight">Master New Skills <br/> with the World.</h1>
            <p className="text-orange-100 text-lg italic font-medium">"The best way to learn a new skill is to teach one."</p>
          </div>

          <div className="relative z-10 flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#E75A4E] bg-gray-200"></div>
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest">Join 90k+ Swappers</p>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE FORM --- */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-400 font-medium">Enter your details to continue your journey.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E75A4E] transition-all font-medium"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E75A4E] transition-all font-medium"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-[#E75A4E]" /> Remember me
              </label>
              <a href="#" className="text-[#E75A4E] hover:underline">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#E75A4E] transition-all shadow-xl shadow-gray-200 active:scale-95"
            >
              Log In
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-8">
            <div className="relative flex py-5 items-center">
              <div className="grow border-t border-gray-100"></div>
              <span className="shrink mx-4 text-gray-300 text-[10px] font-black uppercase">Or continue with</span>
              <div className="grow border-t border-gray-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Google Button with Functionality */}
              <button 
                onClick={handleGoogleLogin}
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

          {/* Redirect changed to /register as requested */}
          <p className="mt-10 text-center text-sm font-bold text-gray-400">
            Don't have an account? <Link to="/register" className="text-[#E75A4E] hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;