// src/components/ArmyNavbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import defaultPP from '../assets/images/pp.webp'; // fallback profile pic
import { useState } from 'react';

const ArmyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/army/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-200 bg-opacity-80 backdrop-blur-md shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-green-600 via-white to-orange-500 bg-clip-text text-transparent animate-gradient">
          वीरो की सेवा
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/army/dashboard" className="text-black font-medium hover:text-white hover:bg-black px-3 py-1 rounded transition">Home</Link>
          <Link to="/army/submit-event" className="text-black font-medium hover:text-white hover:bg-black px-3 py-1 rounded transition">Submit Event</Link>
          <Link to="/army/my-events" className="text-black font-medium hover:text-white hover:bg-black px-3 py-1 rounded transition">My Events</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="hidden md:inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>

          <div
            style={{ backgroundImage: `url(${defaultPP})` }}
            className="w-10 h-10 bg-cover bg-center rounded-full border-2 border-gray-300"
          />

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-black text-2xl">☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-3">
          <Link to="/army/dashboard" onClick={() => setMenuOpen(false)} className="text-black font-medium">Home</Link>
          <Link to="/army/submit-event" onClick={() => setMenuOpen(false)} className="text-black font-medium">Submit Event</Link>
          <Link to="/army/my-events" onClick={() => setMenuOpen(false)} className="text-black font-medium">My Events</Link>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default ArmyNavbar;
