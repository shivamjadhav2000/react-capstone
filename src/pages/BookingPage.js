import React, { useEffect, useState, useCallback } from 'react';
import { useFormik } from 'formik';
import { fetchAPI, submitAPI } from '../api/api'; // Make sure api.js exports these

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      time: '',
      guests: 1,
    },
    onSubmit: async (values) => {
      const res = await submitAPI(values); // Changed to submitAPI based on logical use
      if (res) {
        setSubmitSuccess(true);
        setIsLoading(false);
        console.log('Booking successful:', values);
      } else {
        setSubmitSuccess(false);
        setIsLoading(false);
        console.error('Booking failed:', values);
      }
    },
  });

  // useCallback prevents function recreation on every render
  const initializeTimes = useCallback(async () => {
    console.log('Fetching available times...');
    if (formik.values.date) {
      const date = new Date(formik.values.date);
      const times = await fetchAPI(date);
      setAvailableTimes(times);
    }
  }, [formik.values.date]);

  useEffect(() => {
    initializeTimes();
  }, [initializeTimes]);

  return (
    <div className='BookingPage'>
      <h1>Booking Page</h1>
      <p>Book a table at our restaurant</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
        <br />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          required
        />
        <br />

        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          required
        >
          <option value="" disabled>Select time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        <br />

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={formik.values.guests}
          onChange={formik.handleChange}
          required
        />
        <br />

        <button type="submit">Book Now</button>
      </form>

      {
        isLoading && <p className='info'>Loading available times...</p>
      }
      {
        submitSuccess && <p className='success'>Booking successful!</p>
      }
    </div>
  );
}

export default BookingPage;
