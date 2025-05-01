import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
    const location = useLocation();

    useEffect(() => {
        const bookingDetails = location.state?.bookingDetails;
        if (bookingDetails) {
            console.log('Booking Details:', bookingDetails);
        } else {
            console.log('No booking details found.');
        }
    }, [location]);

    return (
        <div className="confirmation-page">
            <h1>Booking Confirmation</h1>

            {location.state?.bookingDetails ? (
                <section className="booking-details">
                    <h2>Your Booking Details</h2>
                    <p>Thank you for your booking, {location.state.bookingDetails.name}!</p>
                    <p>Here are your booking details:</p>
                    <ul>
                    <p><strong>Name:</strong> {location.state.bookingDetails.name}</p>
                    <p><strong>Date:</strong> {location.state.bookingDetails.date}</p>
                    <p><strong>Time:</strong> {location.state.bookingDetails.time}</p>
                    <p><strong>Guests:</strong> {location.state.bookingDetails.guests}</p>
                    </ul>
                </section>
            ) : (
                <p>No booking details available.</p>
            )}
            <p>Your booking has been confirmed!</p>
            <p>Thank you for choosing us. We look forward to serving you.</p>
            
            <Link to="/" type='button'>Back to Home</Link>
        </div>
    );
}

export default ConfirmationPage;
