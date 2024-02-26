import "./App.css";
import React, { useState } from "react";

function App() {
  const [numberPanelOne, setNumberPanelOne] = useState(0);
  const [numberPanelTwo, setNumberPanelTwo] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  const displayNumberPanelOne = (num) => {
    setNumberPanelOne(num);
  };

  const displayNumberPanelTwo = (num) => {
    setNumberPanelTwo(num);
  };

  const displayOperation = (op) => {
    setOperation(op);
  };

  const calculateResult = () => {
    switch (operation) {
      case "+":
        setResult(numberPanelOne + numberPanelTwo);
        break;
      case "-":
        setResult(numberPanelOne - numberPanelTwo);
        break;
      case "*":
        setResult(numberPanelOne * numberPanelTwo);
        break;
      case "÷":
        setResult(numberPanelOne / numberPanelTwo);
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberPanelOne}</p>
        <div className="numbers">
          <button onClick={() => displayNumberPanelOne(1)}>1</button>
          <button onClick={() => displayNumberPanelOne(2)}>2</button>
          <button onClick={() => displayNumberPanelOne(3)}>3</button>
          <button onClick={() => displayNumberPanelOne(4)}>4</button>
          <button onClick={() => displayNumberPanelOne(5)}>5</button>
          <button onClick={() => displayNumberPanelOne(6)}>6</button>
          <button onClick={() => displayNumberPanelOne(7)}>7</button>
          <button onClick={() => displayNumberPanelOne(8)}>8</button>
          <button onClick={() => displayNumberPanelOne(9)}>9</button>
          <button onClick={() => displayNumberPanelOne(0)}>0</button>
          <button onClick={() => setNumberPanelOne(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => displayOperation('+')}>+</button>
          <button onClick={() => displayOperation('-')}>-</button>
          <button onClick={() => displayOperation('*')}>*</button>
          <button onClick={() => displayOperation('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberPanelTwo}</p>
        <div className="numbers">
          <button onClick={() => displayNumberPanelTwo(1)}>1</button>
          <button onClick={() => displayNumberPanelTwo(2)}>2</button>
          <button onClick={() => displayNumberPanelTwo(3)}>3</button>
          <button onClick={() => displayNumberPanelTwo(4)}>4</button>
          <button onClick={() => displayNumberPanelTwo(5)}>5</button>
          <button onClick={() => displayNumberPanelTwo(6)}>6</button>
          <button onClick={() => displayNumberPanelTwo(7)}>7</button>
          <button onClick={() => displayNumberPanelTwo(8)}>8</button>
          <button onClick={() => displayNumberPanelTwo(9)}>9</button>
          <button onClick={() => displayNumberPanelTwo(0)}>0</button>
          <button onClick={() => setNumberPanelTwo(0)}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
