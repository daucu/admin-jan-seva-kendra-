import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Services from './components/Services';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/sideebar" element={<Sidebar />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </Router>
  );
}

export default App;
