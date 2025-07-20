import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArmyNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/army/dashboard' },
    { name: 'Submit Event', path: '/army/submit-event' },
    { name: 'My Events', path: '/army/my-events' },
  ];

  return (
    <nav className="bg-gradient-to-r from-orange-100 via-white to-green-100 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
          वीरो की सेवा
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="hover:text-orange-600 font-medium">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="px-4 pb-4 md:hidden space-y-2">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="block hover:text-orange-600">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default ArmyNavbar;
