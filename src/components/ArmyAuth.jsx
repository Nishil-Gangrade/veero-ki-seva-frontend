// src/components/ArmyAuth.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ArmyAuth = () => {
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const showToastMessage = (msg) => {
    setMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleMode = () => setIsSignup(!isSignup);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const url = isSignup
      ? `${API_BASE_URL}/api/auth/signup`
      : `${API_BASE_URL}/api/auth/login`;

    try {
      const res = await axios.post(url, formData);

      if (!isSignup) {
        localStorage.setItem('token', res.data.token);
        showToastMessage("Login successful");

        // Navigate with replace to disable back
        setTimeout(() => {
          Navigate('/army/dashboard', { replace: true });
        }, 1000);
      } else {
        showToastMessage("Signup successful! Please login.");
        setIsSignup(false); // switch to login
      }
    } catch (err) {
      showToastMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-black text-white py-2 px-4 rounded shadow-lg z-50 transition-all duration-300">
          {message}
        </div>
      )}

      <h2 className="text-xl font-bold mb-4">{isSignup ? 'Signup' : 'Login'} as Army Family</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignup && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isSignup ? 'Signup' : 'Login'}
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}
        <span className="text-blue-600 cursor-pointer ml-1" onClick={toggleMode}>
          {isSignup ? 'Login' : 'Signup'}
        </span>
      </p>
    </div>
  );
};

export default ArmyAuth;
