// src/components/EventCategorySelector.jsx
import React from 'react';
import birthday from '../assets/images/birthday.png';
import marriage from '../assets/images/marrige.png';
import hospital from '../assets/images/hospital.png';
import school from '../assets/images/school.png';

const categories = [
  { name: 'Birthday', image: birthday },
  { name: 'Marriage', image: marriage },
  { name: 'Hospital', image: hospital },
  { name: 'School', image: school },
];

const EventCategorySelector = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => setSelectedCategory(cat.name)}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div
            className={`
              p-1 rounded-full transition-transform duration-300
              ${selectedCategory === cat.name ? 'bg-orange-500' : 'bg-transparent'}
            `}
          >
            <div
              className={`
                w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                rounded-full flex items-center justify-center
                border-4 transition-all duration-300
                ${selectedCategory === cat.name
                  ? 'border-4 border-white'
                  : 'border-2 border-gray-300 group-hover:border-orange-300'}
                bg-green-700
              `}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-5/6 h-5/6 object-cover rounded-full"
              />
            </div>
          </div>
          <p className="text-white mt-2 text-sm md:text-base">{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default EventCategorySelector;
