import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [operator, setOperator] = useState("+");
  const [secondNumber, setSecondNumber] = useState("0");
  const [answer, setAnswer] = useState("0");
  const [storedValue, setStoredValue] = useState("0");

  const Calculate = () => {
    let firstValue = parseFloat(firstNumber);
    let secondValue = parseFloat(secondNumber);

    if (operator === "+") {
      setAnswer((firstValue + secondValue).toString());
    } else if (operator === "-") {
      setAnswer((firstValue - secondValue).toString());
    } else if (operator === "*") {
      setAnswer((firstValue * secondValue).toString());
    } else if (operator === "÷") {
      setAnswer((firstValue / secondValue).toFixed());
    }
  };

  const AppendToFirst = (number) => {
    setFirstNumber(prevFirstNumber => {
      if (prevFirstNumber === "0") {
        return "" + number;
      } else {
        return prevFirstNumber + number;
      }
    });
  };
  
  const AppendToSecond = (number) => {
    setSecondNumber(prevSecondNumber => {
      if (prevSecondNumber === "0") {
        return "" + number;
      } else {
        return prevSecondNumber + number;
      }
    });
  };
  

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => AppendToFirst(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => setFirstNumber("0")}>Clear</button>
          <button onClick={() => setFirstNumber(storedValue)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((op) => (
            <button key={op} onClick={() => setOperator(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => AppendToSecond(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => setSecondNumber("0")}>Clear</button>
          <button onClick={() => setSecondNumber(storedValue)}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
        <button onClick={Calculate}>=</button>
        <button onClick={() => setStoredValue(answer)}>Store</button>
      </div>
    </div>
  );
}

export default App;
