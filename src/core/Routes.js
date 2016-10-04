import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './App';
import Counter from '../features/counter/containers/Counter';

export default () =>
  <Route path="/" component={App}>
    <IndexRoute component={Counter} />
  </Route>;
