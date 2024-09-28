// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
// import AccountPage from './pages/AccountPage'; // Uncomment if you add this page
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        {/* <Route path="/account" element={<AccountPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
