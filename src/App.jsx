import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonorAuthPage from './pages/DonorAuthPage';
import ArmyAuthPage from './pages/ArmyAuthPage';
import RoleSelection from './pages/RoleSelection';

import DonorHome from './pages/donor/DonorHome';
import DonorEvents from './pages/donor/DonorEvents';
import DonorDonate from './pages/donor/DonorDonate';
import DonorDashboard from './pages/donor/DonorDashboard';
import DonorProfile from './pages/donor/DonorProfile'; 
import LoginPage from './pages/DonorAuthPage';
import SignupPage from './pages/DonorAuthPage';
import ChatbotWidget from './components/ChatbotWidget';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      {/* We'll add these pages next */}
      <Route path="/login/donor" element={<DonorAuthPage />} />
      <Route path="/login/army" element={<ArmyAuthPage/>} />

      <Route path="/donor/home" element={<DonorHome />} />
      <Route path="/donor/events" element={<DonorEvents />} />
      <Route path="/donor/donate" element={<DonorDonate />} />
      <Route path="/donor/dashboard" element={<DonorDashboard />} />
      <Route path="/donor/profile" element={<DonorProfile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    <ChatbotWidget />
    </>
    
    
  );
};

export default App;
