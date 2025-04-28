import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingPage from './pages/BookingPage ';
function App() {
  return (
    <>
      <NavBar />
      <Router>
      <Routes> 
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/booking" element={<BookingPage />}></Route> 
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
