// IMPORTS
import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';
import Calculate from '../Logic/Calculate';

// COMPONENTS
const Calculator = () => {
  const [calculatordata, setCalculatordata] = useState({
    total: null,
    next: null,
    operation: null,
  });

  // EVENT HANDLERS
  const handleClick = (buttonName) => {
    setCalculatordata(Calculate(calculatordata, buttonName));
  };

  const display = calculatordata.next || calculatordata.total || '0';

  // RENDER
  return (
    <div id="calculator-container">
      <span className="dispaly">{display}</span>
      <Button className="btn" label="AC" onClick={() => handleClick('AC')} />
      <Button className="btn" label="+/-" onClick={() => handleClick('+/-')} />
      <Button className="btn" label="%" onClick={() => handleClick('%')} />
      <Button className="btn btn-right" label="÷" onClick={() => handleClick('÷')} />
      <Button className="btn" label="7" onClick={() => handleClick('7')} />
      <Button className="btn" label="8" onClick={() => handleClick('8')} />
      <Button className="btn" label="9" onClick={() => handleClick('9')} />
      <Button className="btn btn-right" label="x" onClick={() => handleClick('x')} />
      <Button className="btn" label="4" onClick={() => handleClick('4')} />
      <Button className="btn" label="5" onClick={() => handleClick('5')} />
      <Button className="btn" label="6" onClick={() => handleClick('6')} />
      <Button className="btn btn-right" label="-" onClick={() => handleClick('-')} />
      <Button className="btn" label="1" onClick={() => handleClick('1')} />
      <Button className="btn" label="2" onClick={() => handleClick('2')} />
      <Button className="btn" label="3" onClick={() => handleClick('3')} />
      <Button className="btn btn-right" label="+" onClick={() => handleClick('+')} />
      <Button className="btn zero" label="0" onClick={() => handleClick('0')} />
      <Button className="btn" label="." onClick={() => handleClick('.')} />
      <Button className="btn btn-right" label="=" onClick={() => handleClick('=')} />
    </div>
  );
};

export default Calculator;
