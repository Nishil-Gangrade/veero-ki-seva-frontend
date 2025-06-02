// src/pages/donor/DonorDonate.jsx
import DonorNavbar from '../../components/DonorNavbar';
import bgImage from '../../assets/images/frontpage1.jpg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const dummyEvents = {
  event1: "Support Families of Martyrs",
  event2: "Medical Aid for Veterans",
  event3: "Rehabilitation Programs",
  event4: "Children's Education Drive",
};

const DonorDonate = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get('eventId');
  const selectedEventTitle = dummyEvents[eventId] || "General Donation";

  const [donations, setDonations] = useState([
    {
      date: '2025-05-20',
      amount: '₹500',
      method: 'UPI',
      message: 'In memory of our Veers',
    },
    {
      date: '2025-05-15',
      amount: '₹1000',
      method: 'Credit Card',
      message: 'Jai Hind 🇮🇳',
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="backdrop-blur-sm min-h-screen bg-black bg-opacity-50 overflow-y-auto">
        <DonorNavbar />

        {/* Header */}
        <div className="flex flex-col justify-center items-center text-white py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">🇮🇳 Support the Brave Families</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Your donation goes directly to the families of Indian martyrs. Jai Hind!
          </p>
        </div>

        {/* Form */}
        <div id="donate" className="max-w-xl mx-auto bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">💳 Donate To</h2>
          <p className="text-center text-lg font-semibold text-orange-600 mb-6">{selectedEventTitle}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" required placeholder="Full Name" className="w-full p-3 rounded-md border" />
            <input type="email" required placeholder="Email" className="w-full p-3 rounded-md border" />
            <input type="number" required placeholder="Amount (₹)" className="w-full p-3 rounded-md border" />
            <select required className="w-full p-3 rounded-md border">
              <option value="">Select Payment Method</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Net Banking</option>
            </select>
            <textarea placeholder="Message (Optional)" className="w-full p-3 rounded-md border" rows="3" />
            <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
              {isSubmitting ? 'Processing...' : 'Proceed to Pay'}
            </button>

            {isSubmitting && (
              <div className="h-2 bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-green-500 animate-pulse w-full"></div>
              </div>
            )}
          </form>
        </div>

        {/* Thank You Popup */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm mx-auto">
              <h3 className="text-2xl font-bold mb-2">🎉 Thank You!</h3>
              <p className="mb-4">Your contribution is deeply appreciated.</p>
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Close
              </button>
              <button
                onClick={() => alert('Share functionality coming soon!')}
                className="ml-4 border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100"
              >
                📣 Share the Cause
              </button>
            </div>
          </div>
        )}

        {/* History */}
        <div className="max-w-4xl mx-auto bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧾 Your Donation History</h2>
          {donations.length === 0 ? (
            <p className="text-gray-600">You haven’t donated yet. Be the first to support!</p>
          ) : (
            <div className="overflow-x-auto max-h-48 overflow-y-auto">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3">Date</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Method</th>
                    <th className="p-3">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((donation, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{donation.date}</td>
                      <td className="p-3">{donation.amount}</td>
                      <td className="p-3">{donation.method}</td>
                      <td className="p-3">{donation.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorDonate;
