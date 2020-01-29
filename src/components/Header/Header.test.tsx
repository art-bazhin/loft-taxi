import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('renders header in document', () => {
    const { getByTestId } = render(<Header onPageChange={str => str} />);
    const header = getByTestId('header');

    expect(header).toBeInTheDocument();
  });

  it('renders logo in document', () => {
    const { getByAltText } = render(<Header onPageChange={str => str} />);
    const logo = getByAltText('Logo');

    expect(logo).toBeInTheDocument();
  });
});
