import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
      <footer className='footer'>
        <p>All rights reserved &copy; 2025</p>
        <p>Little Lemon</p>
      </footer>
    </>
  );
}

export default App;
