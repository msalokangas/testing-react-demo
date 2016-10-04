import superagent from 'superagent';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const COUNTER_REQUEST = 'COUNTER_REQUEST';
export const COUNTER_SUCCESS = 'COUNTER_SUCCESS';
export const COUNTER_FAILURE = 'COUNTER_FAILURE';

export function increase() {
  return {
    type: INCREASE
  };
}

export function decrease() {
  return {
    type: DECREASE
  };
}

export function fetchCounter() {
  return dispatch => {
    dispatch({
      type: COUNTER_REQUEST
    });
    return new Promise((resolve, reject) => {
      const request = superagent('GET', 'http://example.com/api/counter');
      request.end((err, response) => {
        if (err) {
          dispatch({
            type: COUNTER_FAILURE,
            error: err
          });
        } else {
          dispatch({
            type: COUNTER_SUCCESS,
            result: response.body
          });
        }
        return err ? reject(response.body || err) : resolve(response.body);
      });
    });
  };
}
