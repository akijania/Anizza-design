import React from 'react';
import { shallow } from 'enzyme';
import { MiniCartComponent } from './MiniCart';

describe('Component MiniCart', () => {
  it('should render without crashing', () => {
    const products = [];
    const component = shallow(<MiniCartComponent products={products}/>);
    expect(component).toBeTruthy();
  });
});
