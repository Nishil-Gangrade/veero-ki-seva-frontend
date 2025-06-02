// src/components/DonorNavbar.jsx
import { Link } from 'react-router-dom';
import pp from '/src/assets/images/pp.webp';

const DonorNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-200 bg-opacity-80 backdrop-blur-md shadow-md px-8 py-4 flex items-center justify-between">
      {/* Main nav links (60% width) */}
      <div className="flex gap-14 flex-grow max-w-3xl">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent animate-gradient">
  वीरो की सेवा 
</div>

        <Link to="/donor/home" className="text-black font-medium hover:underline">Home</Link>
        <Link to="/donor/events" className="text-black font-medium hover:underline">Events</Link>
        <Link to="/donor/donate" className="text-black font-medium hover:underline">Donate</Link>
        <Link to="/donor/dashboard" className="text-black font-medium hover:underline">Dashboard</Link>
      </div>

      {/* Right section: Logout + Profile Pic */}
      <div className="flex items-center gap-9">
        <Link to="/login" className="text-red-600 font-semibold hover:underline">Logout</Link>
        <Link to="/donor/profile">
          <div 
            style={{ backgroundImage: `url(${pp})` }}
            className="w-10 h-10 bg-cover bg-center rounded-full border-2 border-gray-300 hover:scale-105 transition"
          />
        </Link>
      </div>
    </nav>
  );
};

export default DonorNavbar;
