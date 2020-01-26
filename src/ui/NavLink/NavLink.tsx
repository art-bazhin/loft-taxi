import React from 'react';
import styles from './NavLink.module.scss';

interface NavLinkProps {
  onClick: () => void;
  text: string;
}

export const NavLink: React.FC<NavLinkProps> = props => {
  return (
    <button className={styles.NavLink} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
