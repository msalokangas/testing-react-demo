import React, { PropTypes } from 'react';

const Display = ({ counter, ...rest }) =>
  <div
    style={{
      padding: '0 2rem',
      fontSize: '9rem'
    }}
    {...rest}
  >
    {counter}
  </div>;

Display.propTypes = {
  counter: PropTypes.number.isRequired,
};

Display.defaultProps = {
  counter: 0,
};

export default Display;
