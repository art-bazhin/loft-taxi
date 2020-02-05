import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Nav } from './Nav';

describe('Nav component', () => {
  describe('profile button', () => {
    it('is rendered in document', () => {
      const { getByText } = render(<Nav />);
      const profileButton = getByText('Профиль');

      expect(profileButton).toBeInTheDocument();
    });
  });

  describe('map button', () => {
    it('is rendered in document', () => {
      const { getByText } = render(<Nav />);
      const profileButton = getByText('Карта');

      expect(profileButton).toBeInTheDocument();
    });
  });

  describe('logout button', () => {
    it('is rendered in document', () => {
      const { getByText } = render(<Nav />);
      const profileButton = getByText('Выход');

      expect(profileButton).toBeInTheDocument();
    });
  });
});
