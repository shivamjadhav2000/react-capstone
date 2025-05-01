import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage'; // Placeholder for confirmation page

function App() {
  return (
    <>
      <NavBar />
      <Router basename="/react-capstone">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={< ConfirmationPage/>} /> 
        </Routes>
      </Router>
      <footer>
        <p>All rights reserved &copy; 2025</p>
        <p>Little Lemon</p>
      </footer>
    </>
  );
}

export default App;
