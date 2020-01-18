import React, { useState } from 'react';

import './LoginForm.css';
import { Button } from '../../ui/Button/Button';
import { Input } from '../../ui/Input/Input';

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleFormSubmit = () => {
    if (email === 'test@test.com' && password === '123') onLogin();
    return setError(true);
  };

  return (
    <div className="LoginForm">
      <div className="LoginForm__fields">
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
      {error && <div className="LoginForm__error">Неверный пароль</div>}
      <Button type="button" onClick={handleFormSubmit}>
        Войти
      </Button>
    </div>
  );
};
