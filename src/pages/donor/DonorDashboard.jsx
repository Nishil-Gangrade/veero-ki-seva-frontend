// src/pages/donor/DonorDashboard.jsx
import DonorNavbar from '../../components/DonorNavbar';
import bgImage from '../../assets/images/frontpage1.jpg';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DonorDashboard = () => {
  // Mock Data
  const topDonors = {
    labels: ['Rahul', 'Arnav', 'Priya', 'Sneha', 'Rishi'],
    datasets: [
      {
        label: '₹ Donated',
        data: [5000, 4200, 3500, 3000, 2700],
        backgroundColor: '#22c55e',
        borderRadius: 8,
      },
    ],
  };

  const donationNeeds = [
    { cause: "Birthday Celebration", needed: 500, progress: 93 },
    { cause: "Hospital Aid", needed: 200, progress: 97 },
  ];

  return (
    <div className="pt-20 min-h-screen relative">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0" />

      {/* Navbar */}
      <DonorNavbar />

      {/* Dashboard Content */}
      <div className="relative z-10 p-8 max-w-7xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">📊 Donation Insights</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold">Total Donations</h2>
            <p className="text-3xl mt-2 font-bold text-orange-400">₹20,400</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold">Total Donors</h2>
            <p className="text-3xl mt-2 font-bold text-orange-400">127</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold">Events Needing Funds</h2>
            <p className="text-3xl mt-2 font-bold text-orange-400">2</p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4 text-white">Top Donors This Month</h2>
          <Bar data={topDonors} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>

        {/* Donations Needing Help */}
        <div className="grid md:grid-cols-2 gap-6">
          {donationNeeds.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-white">{item.cause}</h3>
              <p className="text-sm mt-1 text-orange-200">Needs ₹{item.needed} more</p>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-right text-orange-300 mt-1">{item.progress}% funded</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
