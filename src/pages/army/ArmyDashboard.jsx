import { useNavigate } from 'react-router-dom';
import ArmyNavbar from '../../components/ArmyNavbar';
import bgImage from '../../assets/images/army.png';

const ArmyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <img src={bgImage} alt="Army" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <ArmyNavbar />

      <div className="relative z-10 max-w-5xl mx-auto py-10 px-6 text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to Veero Ki Seva 🇮🇳</h1>
        <p className="mb-6">Submit a new event request or view status of your submitted events.</p>

        <div className="flex gap-6">
          <button
            className="bg-orange-600 px-6 py-2 rounded hover:bg-orange-700"
            onClick={() => navigate('/army/submit-event')}
          >
            📩 Submit New Event
          </button>
          <button
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
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
