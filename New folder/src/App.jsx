import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import SwapRequest from './components/SwapRequest';
import Chat from './components/ChatPage';
import ChatPage from './components/ChatPage';
import Browse from './components/Browse';

function App() {
  return (
    <HashRouter>
      {/* Navbar is removed from here so it won't show on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request" element={<SwapRequest />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-3xl font-black">404 - Page Not Found</h2></div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;