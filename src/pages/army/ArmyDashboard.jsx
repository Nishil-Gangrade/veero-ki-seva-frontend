// src/pages/army/ArmyDashboard.jsx
import { useNavigate } from 'react-router-dom';
import ArmyNavbar from '../../components/ArmyNavbar';
import bgImage from '../../assets/images/frontpage1.jpg';


const ArmyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${bgImage})` }} />
              <div className="absolute inset-0 backdrop-blur-sm min-h-screen bg-black bg-opacity-40" />
      <ArmyNavbar />
      <div className="max-w-5xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Veero Ki Seva 🇮🇳</h1>
        <p className="mb-6 text-gray-700">
          This is your family dashboard. Submit a new event request or view status of your submitted events.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-6">
          <button
            className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
            onClick={() => navigate('/army/submit-event')}
          >
            📩 Submit New Event
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => navigate('/army/my-events')}
          >
            📋 View My Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArmyDashboard;
