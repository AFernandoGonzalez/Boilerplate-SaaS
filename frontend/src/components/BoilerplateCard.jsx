import React from 'react'

export const BoilerplateCard = ({ boilerplate }) => {
  return (
      <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-sm">
          <h3 className="text-xl font-bold mb-2">{boilerplate.name}</h3>
          <p className="text-gray-600 mb-4">{boilerplate.description}</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Download Boilerplate
          </button>
      </div>
  )
}
