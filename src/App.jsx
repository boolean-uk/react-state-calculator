import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [answer, setAnswer] = useState("0");

  const handleNumberClick = (number) => {
    if (operation === "") {
      setFirstOperand((prev) => prev + number);
      setDisplay((prev) => (prev === "0" ? number : prev + number));
    } else {
      setSecondOperand((prev) => prev + number);
      setDisplay((prev) => prev === "0" ? number : prev + number);
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setDisplay(op);
  };

  const handleClearClick = () => {
    setDisplay("0");
    setFirstOperand("");
    setSecondOperand("");
    setOperation("");
    setAnswer("0");
  };

  const handleEqualsClick = () => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    let result;

    if (operation === "÷" && num2 === 0) {
      result = "Error";
    } else {
      switch (operation) {
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
          result = num1 / num2;
          break;
        default:
          result = num1;
      }
    }

    setAnswer(result.toString());
    setDisplay(result.toString());
    setFirstOperand("");
    setSecondOperand("");
    setOperation("");
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((op) => (
            <button key={op} onClick={() => handleOperationClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{answer}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
