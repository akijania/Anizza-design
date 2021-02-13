import React from 'react';
import { shallow } from 'enzyme';
import { SummaryCartProductComponent } from './SummaryCartProduct';

describe('Component SummaryCartProduct', () => {
  it('should render without crashing', () => {
    
    const component = shallow(<SummaryCartProductComponent />);
    expect(component).toBeTruthy();
  });
});
