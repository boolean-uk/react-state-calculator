import { useState } from "react";

import "./App.css";
// import Clear from "./Clear";

function App() {
  const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "*", "/"];

  const [number1, setNumber1] = useState(0);
  const [operator, setOperator] = useState("");
  const [number2, setNumber2] = useState(0);

  const [sum, setSum] = useState(0);

  const handleNumber1Click = (num) => {
    setNumber1(num);
  };
  const handleOperatorClick = (op) => {
    setOperator(op);
  };
  const handleNumber2Click = (num) => {
    setNumber2(num);
  };
  const calculateSum = (number1, number2, op) => {
    switch (op) {
      case "+":
        setSum(number1 + number2);
        break;
      case "-":
        setSum(number1 - number2);
        break;
      case "*":
        setSum(number1 * number2);
        break;
      case "/":
        setSum(number1 / number2);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number1}</p>
        <div className="numbers">
          {zeroToNine.map((number) => (
            <button key={number} onClick={() => handleNumber1Click(number)}>
              {number}
            </button>
          ))}
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {operators.map((op) => (
            <button key={op} onClick={() => handleOperatorClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{number2}</p>
        <div className="numbers">
          {zeroToNine.map((number) => (
            <button key={number} onClick={() => handleNumber2Click(number)}>
              {number}
            </button>
          ))}
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={() => calculateSum(number1, number2, operator)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
