// src/components/DonorNavbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useDonorContext } from "../context/DonorContext";
import defaultPP from '../assets/images/pp.webp'; // Adjust path based on your folder structure
import { useState } from 'react';

const DonorNavbar = () => {
  const navigate = useNavigate();
  const { donor } = useDonorContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  const profileImage = donor?.profilePic || defaultPP;

  return (
    <nav className="sticky top-0 z-50 bg-slate-200 bg-opacity-80 backdrop-blur-md shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo & Title */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent animate-gradient">
          वीरो की सेवा
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/donor/home" className="text-black font-medium hover:underline">Home</Link>
          <Link to="/donor/events" className="text-black font-medium hover:underline">Events</Link>
          <Link to="/donor/donate" className="text-black font-medium hover:underline">Donate</Link>
          <Link to="/donor/dashboard" className="text-black font-medium hover:underline">Dashboard</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="hidden md:inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>

          <Link to="/donor/profile">
            <div
              style={{ backgroundImage: `url(${profileImage})` }}
              className="w-10 h-10 bg-cover bg-center rounded-full border-2 border-gray-300 hover:scale-105 transition"
            />
          </Link>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-3">
          <Link to="/donor/home" onClick={() => setMenuOpen(false)} className="text-black font-medium">Home</Link>
          <Link to="/donor/events" onClick={() => setMenuOpen(false)} className="text-black font-medium">Events</Link>
          <Link to="/donor/donate" onClick={() => setMenuOpen(false)} className="text-black font-medium">Donate</Link>
          <Link to="/donor/dashboard" onClick={() => setMenuOpen(false)} className="text-black font-medium">Dashboard</Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default DonorNavbar;
