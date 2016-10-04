import * as actions from './Actions';

const STEP = 1;

export const initialState = {
  counter: 0
};

export function counter(state = initialState, action) {
  switch (action.type) {
    case actions.INCREASE:
      return {
        ...state,
        counter: state.counter + STEP
      };
    case actions.DECREASE:
      return {
        ...state,
        counter: state.counter - STEP
      };
    default:
      return state;
  }
}

export const selectCounter = state => state.counter;
