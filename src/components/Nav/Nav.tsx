import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const Nav = () => {
  const history = useHistory();
  const { logout } = useContext(AuthContext);

  return (
    <nav>
      <Button onClick={() => history.push('/map')}>Карта</Button>
      <Button onClick={() => history.push('/profile')}>Профиль</Button>
      <Button onClick={logout}>Выход</Button>
    </nav>
  );
};
