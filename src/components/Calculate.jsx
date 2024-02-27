import { useState } from 'react';

export default function Calculate({num1, num2, operator, result, setResult}) {

  const calculateResult = () => {
    switch (operator) {
      case '+':
        setResult(Number(num1) + Number(num2));
        break;
      case '-':
        setResult(Number(num1) - Number(num2));
        break;
      case '*':
        setResult(Number(num1) * Number(num2));
        break;
      case '÷':
        setResult(Number(num1) / Number(num2));
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div className="panel answer">
      <p>{result}</p>
      <div>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}
