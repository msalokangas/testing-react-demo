import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistory } from 'react-router-redux';
import reducer from './Reducer';
import thunk from 'redux-thunk';
import clientMiddleware from './clientMiddleware';
import ApiClient from 'core/ApiClient';

export default function configureStore(history, initialState) {
  const client = new ApiClient();
  const reduxRouterMiddleware = syncHistory(history);
  const middlewares = [thunk, reduxRouterMiddleware, clientMiddleware(client)];

  let middleware = applyMiddleware(...middlewares);
  if (__DEVELOPMENT__) {
    const vanillaDevTools = require('./DevTools').default.instrument();
    const devTools = window.devToolsExtension ? window.devToolsExtension() : vanillaDevTools;
    middleware = compose(applyMiddleware(...middlewares), devTools);
  }

  const store = middleware(createStore)(reducer, initialState);
  
  if (__DEVTOOLS__) {
    reduxRouterMiddleware.listenForReplays(store, ({ routing }) => routing.location);
  }

  if (module.hot) {
    module.hot.accept('./Reducer', () => {
      const nextRootReducer = require('./Reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
