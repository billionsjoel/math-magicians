import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) =>
  {
    if (!e.target.name) return;
    const {next, total, operation} = calculate(this.state, e.target.name)
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container calc-container">
          <div className="grid-item item-1 answer-field">{this.state}</div>
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

export default Calculator;
