import React from 'react';
import { mount } from 'enzyme';
import App from './App';
//WARNING: MUST comment out import .scss files from App.js, MainContent.js, About.js, ListOfStores.js. 
//Lines like import './App.scss' should be commented out as jest cant read .scss files
it('renders and mounts app without crashing', () => {
  const component = mount(<App />);
  expect(component).toMatchSnapshot();
});