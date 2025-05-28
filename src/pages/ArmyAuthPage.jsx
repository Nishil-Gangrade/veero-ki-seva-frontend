// src/pages/ArmyAuthPage.jsx
import React from 'react';
import ArmyAuth from '../components/ArmyAuth';
import bgImage from '../assets/images/frontpage1.jpg'; // your background image

const ArmyAuthPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
        <ArmyAuth />
      </div>
    </div>
  );
};

export default ArmyAuthPage;
