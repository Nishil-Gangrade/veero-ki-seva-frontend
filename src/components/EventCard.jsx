import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  if (!event) return null;

  return (
    <div
      className="
        w-[290px] h-[300px] bg-[#f1f1f3] p-6 
        rounded-xl shadow-md cursor-pointer relative 
        font-sans group flex flex-col justify-between 
      "
    >
      <div>
        <h3 className="text-2xl font-bold group-hover:text-green-700">
          {event.title}
        </h3>

        <p className="text-m text-gray-700 mt-5">
          {event.description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-s text-gray-500">
          {new Date(event.date).toLocaleDateString()}
        </div>

        <Link
          to={`/donor/donate?eventId=${event._id}&eventTitle=${encodeURIComponent(event.title)}`}
          className="
            bg-orange-600 text-white text-xs font-semibold
            px-3 py-2 rounded-tl-xl rounded-br-xl
            transition-all duration-200
            group-hover:bg-green-700 group-hover:scale-110
          "
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
