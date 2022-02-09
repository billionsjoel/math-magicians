import PropTypes from 'prop-types';

import './Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.answer;
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container calc-container">
          <div className="grid-item item-1 answer-field">
            {this.state}
          </div>
          <div className="grid-item">AC</div>
          <div className="grid-item">&#177;</div>
          <div className="grid-item">%</div>
          <div className="grid-item item-operations">&divide;</div>
          <div className="grid-item">7</div>
          <div className="grid-item">8</div>
          <div className="grid-item">9</div>
          <div className="grid-item item-operations">&times;</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
          <div className="grid-item item-operations">&minus;</div>
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item item-operations">&#43;</div>
          <div className="grid-item item-zero">0</div>
          <div className="grid-item">&#8729;</div>
          <div className="grid-item item-operations">&#61;</div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  answer: PropTypes.number.isRequired,
};

export default Calculator;
