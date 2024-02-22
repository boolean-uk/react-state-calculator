import "./App.css"
import React, { useState } from 'react';

function App() {
  const [firstPanelNum, updateNum1] = useState(0);
  const [secondPanelNum, updateNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleClickPanel1 = (num) => {
    updateNum1(num);
  };

  const handleClickPanel2 = (num) => {
    updateNum2(num)
  };

  const handleClickOperator = (operator) => {
    setOperator(operator)
  };

  const handleEquals = () => {
    let res;
    switch (operator) {
      case '+':
        res = firstPanelNum + secondPanelNum;
        break;
      case '-':
        res = firstPanelNum - secondPanelNum;
        break;
      case '*':
        res = firstPanelNum * secondPanelNum;
        break;
      case '÷':
        res = firstPanelNum / secondPanelNum;
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstPanelNum}</p>
        <div className="numbers">
          <button onClick={() => handleClickPanel1(1)}>1</button>
          <button onClick={() => handleClickPanel1(2)}>2</button>
          <button onClick={() => handleClickPanel1(3)}>3</button>
          <button onClick={() => handleClickPanel1(4)}>4</button>
          <button onClick={() => handleClickPanel1(5)}>5</button>
          <button onClick={() => handleClickPanel1(6)}>6</button>
          <button onClick={() => handleClickPanel1(7)}>7</button>
          <button onClick={() => handleClickPanel1(8)}>8</button>
          <button onClick={() => handleClickPanel1(9)}>9</button>
          <button onClick={() => handleClickPanel1(0)}>0</button>
          <button onClick={() => handleClickPanel1(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => handleClickOperator('+')}>+</button>
          <button onClick={() => handleClickOperator('-')}>-</button>
          <button onClick={() => handleClickOperator('*')}>*</button>
          <button onClick={() => handleClickOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondPanelNum}</p>
        <div className="numbers">
          <button onClick={() => handleClickPanel2(1)}>1</button>
          <button onClick={() => handleClickPanel2(2)}>2</button>
          <button onClick={() => handleClickPanel2(3)}>3</button>
          <button onClick={() => handleClickPanel2(4)}>4</button>
          <button onClick={() => handleClickPanel2(5)}>5</button>
          <button onClick={() => handleClickPanel2(6)}>6</button>
          <button onClick={() => handleClickPanel2(7)}>7</button>
          <button onClick={() => handleClickPanel2(8)}>8</button>
          <button onClick={() => handleClickPanel2(9)}>9</button>
          <button onClick={() => handleClickPanel2(0)}>0</button>
          <button onClick={() => handleClickPanel2(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => handleEquals()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
