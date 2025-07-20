import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, XCircle, Clock, Calendar, MapPin, Users } from 'lucide-react';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("API_BASE_URL is :", API_BASE_URL);

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');

  // ✅ Fetch pending events from API on mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/pending-events`);
      setEvents(response.data);
    } catch (error) {
      console.error('Failed to fetch pending events:', error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.post(`${API_BASE_URL}/api/admin/${status}-event/${id}`);
      setEvents(prevEvents =>
        prevEvents.map(e => e._id === id ? { ...e, status: status.charAt(0).toUpperCase() + status.slice(1) } : e)
      );
    } catch (error) {
      console.error('Failed to update status', error);
    }
  };

  const filtered = filter === 'all' ? events : events.filter(e => e.status.toLowerCase() === filter);
  const counts = {
    pending: events.filter(e => e.status === 'Pending').length,
    approved: events.filter(e => e.status === 'Approved').length,
    rejected: events.filter(e => e.status === 'Rejected').length,
  };

  return (
    <div className="space-y-6">
      {/* stats cards same as your code */}
      {/* ... */}
      
      <div className="p-6 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-8 h-8 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No events found</p>
          </div>
        ) : (
          filtered.map(event => (
            <div key={event._id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold">{event.title}</h4>
              <p>{event.description}</p>
              <p>Category: {event.category}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Status: {event.status}</p>
              <p>Submitted By: {event.armyId?.name} ({event.armyId?.email})</p>

              {event.status === 'Pending' && (
                <div className="flex gap-3 border-t border-gray-200 pt-4">
                  <button onClick={() => updateStatus(event._id, 'approve')}
                    className="bg-green-500 text-white px-4 py-2 rounded">Approve</button>
                  <button onClick={() => updateStatus(event._id, 'reject')}
                    className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsPage;
