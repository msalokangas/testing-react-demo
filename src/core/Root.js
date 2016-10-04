import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };

  content() {
    return (
      <Router history={this.props.history} routes={this.props.routes} />
    );
  }
  
  /* eslint consistent-return: "warn" */
  devTools() {
    if (__DEVTOOLS__) {
      const DevTools = require('./DevTools').default;
      return !window.devToolsExtension ? <DevTools /> : null;
    }
    return undefined;
  }

  render() {
    const content = this.content();
    const devTools = this.devTools();
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          {content}
          {devTools}
        </div>
      </Provider>
    );
  }
}
