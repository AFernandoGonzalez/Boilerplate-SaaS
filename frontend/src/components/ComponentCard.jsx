import React from 'react'

export const ComponentCard = ({ component }) => {
  return (
      <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-sm">
          <h3 className="text-xl font-bold mb-2">{component.name}</h3>
          <p className="text-gray-600 mb-4">{component.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Details
          </button>
      </div>
  )
}
