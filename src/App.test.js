import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Little Lemon somewhere on the page', () => {
  render(<App />);
  const matches = screen.getAllByText(/Little Lemon/i);
  expect(matches.length).toBeGreaterThan(0);
});
