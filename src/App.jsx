// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

function App() {
  const [mainDisplay, setMainDisplay] = useState('0');
  const [operationDisplay, setOperationDisplay] = useState('');
  const [num2Display, setNum2Display] = useState('0');
  const [answerDisplay, setAnswerDisplay] = useState('0');

  const handleNumberClick = (number) => {
    if (operationDisplay === '') {
      if (mainDisplay === '0') {
        setMainDisplay(number.toString());
      } else {
        setMainDisplay((prevDisplay) => prevDisplay + number);
      }
    } else {
      if (num2Display === '0') {
        setNum2Display(number.toString());
      } else {
        setNum2Display((prevDisplay) => prevDisplay + number);
      }
    }
  };

  const handleClearClick = () => {
    setMainDisplay('0');
    setOperationDisplay('');
    setNum2Display('0');
    setAnswerDisplay('0');
  };

  const handleOperationClick = (operation) => {
    if (mainDisplay !== '0') {
      setOperationDisplay(operation);
    }
  };

  const handleEqualsClick = () => {
    if (mainDisplay !== '0' && operationDisplay !== '' && num2Display !== '0') {
      const result = calculateResult();
      setAnswerDisplay(result.toString());
      setMainDisplay(result.toString());
      setOperationDisplay('');
      setNum2Display('0');
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(mainDisplay);
    const num2 = parseFloat(num2Display);

    switch (operationDisplay) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '÷':
        return num1 / num2;
      default:
        return num2;
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{mainDisplay}</p>
        <div className="numbers">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleClearClick} className="clear-button">
            Clear
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{operationDisplay}</p>
        <div className="numbers">
          {['+', '-', '*', '÷'].map((operation) => (
            <button key={operation} onClick={() => handleOperationClick(operation)}>
              {operation}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{num2Display}</p>
        <div className="numbers">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
        </div>
      </div>

      <div className="panel answer">
        <p>{answerDisplay}</p>
        <div>
          <button onClick={handleEqualsClick} className="equals-button">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
