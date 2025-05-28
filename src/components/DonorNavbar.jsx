// src/components/DonorNavbar.jsx
import { Link } from 'react-router-dom';

const DonorNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-70 shadow-md">
      <div className="flex space-x-4">
        <Link to="/donor/home" className="text-blue-700 font-semibold hover:underline">Home</Link>
        <Link to="/donor/events" className="text-blue-700 font-semibold hover:underline">Events</Link>
        <Link to="/donor/donate" className="text-blue-700 font-semibold hover:underline">Donate</Link>
        <Link to="/donor/dashboard" className="text-blue-700 font-semibold hover:underline">Dashboard</Link>
        <Link to="/donor/profile" className="text-blue-700 font-semibold hover:underline">Profile</Link>
      </div>
      <Link to="/login" className="text-red-600 font-semibold hover:underline">Logout</Link>
    </nav>
  );
};

export default DonorNavbar;
