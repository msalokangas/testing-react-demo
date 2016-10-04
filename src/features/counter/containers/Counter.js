import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import Display from '../components/Display';
import CounterButton from '../components/CounterButton';
import * as reducer from '../Reducer';

export class Counter extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
    fetchCounter: PropTypes.func.isRequired,
  }

  componentDidMount() {
    // this.props.fetchCounter();
  }

  componentWillReceiveProps() {
    // some custom logic for updates
  }

  render() {
    const { counter, increase, decrease } = this.props;
    return (
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '10rem'
        }}
      >
        <CounterButton onClick={decrease} label={'-'} name={'btnDecrease'} />
        <Display counter={counter} id={'display'} />
        <CounterButton onClick={increase} label={'+'} name={'btnIncrease'} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: reducer.selectCounter(state.counter),
  };
}

export default connect(mapStateToProps, actions)(Counter);
