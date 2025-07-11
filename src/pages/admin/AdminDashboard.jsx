import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pendingEvents as initialEvents } from '../../data/pendingEvents';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) navigate('/admin/login');
  }, [navigate]);

  const handleApprove = (id) => {
    setEvents(prev => prev.filter(event => event.id !== id));
    // Later: send API call to approve
  };

  const handleDecline = (id) => {
    setEvents(prev => prev.filter(event => event.id !== id));
    // Later: send API call to decline
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">₹1,25,000</p>
          <p className="text-gray-600">Total Donations</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">120</p>
          <p className="text-gray-600">Total Donors</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">{events.length}</p>
          <p className="text-gray-600">Pending Events</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">₹4,500</p>
          <p className="text-gray-600">Avg Donation</p>
        </div>
      </div>

      {/* Event Approvals */}
      <div className="mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Pending Event Approvals</h2>
        {events.length === 0 ? (
          <p className="text-gray-500 italic">No pending events 🎉</p>
        ) : (
          events.map(event => (
            <div key={event.id} className="border p-4 mb-3 rounded bg-gray-50">
              <h3 className="font-semibold text-lg">{event.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500 mb-2">
                Date: {event.date} | Category: {event.category}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleApprove(event.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDecline(event.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Decline
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
