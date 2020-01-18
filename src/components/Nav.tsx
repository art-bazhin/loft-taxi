import React from 'react';
import { NavLink } from '../ui/NavLink';
import { IPageId } from '../types';

interface NavProps {
  onPageChange: (pageId: IPageId) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

export const Nav: React.FC<NavProps> = ({
  isLoggedIn,
  onPageChange,
  onLogout
}) => {
  return (
    <nav className="nav">
      {isLoggedIn ? (
        <>
          <NavLink text="Карта" onClick={() => onPageChange('map')} />
          <NavLink text="Профиль" onClick={() => onPageChange('profile')} />
          <NavLink text="Выход" onClick={() => onLogout()} />
        </>
      ) : null}
    </nav>
  );
};
