import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState("0");
  const [operator, setOperator] = useState("+");
  const [number2, setNumber2] = useState(0);
  const [result, calculateResult] = useState(0);

  const assignNumber1 = (event) => {
    console.log(typeof event.target.innerText);
    if (number1 === event.target.innerText && number1 === "0") {
      return;
    } else if (event.target.innerText !== "0" && number1 === "0") {
      setNumber1(event.target.innerText);
    } else if (
      event.target.innerText !== "Clear" &&
      event.target.innerText !== "0"
    ) {
      console.log("hello");
      setNumber1("");
      setNumber1(number1 + event.target.innerText);
    } else {
      setNumber1(0);
    }
  };

  const assignOperator = (event) => {
    setOperator(event.target.innerText);

    console.log(operator);
  };
  const assignResult = (event) => {
    switch (operator) {
      case "+":
        calculateResult(number1 + number2);
        break;
      case "-":
        calculateResult(number1 - number2);
        break;
      case "*":
        calculateResult(number1 * number2);
        break;
      case "÷":
        calculateResult(number1 / number2);
        break;
      default:
        console.log("No Value found");
    }
  };
  const assignNumber2 = (event) => {
    console.log(typeof event.target.innerText);
    if (number2 === event.target.innerText && number2 === "0") {
      return;
    } else if (event.target.innerText !== "0" && number2 === "0") {
      setNumber2(event.target.innerText);
    } else if (
      event.target.innerText !== "Clear" &&
      event.target.innerText !== "0"
    ) {
      console.log("hello");
      setNumber2("");
      setNumber2(number2 + event.target.innerText);
    } else {
      setNumber2(0);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number1}</p>
        <div className="numbers" onClick={assignNumber1}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={assignOperator}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{number2}</p>
        <div className="numbers" onClick={assignNumber2}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div onClick={assignResult}>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
