import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Display from '../components/Display';

describe('Display', () => {
  const counter = 1;
  it('should render div element', () => {
    const wrapper = shallow(<Display counter={counter} />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render counter value', () => {
    const wrapper = shallow(<Display counter={counter} />);
    expect(wrapper.text()).to.equal('1');
  });
});
