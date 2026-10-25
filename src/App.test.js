// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Cinder title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Cinder/i);
    expect(titleElement).toBeInTheDocument();
});
