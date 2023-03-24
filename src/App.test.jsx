import { render, screen, fireEvent } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

import App from "./App";
import Todotable from './Todotable';
import Todolist from './Todolist';

expect.extend(matchers);

test('renders App component', () => {
  render(<App />);
  const headline = screen.getByText(/My Todolist/i);
  expect(headline).toBeInTheDocument();
});

test('renders todotable', () => {
  const row = [
    'Go to coffee' ,
  ];
  render(<Todotable rows={row} />);
  const table = screen.getByRole('table');
  expect(table).toHaveTextContent(/go to coffee/i);
});

test('add todo', () => {
  render(<Todolist />);
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } });
  const button = screen.getByText('Add');
  fireEvent.click(button);

  const table = screen.getByRole('table');
  expect(table).toHaveTextContent(/go to coffee/i);
});



