import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders react link', () => {
  render(<App />);
  console.log(screen);
  const linkElement = screen.getByText(/ YAY!!! WE ARE EXCITED/i);
  expect(linkElement).toBeInTheDocument();
});
