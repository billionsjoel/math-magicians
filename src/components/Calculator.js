/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(state, e.target.name);

    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const operators = '÷x-+=';
  const { total, next } = state;

  return (
    <div className="App">
      <div className="grid-container">
        {total ? (
          <div className="input input grid-item item-1 answer-field">
            {total}
          </div>
        ) : (
          <div className="input input grid-item item-1 answer-field">
            {next}
          </div>
        )}
        {buttons.map((btn) => (
          <button
            onClick={handleClick}
            type="button"
            key={btn}
            id={btn}
            name={btn}
            className={`grid-item ${operators.includes(btn) ? 'operator' : ''
            } ${btn === '0' ? 'item-zero' : ''} ${btn === '÷'
								|| btn === 'x'
								|| btn === '-'
								|| btn === '+'
								|| btn === '='
						  ? 'item-operations'
						  : ''
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
