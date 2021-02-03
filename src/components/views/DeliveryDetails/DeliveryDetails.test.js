import React from 'react';
import { shallow } from 'enzyme';
import { DeliveryDetailsComponent } from './DeliveryDetails';

describe('Component DeliveryDetails', () => {
  it('should render without crashing', () => {
    const component = shallow(<DeliveryDetailsComponent />);
    expect(component).toBeTruthy();
  });
});
