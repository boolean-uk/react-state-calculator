import { useState } from "react";
import "./App.css";

function App() {
  const [inputNum1, setInputNum1] = useState("0");
  const [operator, setOperator] = useState("+");
  const [inputNum2, setInputNum2] = useState("0");
  const [outputNum, setOutputNum] = useState("0");
  const [storedNum, setStoredNum] = useState("0");

  function num1Click(event) {
    const value = event.target.innerText;

    if (value === "Clear") {
      setInputNum1("0");
    } else if (value === "." && !inputNum1.includes(".")) {
      setInputNum1(inputNum1 + value);
    } else if (inputNum1 === "0") {
      setInputNum1(value);
    } else if (value !== ".") {
      setInputNum1(inputNum1 + value);
    }
  }

  function num2Click(event) {
    const value = event.target.innerText;

    if (value === "Clear") {
      setInputNum2("0");
    } else if (value === "." && !inputNum2.includes(".")) {
      setInputNum2(inputNum2 + value);
    } else if (inputNum2 === "0") {
      setInputNum2(value);
    } else if (value !== ".") {
      setInputNum2(inputNum2 + value);
    }
  }

  function operatorClick(event) {
    setOperator(event.target.innerText);
  }

  function calculate() {
    switch (operator) {
      case "+":
        setOutputNum(Number(inputNum1) + Number(inputNum2));
        break;
      case "-":
        setOutputNum(Number(inputNum1) - Number(inputNum2));
        break;
      case "*":
        setOutputNum(Number(inputNum1) * Number(inputNum2));
        break;
      case "÷":
        setOutputNum(Number(inputNum1) / Number(inputNum2));
        break;
      default:
        setOutputNum(0);
        break;
    }
  }

  function recallNum1() {
    if (storedNum !== 0) {
      setInputNum1(storedNum.toString());
    }
  }
  
  function recallNum2() {
    if (storedNum !== 0) {
      setInputNum2(storedNum.toString());
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{inputNum1}</p>
        <div className="numbers">
          <button onClick={num1Click}>1</button>
          <button onClick={num1Click}>2</button>
          <button onClick={num1Click}>3</button>
          <button onClick={num1Click}>4</button>
          <button onClick={num1Click}>5</button>
          <button onClick={num1Click}>6</button>
          <button onClick={num1Click}>7</button>
          <button onClick={num1Click}>8</button>
          <button onClick={num1Click}>9</button>
          <button onClick={num1Click}>0</button>
          <button onClick={num1Click}>Clear</button>
          <button onClick={num1Click}>.</button>
        </div>
        <div>
          <button onClick={recallNum1}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={operatorClick}>+</button>
          <button onClick={operatorClick}>-</button>
          <button onClick={operatorClick}>*</button>
          <button onClick={operatorClick}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{inputNum2}</p>
        <div className="numbers">
          <button onClick={num2Click}>1</button>
          <button onClick={num2Click}>2</button>
          <button onClick={num2Click}>3</button>
          <button onClick={num2Click}>4</button>
          <button onClick={num2Click}>5</button>
          <button onClick={num2Click}>6</button>
          <button onClick={num2Click}>7</button>
          <button onClick={num2Click}>8</button>
          <button onClick={num2Click}>9</button>
          <button onClick={num2Click}>0</button>
          <button onClick={num2Click}>Clear</button>
          <button onClick={num2Click}>.</button>
        </div>
        <div>
          <button onClick={recallNum2}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{outputNum}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
        <div>
          <button onClick={() => setStoredNum(outputNum)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
