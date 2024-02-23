import { useState } from 'react';

export default function Calculate({num1, num2, operator}) {
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '÷':
        setResult(num1 / num2);
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
