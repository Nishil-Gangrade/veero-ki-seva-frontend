// src/pages/EventsPage.jsx
import React, { useState } from 'react';
import bgImage from '../../assets/images/frontpage1.jpg';
import DonorNavbar from '../../components/DonorNavbar';
import EventCategorySelector from '../../components/EventCategorySelector';
import EventCard from '../../components/EventCard';
import { eventData } from '../../data/events';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Birthday');

  const filteredEvents = eventData.filter((e) => e.category === selectedCategory);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="backdrop-blur-sm min-h-screen bg-black bg-opacity-50 overflow-y-auto">
        <DonorNavbar />
        <div className="min-h-screen px-4">
          <h1 className="text-3xl font-bold text-center text-white py-6">Support a Cause</h1>
          <EventCategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} highlight={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
