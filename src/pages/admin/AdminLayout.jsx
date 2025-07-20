import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, BarChart3, LogOut, Shield, Users, Heart } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/events', label: 'Events', icon: Calendar },
    { path: '/admin/stats', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-900 to-blue-800 shadow-xl z-50 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-yellow-400 p-2 rounded-lg"><Shield className="w-6 h-6 text-blue-900" /></div>
          <div>
            <h1 className="text-white font-bold text-lg">Veero Admin</h1>
            <p className="text-blue-200 text-sm">Admin Panel</p>
          </div>
        </div>
        <nav className="space-y-2">
          {navItems.map(item => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  active
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <button
          onClick={handleLogout}
          className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 w-auto text-blue-200 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </aside>
      <div className="ml-64">
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {location.pathname === '/admin/events' ? 'Event Management' : 'Analytics Dashboard'}
            </h2>
            <div className="flex items-center gap-4 text-gray-600">
              <Users className="w-4 h-4" /><span>Admin Portal</span>
              <Heart className="w-4 h-4 text-red-500" /><span>Serving Our Heroes</span>
            </div>
          </div>
        </header>
        <main className="p-8"><Outlet /></main>
      </div>
    </div>
  );
};

export default AdminLayout;
