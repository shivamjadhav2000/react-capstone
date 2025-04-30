import { render, screen } from '@testing-library/react';
import BookingPage from "./pages/BookingPage";

test('Renders all booking form fields', () => {
  render(<BookingPage />);
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument();
});
