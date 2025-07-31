import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDonorContext } from "../context/DonorContext";
import defaultPP from '../assets/images/pp.webp';
import { useState, useEffect } from 'react';

const DonorNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { donor } = useDonorContext();
  const profileImage = donor?.profilePic || defaultPP;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "/donor/home", label: "Home" },
    { to: "/donor/events", label: "Events" },
    { to: "/donor/donate", label: "Donate" },
    { to: "/donor/dashboard", label: "Dashboard" },
  ];

  return (
    <>
      {/* === TOP NAV === */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-sm" : "bg-stone-900 bg-opacity-80 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div
            className={`transition-all duration-500 text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent drop-shadow-[0_2px_2px_white]
            ${isScrolled && !isMobile ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`}
          >
            वीरो की सेवा
          </div>

          {/* Center Nav Links - ONLY on Desktop */}
          {!isMobile && (
            <div className={`transition-all duration-500 flex items-center ${isScrolled ? "" : "bg-white text-black rounded-full px-6 py-2 space-x-8 text-base shadow-md"}`}>
              {!isScrolled && navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-medium hover:text-orange-600 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {/* Right Side (Logout & Profile) */}
          <div className={`flex items-center gap-4 transition-all duration-500 ${isScrolled && !isMobile ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition text-sm md:text-base"
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
      </nav>

      {/* === BOTTOM NAV === */}
      {(isScrolled || isMobile) && (
        <div className={`fixed bottom-0 left-0 w-full z-40 transition-all duration-500
          ${isScrolled || isMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}
        `}>
          <div className="mx-auto max-w-sm bg-gradient-to-r from-orange-500 via-white to-green-600 p-[2px] rounded-t-3xl shadow-xl">
            <div className="flex justify-between items-center bg-black text-white rounded-t-3xl px-6 py-3 text-sm">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`transition font-medium ${pathname === to ? "text-orange-500" : "hover:text-orange-400"}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonorNavbar;
