import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import { Counter } from '../containers/Counter';
import Display from '../components/Display';

describe('Counter', () => {
  let props;
  beforeEach(() => {
    props = {
      counter: 0,
      increase: () => {},
      decrease: () => {},
      fetchCounter: () => {},
    };
  });

  it('should call componentDidMount', () => {
    spy(Counter.prototype, 'componentDidMount');
    mount(<Counter {...props} />);
    expect(Counter.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should call componentWillReceiveProps', () => {
    spy(Counter.prototype, 'componentWillReceiveProps');
    const wrapper = mount(<Counter {...props} />);
    wrapper.setProps({ counter: 54 });
    expect(Counter.prototype.componentWillReceiveProps.calledOnce).to.equal(true);
  });

  it('should render display component', () => {
    const wrapper = mount(<Counter {...props} />);
    expect(wrapper.find(Display)).to.have.length(1);
  });
  
  it('should render button increase button', () => {
    const wrapper = mount(<Counter {...props} />);
    expect(wrapper.containsMatchingElement(<button>+</button>)).to.equal(true);
  });

  it('should render button decrease button', () => {
    const wrapper = mount(<Counter {...props} />);
    expect(wrapper.containsMatchingElement(<button>-</button>)).to.equal(true);
  });
});
