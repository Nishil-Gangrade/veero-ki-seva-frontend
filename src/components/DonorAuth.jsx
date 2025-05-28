// src/components/DonorAuth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonorAuth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => setIsSignup((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignup) {
      navigate('/donor/home');
    } else {
      console.log('Signup submitted');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">
        {isSignup ? 'Donor Signup' : 'Donor Login'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />

        {isSignup && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        )}

        {!isSignup && (
          <div className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
            Forgot password?
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        {isSignup ? (
          <>
            Already have an account?{' '}
            <span
              onClick={toggleForm}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Log In
            </span>
          </>
        ) : (
          <>
            Don’t have an account?{' '}
            <span
              onClick={toggleForm}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default DonorAuth;
