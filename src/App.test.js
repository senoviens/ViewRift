// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ViewRift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ViewRift/i);
    expect(titleElement).toBeInTheDocument();
});
