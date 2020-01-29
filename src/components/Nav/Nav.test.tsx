import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Nav } from './Nav';

describe('Nav component', () => {
  let pageId = '';
  const onPageChangeMock = (str: string) => {
    pageId = str;
  };

  describe('profile button', () => {
    it('rendered in document', () => {
      const { getByText } = render(<Nav onPageChange={onPageChangeMock} />);
      const profileButton = getByText('Профиль');

      expect(profileButton).toBeInTheDocument();
    });

    it('emit profile page on click', () => {
      const { getByText } = render(<Nav onPageChange={onPageChangeMock} />);
      const profileButton = getByText('Профиль');

      fireEvent.click(profileButton);
      expect(pageId).toStrictEqual('profile');
    });
  });

  describe('map button', () => {
    it('rendered in document', () => {
      const { getByText } = render(<Nav onPageChange={onPageChangeMock} />);
      const profileButton = getByText('Карта');

      expect(profileButton).toBeInTheDocument();
    });

    it('emit map page on click', () => {
      const { getByText } = render(<Nav onPageChange={onPageChangeMock} />);
      const profileButton = getByText('Карта');

      fireEvent.click(profileButton);
      expect(pageId).toStrictEqual('map');
    });
  });

  describe('logout button', () => {
    it('rendered in document', () => {
      const { getByText } = render(<Nav onPageChange={onPageChangeMock} />);
      const profileButton = getByText('Выход');

      expect(profileButton).toBeInTheDocument();
    });
  });
});
