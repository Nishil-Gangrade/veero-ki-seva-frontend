// src/pages/donor/DonorDonate.jsx
import DonorNavbar from '../../components/DonorNavbar';
import bgImage from '../../assets/images/frontpage1.jpg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { donate, fetchDonations } from '../../utils/api'; // Make sure this file exports these functions

const DonorDonate = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventTitleFromParams = queryParams.get('eventTitle');
  const eventId = queryParams.get('eventId');
  const selectedEventTitle = eventTitleFromParams || 'General Donation';

  const [donations, setDonations] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    method: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.name || !form.email || !form.amount || !form.method) {
    return alert("Please fill all required fields.");
  }

  setIsSubmitting(true);

  try {
    // 1. Create Razorpay Order
    const orderRes = await fetch('https://veero-ki-seva-backend.onrender.com/api/payment/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: form.amount })
    });

    const orderData = await orderRes.json();

    // 2. Setup Razorpay payment options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your test key
      amount: orderData.amount,
      currency: orderData.currency,
      order_id: orderData.id,
      name: "Veero Ki Seva",
      description: `Donation for ${selectedEventTitle}`,
      handler: async function (response) {
        try {
          // 3. Save to backend after success
          await donate({
            ...form,
            razorpayPaymentId: response.razorpay_payment_id,
            eventId,
          });

          const res = await fetchDonations(form.email);
          setDonations(res.data);
          setShowThankYou(true);
          setForm({ name: '', email: '', amount: '', method: '', message: '' });
        } catch (err) {
          alert("Donation save failed!");
        }
        setIsSubmitting(false);
      },
      prefill: {
        name: form.name,
        email: form.email,
      },
      notes: {
        message: form.message,
        eventId,
      },
      theme: {
        color: "#EF6C00",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    alert("Payment initiation failed.");
    console.error(err);
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <DonorNavbar />

        {/* Header */}
        <div className="flex flex-col justify-center items-center text-white py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 mt-5">Support the Brave Families</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Your donation goes directly to the families of Indian martyrs. Jai Hind!
          </p>
        </div>
        


        {/* Form */}
        <div id="donate" className="max-w-xl mx-auto bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">💳 Donate To</h2>
          <p className="text-center text-lg font-semibold text-orange-600 mb-6">{selectedEventTitle}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Full Name"
              className="w-full p-3 rounded-md border"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full p-3 rounded-md border"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="number"
              required
              placeholder="Amount (₹)"
              className="w-full p-3 rounded-md border"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
            <select
              required
              className="w-full p-3 rounded-md border"
              value={form.method}
              onChange={(e) => setForm({ ...form, method: e.target.value })}
            >
              <option value="">Select Payment Method</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Net Banking</option>
            </select>
            <textarea
              placeholder="Message (Optional)"
              className="w-full p-3 rounded-md border"
              rows="3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
            >
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
                      <td className="p-3">
                        {new Date(donation.createdAt).toLocaleDateString()}
                      </td>
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
