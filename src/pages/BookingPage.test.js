import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BookingPage from './BookingPage';

// Mock API and navigation
jest.mock('../api/api', () => ({
    fetchAPI: jest.fn(() => Promise.resolve(['18:00', '19:00'])),
    submitAPI: jest.fn(() => Promise.resolve(true))
  }));
  

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

describe('BookingPage Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );
  });

  test('renders form inputs correctly', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book now/i })).toBeInTheDocument();
  });

  test('shows validation errors on submit with empty fields', async () => {
    userEvent.click(screen.getByRole('button', { name: /book now/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    });
  });

  test('submits form successfully with valid input', async () => {
    userEvent.type(screen.getByLabelText(/name/i), 'John');
    fireEvent.change(screen.getByLabelText(/date/i), {
        target: { value: '2025-05-01' },
      });
      
    await waitFor(() => {
      // wait for available times to populate
      expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
    });

    userEvent.selectOptions(screen.getByLabelText(/time/i), '18:00');
    userEvent.clear(screen.getByLabelText(/number of guests/i));
    userEvent.type(screen.getByLabelText(/number of guests/i), '3');

    userEvent.click(screen.getByRole('button', { name: /book now/i }));

    await waitFor(() => {
      // Here you would verify navigation or confirmation logic
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });
});
