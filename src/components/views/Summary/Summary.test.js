import React from 'react';
import { shallow } from 'enzyme';
import { SummaryComponent } from './Summary';

describe('Component Summary', () => {
  it('should render without crashing', () => {
    const products = [];
    const component = shallow(<SummaryComponent products={products} />);
    expect(component).toBeTruthy();
  });
});
