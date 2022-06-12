import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const el = screen.getByRole('button', { name: 'Change to blue' });
});

// below test can be merged with above test
test('button has correct initial text', () => {});

test('button turs blue when clicked', () => {});
