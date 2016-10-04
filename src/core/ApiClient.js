import apiCall from 'core/apiCall';

const methods = ['get', 'post', 'put', 'patch', 'del'];

/* eslint no-return-assign: "off" */
/* eslint consistent-return: "warn" */
class _ApiClient {
  constructor() {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => apiCall({
        method,
        path,
        params,
        data
      })
    );
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
