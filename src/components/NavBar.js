import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={process.env.PUBLIC_URL+'/logo.png'} alt="Little Lemon Logo" />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
