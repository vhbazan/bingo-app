import React from 'react'
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('should render Header without crashing', () => {
    
    mountedHeader = shallow(<Header />)

  });

});