import React from 'react'

function NavBar() {
  return (
    <nav>
        <ul >
            <li><a href='/'><img src="logo.png" /></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar