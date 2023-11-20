import "./App.css";
import { useState } from "react";

const Operations = {
  "+": (numOne, numTwo) => numOne + numTwo,
  "-": (numOne, numTwo) => numOne - numTwo,
  "*": (numOne, numTwo) => numOne * numTwo,
  "/": (numOne, numTwo) => numOne / numTwo,
};

function App() {
  const [numOne, setNumOne] = useState("0");
  const [numTwo, setNumTwo] = useState("0");
  const [operation, setOperation] = useState("+");

  const handleButtonClick = (value, digit) => {
    if (value === "numOne") {
      setNumOne((prev) => appendDigit(prev, digit));
    } else {
      setNumTwo((prev) => appendDigit(prev, digit));
    }
  };

  const appendDigit = (existing, digit) => {
    if (existing === "0") {
      if (digit === "0") {
        return existing;
      }
      return digit;
    }
    return existing + digit;
  };

  const handleOperationClick = (op) => {
    setOperation(op);
  };

  const handleClearClick = (value) => {
    if (value === "numOne") {
      setNumOne("0");
    } else {
      setNumTwo("0");
    }
  };

  const calculate = () => {
    const op = Operations[operation];
    return op(Number(numOne), Number(numTwo));
  };

  const answer = calculate();

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => handleButtonClick("numOne", String(number))}>
              {number}
            </button>
          ))}
          <button onClick={() => handleClearClick("numOne")}>Clear</button>
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
        <p>{numTwo}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => handleButtonClick("numTwo", String(number))}>
              {number}
            </button>
          ))}
          <button onClick={() => handleClearClick("numTwo")}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;
