// src/pages/DonorAuthPage.jsx
import React from 'react';
import DonorAuth from '../components/DonorAuth';
import bgImage from '../assets/images/frontpage1.jpg';

const DonorAuthPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
        <DonorAuth />
      </div>
    </div>
  );
};

export default DonorAuthPage;
