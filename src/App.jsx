import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [operator, setOperation] = useState("");
  const [result, calcResult] = useState("0");

  const constructNum1 = (value) => {
    if (num1 === "0") {
      setNum1(value);
    } else {
      setNum1(num1 + value);
    }
  };

  const constructNum2 = (value) => {
    if (num2 === "0") {
      setNum2(value);
    } else {
      setNum2(num2 + value);
    }
  };

  const clearNum1 = () => setNum1("0");

  const clearNum2 = () => setNum2("0");

  const handleOperation = (operator) => setOperation(operator)

  const calc = () => "lol"

  const handleEquals = () => {
      setNum2(displayValue);
      const result = eval(`${num1} ${operation} ${num2}`);
      setDisplayValue(result.toString());
      setNum1(result.toString());
      setNum2("0");
      setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Clear"].map((value) => (
            <button key={value} onClick={() => constructNum1(value)}>
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((operator) => (
            <button key={operator} onClick={() => handleOperation(operator)}>
              {operator}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((value) => (
            <button key={value} onClick={() => constructNum2(value)}>
              {value}
            </button>
          ))}
          <button key={"Clear"} onClick={() => clearNum2()}>Clear
          </button>
        </div>
      </div>

      <div className="panel answer">
        <p>{displayValue}</p>
        <div>
          <button onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
