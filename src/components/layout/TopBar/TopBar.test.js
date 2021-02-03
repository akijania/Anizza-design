import React from 'react';
import { shallow } from 'enzyme';
import { TopBarComponent } from './TopBar';

describe('Component TopBar', () => {
  it('should render without crashing', () => {
    const getCount = function(){};
    const component = shallow(<TopBarComponent getCount={getCount} />);
    expect(component).toBeTruthy();
  });
});
