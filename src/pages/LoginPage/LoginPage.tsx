import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div>
      <h2>Войти</h2>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};
