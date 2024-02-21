import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("+");
  const [secondDisplay, setSecondDisplay] = useState("0");
  const [result, setResult] = useState("0");
  const [storedValue, setStoredValue] = useState(null);

  const handleNumberClick = (number) => {
    if (number === "." && !display.includes(".")) {
      setDisplay(display + number);
    } else if (number !== "." && (display === "0" || display === "0.")) {
      setDisplay(number);
    } else if (number !== ".") {
      setDisplay(display + number);
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setSecondDisplay("0");
    setResult("0");
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setSecondDisplay(display);
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    switch (operation) {
      case "+":
        setResult(parseFloat(secondDisplay) + parseFloat(display));
        break;
      case "-":
        setResult(parseFloat(secondDisplay) - parseFloat(display));
        break;
      case "*":
        setResult(parseFloat(secondDisplay) * parseFloat(display));
        break;
      case "÷":
        setResult(parseFloat(secondDisplay) / parseFloat(display));
        break;
      default:
        break;
    }
  };

  const handleStoreClick = () => {
    setStoredValue(result);
  };

  const handleRecallClick = (displayNumber) => {
    if (storedValue !== null) {
      if (displayNumber === 1) {
        setDisplay(storedValue);
      } else if (displayNumber === 2) {
        setSecondDisplay(storedValue);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((number, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(number.toString())}
            >
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((op, index) => (
            <button key={index} onClick={() => handleOperationClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{secondDisplay}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((number, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(number.toString())}
            >
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={handleStoreClick}>Store</button>
        </div>
      </div>

      <div className="panel">
        <p>{display}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((number, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(number.toString())}
            >
              {number}
            </button>
          ))}
          <button onClick={() => handleRecallClick(1)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondDisplay}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((number, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(number.toString())}
            >
              {number}
            </button>
          ))}
          <button onClick={() => handleRecallClick(2)}>Recall</button>
        </div>
      </div>
    </div>
  );
}

export default App;
