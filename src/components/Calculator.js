/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
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

 handleClick = (e) => {
   if (!e.target.name) return;
   const { next, total, operation } = calculate(this.state, e.target.name);

   if (next === null && total === null) {
     this.setState({ next, total: '0', operation });
   } else {
     this.setState({ next, total, operation });
   }
 };

 render() {
   const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
   const operators = '÷x-+=';
   const { total, next } = this.state;

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
             onClick={this.handleClick}
             type="button"
             key={btn}
             id={btn}
             name={btn}
             className={`grid-item ${
							  operators.includes(btn) ? 'operator' : ''
             } ${btn === '0' ? 'item-zero' : ''} ${
							  btn === '÷'
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
 }
}

export default Calculator;
