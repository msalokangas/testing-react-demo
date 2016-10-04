import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import CounterButton from '../components/CounterButton';

describe('CounterButton', () => {
  const onClick = () => {};
  it('should render one button', () => {
    const wrapper = shallow(<CounterButton onClick={onClick} label={'test'} />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should set given label', () => {
    const label = 'test';
    const wrapper = shallow(<CounterButton onClick={onClick} label={label} />);
    expect(wrapper.find('button').text()).to.equal(label);
  });

  it('should call given onClick func', () => {
    const onButtonClick = spy();
    const wrapper = shallow(<CounterButton onClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('should set default label if not given', () => {
    const wrapper = shallow(<CounterButton onClick={onClick} />);
    expect(wrapper.find('button').text()).to.equal('button');
  });
});
