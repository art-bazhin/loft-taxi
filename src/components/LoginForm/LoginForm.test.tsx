import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm component', () => {
  it('renders email field', () => {
    const { getByTestId } = render(<LoginForm />);
    const emailField = getByTestId('email');

    expect(emailField).toBeInTheDocument();
  });

  it('renders password field', () => {
    const { getByTestId } = render(<LoginForm />);
    const emailField = getByTestId('password');

    expect(emailField).toBeInTheDocument();
  });

  it('renders login button', () => {
    const { getByTestId } = render(<LoginForm />);
    const loginButton = getByTestId('login');

    expect(loginButton).toBeInTheDocument();
  });

  it('shows message on wrong password submit', () => {
    const { getByTestId, getByText } = render(<LoginForm />);
    const loginButton = getByTestId('login');

    fireEvent.click(loginButton);
    expect(getByText('Неверный пароль')).toBeInTheDocument();
  });
});
