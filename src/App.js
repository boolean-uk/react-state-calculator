import "./App.css";
import { useState } from "react";

function App() {
  const [numberA, setNumberA] = useState(0);
  const clickNumberA = (event) => {
    const buttonValue = Number(event.target.innerText);
    setNumberA(buttonValue);
  };
  const [numberB, setNumberB] = useState(0);
  const clickNumberB = (event) => {
    const buttonValue = Number(event.target.innerText);
    setNumberB(buttonValue);
  };
  const [operator, setOperator] = useState("+");
  const clickOperator = (event) => {
    const operatorValue = event.target.innerText;
    setOperator(operatorValue);
  };
  const [result, setResult] = useState(0);
  const clickEqual = (event) => {
    if (operator === "+") {
      setResult(numberA + numberB);
    }
    if (operator === "-") {
      setResult(numberA - numberB);
    }
    if (operator === "*") {
      setResult(numberA * numberB);
    }
    if (operator === "÷") {
      setResult(numberA / numberB);
    }
  };
  const clickClearA = () => {
    setNumberA(0);
  };
  const clickClearB = () => {
    setNumberB(0);
  };
  return (
    <div className="calculator">
      <div className="panel">
        <p className="numberA">{numberA}</p>
        <div className="numbers">
          <button onClick={clickNumberA}>1</button>
          <button onClick={clickNumberA}>2</button>
          <button onClick={clickNumberA}>3</button>
          <button onClick={clickNumberA}>4</button>
          <button onClick={clickNumberA}>5</button>
          <button onClick={clickNumberA}>6</button>
          <button onClick={clickNumberA}>7</button>
          <button onClick={clickNumberA}>8</button>
          <button onClick={clickNumberA}>9</button>
          <button onClick={clickNumberA}>0</button>
          <button onClick={clickClearA}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={clickOperator}>+</button>
          <button onClick={clickOperator}>-</button>
          <button onClick={clickOperator}>*</button>
          <button onClick={clickOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p className="numberB">{numberB}</p>
        <div className="numbers">
          <button onClick={clickNumberB}>1</button>
          <button onClick={clickNumberB}>2</button>
          <button onClick={clickNumberB}>3</button>
          <button onClick={clickNumberB}>4</button>
          <button onClick={clickNumberB}>5</button>
          <button onClick={clickNumberB}>6</button>
          <button onClick={clickNumberB}>7</button>
          <button onClick={clickNumberB}>8</button>
          <button onClick={clickNumberB}>9</button>
          <button onClick={clickNumberB}>0</button>
          <button onClick={clickClearB}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={clickEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
