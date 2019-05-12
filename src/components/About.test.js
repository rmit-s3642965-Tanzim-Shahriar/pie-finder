import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
//WARNING: MUST comment out import './about.scss' from About.js to run this test
//as jest cant read .scss  
describe('About', () => {
  it('should render without any props', () => {
    const component = shallow(<About/>);
    expect(component).toMatchSnapshot();
  });
});