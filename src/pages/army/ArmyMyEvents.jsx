import React, { useEffect, useState } from 'react';
import { getMyArmyEvents } from '../../api/armyApi';
import ArmyNavbar from '../../components/ArmyNavbar';

const ArmyMyEvents = () => {
  const [events, setEvents] = useState([]);
  const armyId = '68710908c8b332fc3f6f9c36'; // TODO: Replace with logged-in army user id

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getMyArmyEvents(armyId);
      setEvents(data);
    } catch (err) {
      console.error('Failed to fetch events', err);
    }
  };

  return (
    <div>
      <ArmyNavbar />
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">My Submitted Events</h2>
        {events.length === 0 ? (
          <p>No events submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event._id} className="border p-4 rounded shadow">
                <h3 className="text-lg font-semibold">{event.title} ({event.category})</h3>
                <p>{event.description}</p>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Status: <span className={`font-bold ${event.status === 'Approved' ? 'text-green-600' : event.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>{event.status}</span></p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ArmyMyEvents;
