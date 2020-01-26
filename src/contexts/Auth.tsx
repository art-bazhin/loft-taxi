import React from 'react';
import { createContext, Component } from 'react';

const LS_AUTH_FIELD = 'AUTH';
const EMAIL = 'test@test.com';
const PASSWORD = '123';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: (email: string, password: string): boolean => false,
  logout: () => {}
});

export const withAuth = (WrappedComponent: React.FC | React.ComponentClass) => {
  class WithAuth extends Component {
    state = {
      isLoggedIn: !!localStorage.getItem(LS_AUTH_FIELD)
    };

    login = (email: string, password: string) => {
      if (email === EMAIL && password === PASSWORD) {
        this.setState({ isLoggedIn: true });
        localStorage.setItem(LS_AUTH_FIELD, 'true');

        return true;
      }

      return false;
    };

    logout = () => {
      this.setState({ isLoggedIn: false });
      localStorage.removeItem(LS_AUTH_FIELD);
    };

    render() {
      return (
        <AuthContext.Provider
          value={{
            isLoggedIn: this.state.isLoggedIn,
            login: this.login,
            logout: this.logout
          }}
        >
          <WrappedComponent />
        </AuthContext.Provider>
      );
    }
  }

  return WithAuth;
};
