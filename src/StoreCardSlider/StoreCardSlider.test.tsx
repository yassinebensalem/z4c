import React from 'react';
import { render } from '@testing-library/react';
import StoreCardSlider from './StoreCardSlider';
import stores from '../StoreCard/stores.json';

describe('StoreCardSlider', () => {
  it('renders the recommended stores title and store cards', () => {
    const { getByText, getAllByTestId } = render(<StoreCardSlider stores={stores} title="Recommended Stores" />);
    const title = getByText('Recommended Stores');
    expect(title).toBeInTheDocument();

    const storeCards = getAllByTestId('store-card');
    expect(storeCards.length).toBe(stores.length);
  });
});
