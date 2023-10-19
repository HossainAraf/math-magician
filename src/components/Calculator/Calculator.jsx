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


  // RENDER
  return (
    <div id="calculator-container">
      <span className="dispaly">{display}</span>
      <Button className="btn" label="AC" />
      <Button className="btn" label="+/-" />
      <Button className="btn" label="%" />
      <Button className="btn btn-right" label="÷" />
      <Button className="btn" label="7" />
      <Button className="btn" label="8" />
      <Button className="btn" label="9" />
      <Button className="btn btn-right" label="x" />
      <Button className="btn" label="4" />
      <Button className="btn" label="5" />
      <Button className="btn" label="6" />
      <Button className="btn btn-right" label="-" />
      <Button className="btn" label="1" />
      <Button className="btn" label="2" />
      <Button className="btn" label="3" />
      <Button className="btn btn-right" label="+" />
      <Button className="btn zero" label="0" />
      <Button className="btn" label="." />
      <Button className="btn btn-right" label="=" />
    </div>
  );
};

export default Calculator;
