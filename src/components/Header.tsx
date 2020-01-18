import React from 'react';
import { Nav } from './Nav';

import './Header.css';
import { IPageId } from '../types';

interface HeaderProps {
  onPageChange: (pageId: IPageId) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onPageChange,
  onLogout,
  isLoggedIn
}) => {
  return (
    <header className="Header">
      <div className="Header__logo">Loft Taxi</div>
      <Nav
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
        onPageChange={onPageChange}
      />
    </header>
  );
};
