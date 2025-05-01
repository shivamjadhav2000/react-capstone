import React, { useEffect, useState, useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from '../api/api';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      time: '',
      guests: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      date: Yup.date()
        .required('Date is required'),
      time: Yup.string()
        .required('Time is required'),
      guests: Yup.number()
        .min(1, 'At least 1 guest is required')
        .max(20, 'Maximum 20 guests allowed')
        .required('Number of guests is required'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const res = await submitAPI(values);
      setIsLoading(false);
      if (res) {
        navigate('/confirmation', { state: { bookingDetails: values } });
      } else {
        console.error('Booking failed:', values);
      }
    },
  });

  const initializeTimes = useCallback(async () => {
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
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}
        <br />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date && (
          <div className="error">{formik.errors.date}</div>
        )}
        <br />

        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled>Select time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time && (
          <div className="error">{formik.errors.time}</div>
        )}
        <br />

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests && (
          <div className="error">{formik.errors.guests}</div>
        )}
        <br />

        <button type="submit" disabled={isLoading}>Book Now</button>
      </form>
      {isLoading && <p className='info'>Loading available times...</p>}
    </div>
  );
}

export default BookingPage;
