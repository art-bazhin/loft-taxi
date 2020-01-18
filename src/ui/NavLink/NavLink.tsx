import React from 'react';
import './NavLink.css';

interface NavLinkProps {
  onClick: () => void;
  text: string;
}

export const NavLink: React.FC<NavLinkProps> = props => {
  return (
    <button className="NavLink" onClick={props.onClick}>
      {props.text}
    </button>
  );
};
