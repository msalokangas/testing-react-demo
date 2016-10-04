import React from 'react';
import ReactDOM from 'react-dom';
import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import configureStore from './core/Store';
import Root from './core/Root';
import getRoutes from './core/Routes';
import config from './config';
import hydrateInitialState from './core/hydrate';
import Promise from 'bluebird';
Promise.config({ cancellation: true });

const historyConfig = { basename: config.basePath };
const initialState = hydrateInitialState();
const history = useRouterHistory(createHistory)(historyConfig);
const store = configureStore(history, initialState);
const routes = getRoutes(store);

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('app')
);
