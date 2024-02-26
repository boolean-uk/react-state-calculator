import { useState } from "react";
import "./App.css";

function App() {
  const [firstDigits, setFirstDigits] = useState(0);
  const [operators, setOperators] = useState(null);
  const [secondDigits, setSecondDigits] = useState(0);
  const [results, setResults] = useState(0);
  const [stores, setStores] = useState(null);

  const checkLeadingDigit = (digit) => {
    return digit.toString().charAt(0) === '0' ? true : false
  }

  const updateFirstDigit = (digit) => {
    if (checkLeadingDigit(firstDigits)) {
          setFirstDigits(digit);
    } else {
      let number = parseInt(firstDigits.toString() + digit, 10);
      setFirstDigits(number);
    }
  };

  const updateSecondDigit = (digit) => {
    if (checkLeadingDigit(secondDigits)) {
      setSecondDigits(digit)
    } else {
      let number = parseInt(secondDigits.toString() + digit, 10);
      setSecondDigits(number);
    }
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

  const updateStores = () => {
    setStores(results)
  }

  const resetStates = () => {
    setFirstDigits(0)
    setOperators(null)
    setSecondDigits(0)
    setResults(0)
    setStores(null)
  }

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
          <button onClick={() => updateFirstDigit(stores)}>Recall</button>
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
          <button onClick={() => updateSecondDigit(stores)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{results}</p>
        <div>
          <button onClick={updateResult}>=</button>
          <button onClick={updateStores}>Store</button>
          <button onClick={resetStates}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
