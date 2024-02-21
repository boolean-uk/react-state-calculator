import "./App.css";
import { useState } from "react";

export default function App() {
  const [displayFirstValue, setDisplayFirstValue] = useState("0");
  const [displaySecondValue, setDisplaySecondValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("0");
  const [storedValue, setStoredValue] = useState(null);

  const handleFirstScreenClick = (input) => {
    handleInput(input, displayFirstValue, setDisplayFirstValue);
  };

  const handleSecondScreenClick = (input) => {
    handleInput(input, displaySecondValue, setDisplaySecondValue);
  };

  const handleInput = (input, currentValue, setCurrentValue) => {
    if (input === ".") {
      if (!currentValue.includes(".")) {
        setCurrentValue(currentValue + ".");
      }
    } else {
      if (currentValue === "0") {
        setCurrentValue(input.toString());
      } else {
        setCurrentValue(currentValue + input.toString());
      }
    }
  };

  const handleOperationClick = (op) => {
    if (operation === "") {
      setOperation(op);
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
    setResult("0");
    setOperation("");
  };

  const handleSecondScreenClearClick = () => {
    setDisplaySecondValue("0");
    setResult("0");
    setOperation("");
  };

  const handleStoreClick = () => {
    setResult(result);
    setStoredValue(result);
  };

  const handleRecallClick = (panel) => {
    if (panel === "first") {
      setDisplayFirstValue(storedValue || "0");
    } else if (panel === "second") {
      setDisplaySecondValue(storedValue || "0");
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{displayFirstValue}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((number) => (
            <button key={number} onClick={() => handleFirstScreenClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleFirstScreenClearClick}>Clear</button>
          <button onClick={() => handleRecallClick("first")}>Recall</button>
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((number) => (
            <button
              key={number}
              onClick={() => handleSecondScreenClick(number)}
            >
              {number}
            </button>
          ))}
          <button onClick={handleSecondScreenClearClick}>Clear</button>
          <button onClick={() => handleRecallClick("second")}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={handleStoreClick}>Store</button>
        </div>
      </div>
    </div>
  );
}
