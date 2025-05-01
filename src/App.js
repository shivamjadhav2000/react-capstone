import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/react-capstone/">
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <footer>
          <p>All rights reserved &copy; 2025</p>
          <p>Little Lemon</p>
        </footer>
      </>
    </Router>
  );
}

export default App;
