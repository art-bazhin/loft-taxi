import React, { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { withAuth, AuthContext } from './AuthContext';

let email = '';
let password = '';

const Mock = withAuth(() => {
  const { login, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <span data-testid="status">{isLoggedIn ? 'y' : 'n'}</span>
      <button
        data-testid="login"
        onClick={() => login(email, password)}
      ></button>
      <button data-testid="logout" onClick={logout}></button>
    </div>
  );
});

describe('AuthContext', () => {
  it('handles login with wrong password correctly', () => {
    const { getByTestId } = render(<Mock />);

    fireEvent.click(getByTestId('login'));
    expect(getByTestId('status').textContent).toStrictEqual('n');
  });

  it('handles login and logout correctly', () => {
    const { getByTestId } = render(<Mock />);

    email = 'test@test.com';
    password = '123';

    fireEvent.click(getByTestId('login'));
    expect(getByTestId('status').textContent).toStrictEqual('y');

    fireEvent.click(getByTestId('logout'));
    expect(getByTestId('status').textContent).toStrictEqual('n');
  });
});
