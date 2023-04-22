import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/sideebar" element={<Sidebar />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


      </Routes>
    </Router>
  );
}

export default App;
