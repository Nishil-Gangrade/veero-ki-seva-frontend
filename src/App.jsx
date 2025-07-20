import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonorAuthPage from './pages/DonorAuthPage';
import ArmyAuthPage from './pages/ArmyAuthPage';
import ArmyDashboard from './pages/army/ArmyDashboard';
import ArmySubmitEvent from './pages/army/ArmySubmitEvent';
import ArmyMyEvents from './pages/army/ArmyMyEvents';

import RoleSelection from './pages/RoleSelection';

import DonorHome from './pages/donor/DonorHome';
import DonorEvents from './pages/donor/DonorEvents';
import DonorDonate from './pages/donor/DonorDonate';
import DonorDashboard from './pages/donor/DonorDashboard';
import DonorProfile from './pages/donor/DonorProfile'; 
import LoginPage from './pages/DonorAuthPage';
import SignupPage from './pages/DonorAuthPage';
import ChatbotWidget from './components/ChatbotWidget';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AdminLogin from './pages/admin/AdminLogin';

import AdminLayout from './pages/admin/AdminLayout';
import EventsPage from './pages/admin/EventsPage';
import StatsPage from './pages/admin/StatsPage';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      {/* We'll add these pages next */}
      <Route path="/login/donor" element={<DonorAuthPage />} />
      <Route path="/login/army" element={<ArmyAuthPage/>} />
      <Route path="/army/dashboard" element={<ArmyDashboard />} />
      <Route path="/army/submit-event" element={<ArmySubmitEvent />} />
      <Route path="/army/my-events" element={<ArmyMyEvents />} />

      <Route path="/donor/home" element={<DonorHome />} />
      <Route path="/donor/events" element={<DonorEvents />} />
      <Route path="/donor/donate" element={<DonorDonate />} />
      <Route path="/donor/dashboard" element={<DonorDashboard />} />
      <Route path="/donor/profile" element={<DonorProfile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
      <Route path="events" element={<EventsPage />} />
      <Route path="stats" element={<StatsPage />} />
      </Route>
    </Routes>
    <ChatbotWidget />
    <ToastContainer />

    </>
    
    
  );
};

export default App;
