// src/components/EventCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div
      className="
        relative w-[90%] max-w-lg md:max-w-md lg:max-w-lg 
        overflow-hidden rounded-2xl 
        shadow-lg group transition-all duration-500
        hover:shadow-orange-400
      "
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-60 object-cover group-hover:blur-sm transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 text-white flex flex-col justify-center items-center p-4 transition-all duration-500">
        <h3 className="text-xl font-bold mb-2 text-center">{event.title}</h3>
        <p className="text-sm mb-4 text-center">{event.description}</p>
        <Link to={`/donor/donate?eventId=${event.id}&eventTitle=${encodeURIComponent(event.title)}`}>
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full font-semibold transition">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
