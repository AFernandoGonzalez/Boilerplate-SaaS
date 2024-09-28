import React from 'react';

export const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Component Library SaaS</h1>
      <p className="text-gray-600 mb-4">
        Build faster with reusable components and boilerplates.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
};