import React, { useState } from 'react';
import { Input } from '../ui/Input';
import './LoginPage.css';
import { Button } from '../ui/Button';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleFormSubmit = () => {
    if (email === 'test@test.com' && password === '123') onLogin();
    return setError(true);
  };

  return (
    <div className="LoginPage">
      <h2>Войти</h2>
      <div>
        <div className="LoginPage__fields">
          <Input
            label="Email"
            type="email"
            name="email"
            onInput={str => setEmail(str)}
          />
          <Input
            label="Пароль"
            type="password"
            name="password"
            onInput={str => setPassword(str)}
          />
        </div>
        {error && <div className="LoginPage__error">Неверный пароль</div>}
        <Button type="button" onClick={handleFormSubmit}>
          Войти
        </Button>
      </div>
    </div>
  );
};
