import React, { useContext } from 'react';
import { PageId } from '../../types';
import { AuthContext } from '../../contexts/AuthContext';
import { Button } from '@material-ui/core';

interface NavProps {
  onPageChange: (pageId: PageId) => void;
}

export const Nav = ({ onPageChange }: NavProps) => {
  const { logout } = useContext(AuthContext);

  return (
    <nav>
      <Button onClick={() => onPageChange('map')}>Карта</Button>
      <Button onClick={() => onPageChange('profile')}>Профиль</Button>
      <Button onClick={logout}>Выход</Button>
    </nav>
  );
};
