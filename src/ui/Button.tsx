import React from 'react';

import './Button.css';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ onClick, type, children }) => {
  const handleClick = (e: React.SyntheticEvent) => {
    if (onClick) onClick();
  };

  return (
    <button type={type} onClick={handleClick} className="Button">
      {children}
    </button>
  );
};
