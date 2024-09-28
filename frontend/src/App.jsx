import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { ComponentsLibrary } from './pages/ComponentsLibrary';
import { Boilerplates } from './pages/Boilerplates';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Navbar } from './components/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/components" element={<ComponentsLibrary/>} />
        <Route path="/boilerplates" element={<Boilerplates/>} />
      </Routes>
    </div>
  );
}