import * as actions from '../Actions';
import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Counter Action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create INCREASE -action for increasing', () => {
    const createdAction = actions.increase();
    expect(createdAction).to.eql({ type: actions.INCREASE });
  });

  it('should create DECREASE -action for decreasing', () => {
    const createdAction = actions.decrease();
    expect(createdAction).to.eql({ type: actions.DECREASE });
  });

  it('should create COUNTER_SUCCESS -action after receiving counter value from server', done => {
    nock('http://example.com')
      .get('/api/counter')
      .reply(200, 42);

    const expectedActions = [
      { type: actions.COUNTER_REQUEST },
      { type: actions.COUNTER_SUCCESS, result: 42 }
    ];

    const store = mockStore({ todos: [] });
    store.dispatch(actions.fetchCounter())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      })
      .then(done) // test passed
      .catch(done); // test failed
  });
});
