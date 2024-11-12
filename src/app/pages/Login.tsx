// pages/Login.js (or Login.tsx if using TypeScript)
import React from 'react';

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">Welcome to ExamScheduler!</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 rounded-full border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-6 rounded-full border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-full mb-4 hover:bg-blue-600 transition duration-200">
        Login
      </button>
      <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition duration-200">
        Sign Up
      </button>
    </div>
  );
};

export default Login;
