import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [operator, setOperation] = useState("");
  const [result, calcResult] = useState(0);
  const [ans, storeAnswer] = useState(0)

  const constructNum1 = (value) => {
    
    switch (value) {
      case "Ans":
        setNum1(ans)
        break;
      case "Clear":
        clearNum1()
        break;
      case ".":
        if (num1.includes(".") === false) setNum1(num1 + value)
        break;
      default:
        if (num1 === "0") {
          setNum1(value);
        } else {
          setNum1(num1 + value);
        }
    }

  };

  const clearNum1 = () => setNum1("0");

  // i feel like this duplicating is unnecessary, but don't know if it's advisable to e.g. make it one function but with two input parameters to distinguish which calculator is affected?
  // would love feedback on this!

  const constructNum2 = (value) => {

    switch (value) {
      case "Ans":
        setNum2(ans)
        break;
      case "Clear":
        clearNum2()
        break;
      case ".":
        if (num2.includes(".") === false) setNum2(num2 + value)
        break;
      default:
        if (num2 === "0") {
          setNum2(value);
        } else {
          setNum2(num2 + value);
        }
    }

  };

  const clearNum2 = () => setNum2("0");

  const handleOperation = (operator) => setOperation(operator)

  const isWholeNumber = (num) => num % 1 === 0

  const formatResult = (num) => isWholeNumber(num) ? parseInt(num) : num

  const calc = () => {
    let result
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "÷":  
        if (num2 !== "0") {
          console.log("I'm dividing by", num2)
            result = parseFloat(num1) / parseFloat(num2);
            break;
        } else {
            alert("Division by 0 is not allowed, go to math jail.\nDo not pass 'Start'. Do not collect $200.")
            return
        }
      default:
          return "Invalid operator";
    }

    calcResult(formatResult(result))
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "Ans", "Clear"].map((value) => (
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
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "Ans", "Clear"].map((value) => (
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
          <button onClick={() => storeAnswer(result)}>Store Answer</button>
        </div>
      </div>
    </div>
  );
}

export default App;
