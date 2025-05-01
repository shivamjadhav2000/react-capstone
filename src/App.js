import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
function App() {
  return (
    <Router >
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path='/contact' element={<Contact/>} />
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
