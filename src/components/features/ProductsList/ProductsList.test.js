import React from 'react';
import { shallow } from 'enzyme';
import { ProductsListComponent } from './ProductsList';

describe('Component ProductsList', () => {
  it('should render without crashing', () => {
    const categories = [];
    const products = [];
    const component = shallow(<ProductsListComponent categories={categories} products={products}/>);
    expect(component).toBeTruthy();
  });
});
