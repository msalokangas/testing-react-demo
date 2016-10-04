require('styles/foundation/custom.scss');
import React from 'react';

const App = ({ children }) =>
  <div className="root">
    <div className="content">
      {children}
    </div>
  </div>;

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
