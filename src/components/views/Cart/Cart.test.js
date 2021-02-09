import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const products=[];
    const component = shallow(<CartComponent products={products}/>);
    expect(component).toBeTruthy();
  });
});
