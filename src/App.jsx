import "./App.css";
import { useState } from "react";

export default function App() {
  const [displayFirstValue, setDisplayFirstValue] = useState("0");
  const [displaySecondValue, setDisplaySecondValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("0");

  const handleFirstScreenClick = (number) => {
    if (displayFirstValue === "0") {
      setDisplayFirstValue(number.toString());
    } else {
      setDisplayFirstValue(displayFirstValue + number);
    }
  };

  const handleSecondScreenClick = (number) => {
    if (displaySecondValue === "0") {
      setDisplaySecondValue(number.toString());
    } else {
      setDisplaySecondValue(displaySecondValue + number);
    }
  };

  const handleOperationClick = (op) => {
    if (operation === "") {
      setOperation(op);
      result(displayFirstValue);
    } else {
      setOperation("");
      setOperation(op);
    }
  };

  const handleEqualsClick = () => {
    if (operation !== "") {
      const operand1 = parseFloat(displayFirstValue);
      const operand2 = parseFloat(displaySecondValue);
      switch (operation) {
        case "+":
          setResult(operand1 + operand2);
          break;
        case "-":
          setResult(operand1 - operand2);
          break;
        case "*":
          setResult(operand1 * operand2);
          break;
        case "/":
          setResult(operand1 / operand2);
          break;
        default:
          break;
      }
      setOperation("");
    }
  };

  const handleFirstScreenClearClick = () => {
    setDisplayFirstValue("0");
    result("0");
    setOperation("");
  };

  const handleSecondScreenClearClick = () => {
    setDisplaySecondValue("0");
    result("0");
    setOperation("");
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{displayFirstValue}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => handleFirstScreenClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleFirstScreenClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {["+", "-", "*", "/"].map((op) => (
            <button key={op} onClick={() => handleOperationClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{displaySecondValue}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              onClick={() => handleSecondScreenClick(number)}
            >
              {number}
            </button>
          ))}
          <button onClick={handleSecondScreenClearClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
}
