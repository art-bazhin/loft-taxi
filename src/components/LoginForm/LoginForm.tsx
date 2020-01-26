import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

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
        <TextField
          label="Email"
          type="email"
          name="email"
          onInput={(e: any) => setEmail(e.target.value)}
        />
        <TextField
          label="Пароль"
          type="password"
          name="password"
          onInput={(e: any) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="LoginForm__error">Неверный пароль</div>}
      <Button type="button" onClick={handleFormSubmit}>
        Войти
      </Button>
    </div>
  );
};
