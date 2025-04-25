import './App.css';
import NavBar from './components/NavBar';
import Featured from './components/Featured';
import Home from './pages/Home';
function App() {
  return (
    <>
      <NavBar />
      <Featured />
      <Home/>
      <footer className='footer'>
        <p>All rights reserved &copy; 2025</p>
        <p>Little Lemon</p>
        </footer>
    </>
  );
}

export default App;
