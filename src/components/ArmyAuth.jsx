// src/components/ArmyAuth.jsx
import React, { useState } from 'react';

const ArmyAuth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup((prev) => !prev);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">
        {isSignup ? 'Army Family Signup' : 'Army Family Login'}
      </h2>

      <form className="space-y-4">
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Aadhaar Card Number"
              maxLength={12}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Army Card Number"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </>
        )}

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

export default ArmyAuth;
