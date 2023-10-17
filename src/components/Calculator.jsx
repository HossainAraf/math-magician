// IMPORTS
import React from 'react';
import Button from './Button';

// COMPONENTS
const Calculator = () => (
  <div>
    <span>0</span>
    <Button className="btn" label="AC" />
    <Button className="btn" label="+/-" />
    <Button className="btn" label="%" />
    <Button className="btn" label="÷" />
    <Button className="btn" label="7" />
    <Button className="btn" label="8" />
    <Button className="btn" label="9" />
    <Button className="btn" label="x" />
    <Button className="btn" label="4" />
    <Button className="btn" label="5" />
    <Button className="btn" label="6" />
    <Button className="btn" label="-" />
    <Button className="btn" label="1" />
    <Button className="btn" label="2" />
    <Button className="btn" label="3" />
    <Button className="btn" label="+" />
    <Button className="btn" label="0" />
    <Button className="btn" label="." />
    <Button className="btn" label="=" />
  </div>
);

export default Calculator;
