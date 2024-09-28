import React, { useState } from 'react';
// import { auth } from '../services/firebase';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignup = async () => {
  //   await auth.createUserWithEmailAndPassword(email, password);
  // };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleSignup}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </div>
  );
};