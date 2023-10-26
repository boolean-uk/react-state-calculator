import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [operator, setOperation] = useState("");
  const [result, calcResult] = useState("0");

  const constructNum1 = (value) => {
    if (value === "Clear") {
      clearNum1()
      return
    }

    if (value === ".") {
      console.log(num1)
      if (num1.includes(".") === false) setNum1(num1 + value)
      return
    }

    if (num1 === "0") {
      setNum1(value);
    } else {
      setNum1(num1 + value);
    }
  };

  const constructNum2 = (value) => {
    if (value === "Clear") {
      clearNum2()
      return
    }

    if (num2 === "0") {
      setNum2(value);
    } else {
      setNum2(num2 + value);
    }
  };

  const clearNum1 = () => setNum1("0");

  const clearNum2 = () => setNum2("0");

  const handleOperation = (operator) => setOperation(operator)

  const calc = () => {
    let result
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
          result = num1 * num2;
          break;
      case "÷":  
          if (num2 !== "0") {
            console.log("I'm dividing by", num2)
              result = num1 / num2;
              break;
          } else {
              alert("Division by 0 is not allowed, go to math jail.\nDo not pass 'Start'. Do not collect $200.")
              return
          }
      default:
          return "Invalid operator";
    }
    calcResult(result.toFixed(3))
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "Clear"].map((value) => (
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
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".",  "Clear"].map((value) => (
            <button key={value} onClick={() => constructNum2(value)}>
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calc()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
