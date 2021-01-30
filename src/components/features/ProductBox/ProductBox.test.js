import React from 'react';
import { shallow } from 'enzyme';
import { ProductBoxComponent } from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const name = 'dress';
    const image = 'a.jpg';
    const price = 123;
    const id = 123;
    const component = shallow(<ProductBoxComponent id={id} name={name} price={price} image={image}/>);
    expect(component).toBeTruthy();
  });
});
