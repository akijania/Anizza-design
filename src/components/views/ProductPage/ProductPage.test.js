import React from 'react';
import { shallow } from 'enzyme';
import { ProductPageComponent } from './ProductPage';

describe('Component ProductPage', () => {
  it('should render without crashing', () => {
    const product = {};
    const fetchProduct = function(){};
    const component = shallow(<ProductPageComponent product={product} fetchProduct={fetchProduct}/>);
    expect(component).toBeTruthy();
  });
});
