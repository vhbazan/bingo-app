import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let mountedApp;

  beforeEach(() => {
    mountedApp = shallow(<App />);
  });

  test('renders a header component', () => {
    
    const header = mountedApp.find('.header')

    expect(header.length).toBe(1);
  });
  
});
