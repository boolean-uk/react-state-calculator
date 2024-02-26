import { useState } from "react";
import "./App.css";

function App() {
  const [firstDigits, setFirstDigits] = useState(0);
  const [operators, setOperators] = useState(null);
  const [secondDigits, setSecondDigits] = useState(0);
  const [results, setResults] = useState(0);

  const updateFirstDigit = (digit) => {
    setFirstDigits(digit);
  };

  const updateSecondDigit = (digit) => {
    setSecondDigits(digit);
  };

  const updateOperator = (operator) => {
    setOperators(operator);
  };

  const resetFirstDigit = () => {
    setFirstDigits(0);
  };

  const resetSecondDigit = () => {
    setSecondDigits(0);
  };

  const updateResult = () => {
    console.log(operators)
    switch (operators) {
      case "+":
        console.log("its a plus");
        setResults(firstDigits + secondDigits);
        break;
      case "-":
        console.log("its a minus");
        setResults(firstDigits - secondDigits);
        break;
      case "*":
        console.log("its a multiplication");
        setResults(firstDigits * secondDigits);
        break;
      case "÷":
        console.log("its a division");
        setResults(firstDigits / secondDigits);
        break;
      default:
        setResults(null);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstDigits}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
            <button key={digit} onClick={() => updateFirstDigit(digit)}>
              {digit}
            </button>
          ))}
          <button onClick={resetFirstDigit}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operators}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((operator) => (
            <button key={operator} onClick={() => updateOperator(operator)}>
              {operator}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{secondDigits}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
            <button key={digit} onClick={() => updateSecondDigit(digit)}>
              {digit}
            </button>
          ))}
          <button onClick={resetSecondDigit}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{results}</p>
        <div>
          <button onClick={updateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
