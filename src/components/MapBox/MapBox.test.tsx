import React from 'react';
import { render } from '@testing-library/react';
import { MapBox } from './MapBox';

describe('MapBox component', () => {
  it('renders map container', () => {
    const { getByTestId } = render(<MapBox />);
    const mapContainer = getByTestId('map');

    expect(mapContainer).toBeInTheDocument();
  });
});
