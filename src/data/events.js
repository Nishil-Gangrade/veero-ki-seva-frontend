// src/data/events.js

import birthdayImg from '../assets/images/birthday.png';
import marriageImg from '../assets/images/marrige.png';
import hospitalImg from '../assets/images/hospital.png';
import schoolImg from '../assets/images/school.png';

export const eventData = [
  // 🎂 Birthday Events
  {
    id: 1,
    category: 'Birthday',
    title: 'Sonu Kumar',
    description: 'Needs help for birthday celebration. Wants a small cake & books.',
    image: birthdayImg
  },
  {
    id: 2,
    category: 'Birthday',
    title: 'Ravi Singh',
    description: 'Wants to celebrate his son’s 1st birthday in an orphanage.',
    image: birthdayImg
  },

  // 💍 Marriage Events
  {
    id: 3,
    category: 'Marriage',
    title: 'Rani Devi',
    description: 'Needs help with marriage ceremony arrangements.',
    image: marriageImg
  },
  {
    id: 4,
    category: 'Marriage',
    title: 'Deepak & Neha',
    description: 'Couple seeking help for a low-budget wedding ceremony.',
    image: marriageImg
  },

  // 🏥 Hospital Events
  {
    id: 5,
    category: 'Hospital',
    title: 'Anita Kumari',
    description: 'Needs urgent medical assistance for surgery.',
    image: hospitalImg
  },
  {
    id: 6,
    category: 'Hospital',
    title: 'Mohit Sharma',
    description: 'Undergoing cancer treatment, needs help with medication cost.',
    image: hospitalImg
  },

  // 🏫 School Events
  {
    id: 7,
    category: 'School',
    title: 'Seema Kumari',
    description: 'Needs help with school fee and books for the year.',
    image: schoolImg
  },
  {
    id: 8,
    category: 'School',
    title: 'Govind Patel',
    description: 'Wants to continue education, but family can’t afford uniform/books.',
    image: schoolImg
  }
];
