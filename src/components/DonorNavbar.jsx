import { Link, useNavigate } from 'react-router-dom';
import { useDonorContext } from "../context/DonorContext";
import defaultPP from '../assets/images/pp.webp';
import { useState, useEffect } from 'react';

const DonorNavbar = () => {
  const navigate = useNavigate();
  const { donor } = useDonorContext();
  const profileImage = donor?.profilePic || defaultPP;

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/1 " : "bg-stone-900 bg-opacity-80 backdrop-blur-sm shadow-md"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo - fades and slides on scroll */}
        <div
          className={`transition-all duration-500 text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent drop-shadow-[0_2px_2px_white]
          ${isScrolled ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`}
        >
          वीरो की सेवा
        </div>

        {/* Nav Links – main bar with tricolor outline on scroll */}
        <div className={`transition-all duration-500 flex items-center ${isScrolled ? "bg-gradient-to-r from-orange-500 via-white to-green-600 p-[2px] rounded-full" : ""}`}>
          <div className={`flex items-center transition-all duration-500
            ${isScrolled
              ? "bg-white rounded-full px-4 py-1 space-x-4 text-sm shadow-md"
              : "bg-white rounded-full px-6 py-2 space-x-8 text-base shadow-md"}`}
          >
            {[
              { to: "/donor/home", label: "Home" },
              { to: "/donor/events", label: "Events" },
              { to: "/donor/donate", label: "Donate" },
              { to: "/donor/dashboard", label: "Dashboard" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-800 font-medium hover:text-orange-600 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (Logout & Profile) - fades and slides on scroll */}
        <div className={`flex items-center gap-4 transition-all duration-500 ${isScrolled ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>

          <Link to="/donor/profile">
            <div
              style={{ backgroundImage: `url(${profileImage})` }}
              className="w-9 h-9 bg-cover bg-center rounded-full border-2 border-gray-300 hover:scale-105 transition"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-3">
          {['/donor/home', '/donor/events', '/donor/donate', '/donor/dashboard'].map((route, idx) => (
            <Link key={route} to={route} onClick={() => setMenuOpen(false)} className="text-black font-medium">
              {['Home', 'Events', 'Donate', 'Dashboard'][idx]}
            </Link>
          ))}
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
