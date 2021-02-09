import React from 'react';
import { shallow } from 'enzyme';
import { MainLayoutComponent } from './MainLayout';

describe('Component MainLayout', () => {
  it('should render without crashing', () => {
    const fetchLoadCart = function(){};
    const component = shallow(<MainLayoutComponent fetchLoadCart={fetchLoadCart} />);
    expect(component).toBeTruthy();
  });
});
