import React from 'react'

function BookingPage() {
  return (
    <div className='BookingPage'>
        
        <h1>Booking Page</h1>
        <p>Book a table at our restaurant</p>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
            <br />
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />
            <br />
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" required />
            <br />
            <button type="submit" >Book Now</button>
        </form>
        <p>We look forward to serving you!</p>
        <p>For any inquiries, please contact us at  
        <a href="mailto:temp@gmail.com">
            mailUs
        </a></p>
        
        
    </div>
  )
}

export default BookingPage 