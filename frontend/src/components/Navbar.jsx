import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">Component Library SaaS</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/components" className="text-white hover:text-gray-400">Components</Link>
          </li>
          <li>
            <Link to="/boilerplates" className="text-white hover:text-gray-400">Boilerplates</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
