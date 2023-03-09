
import React from 'react';
import { render } from '@testing-library/react';
import Store from './StoreCard';

describe('Store component', () => {
  it('should render the Store', () => {
    const { getByTestId } = render(
      <Store image="some-image-url" title="Some store title" starIcon={<div />} rating={4} />
    );
    const storeElement = getByTestId('store');
    expect(storeElement).toBeInTheDocument();
  });
});
