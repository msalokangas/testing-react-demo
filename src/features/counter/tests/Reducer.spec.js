import * as reducer from '../Reducer';
import * as actions from '../Actions';
import { expect } from 'chai';

// TODO: do we even need initial state for these? just pass undefined?
describe('Counter reducer', () => {
  // TODO: it should return inital state

  it('should handle INCREASE -action for increasing', () => {
    const action = actions.increase();
    const oldState = reducer.initialState;
    const newState = reducer.counter(oldState, action);

    expect(newState).to.eql({
      ...oldState,
      counter: 1
    });
  });

  it('should handle DECREASE -action for decreasing', () => {
    const action = actions.decrease();
    const oldState = reducer.initialState;
    const newState = reducer.counter(oldState, action);

    expect(newState).to.eql({
      ...oldState,
      counter: -1
    });
  });
});
