import React, { PropTypes } from 'react';

const CounterButton = ({ onClick, label, ...rest }) =>
  <button
    className="button round"
    onClick={onClick}
    {...rest}
    style={{
      fontSize: '4.5rem',
      fontWeight: 'bold',
      padding: '0.3em .4em'
    }}
  >
    {label}
  </button>;
  
CounterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

CounterButton.defaultProps = {
  label: 'button',
};

export default CounterButton;
