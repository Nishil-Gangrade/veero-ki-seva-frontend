import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/images/frontpage1.jpg';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Veero Ki Seva</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={() => navigate('/login/donor')}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer hover:border-blue-500 border"
          >
            <h2 className="text-2xl font-semibold mb-2">I’m a Donor</h2>
            <p className="text-gray-600">Support our heroes' families</p>
          </div>
          <div
            onClick={() => navigate('/login/army')}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer hover:border-green-500 border"
          >
            <h2 className="text-2xl font-semibold mb-2">I’m from an Army Family</h2>
            <p className="text-gray-600">Receive support and honor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
