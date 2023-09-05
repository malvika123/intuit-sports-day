import { render, screen } from '@testing-library/react';
import { AllGameEvents } from '../allGameEvents';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

test.skip('renders react link', () => {
  render(<Provider store={store}><AllGameEvents /></Provider>);
  const linkElement = screen.getByText(/ All Sports Events/i);
  expect(linkElement).toBeInTheDocument();
});