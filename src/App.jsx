import "./App.css"
import { useState } from "react";

function App() {
  const [firstNumber, SetFirstNumber] = useState("0");
  const [operator, SetOperator] = useState("+");
  const [secondNumber, SetSecondNumber] = useState("0");
  const [answer, SetAnswer] = useState("0");
  const [storedValue, SetStoredValue] = useState("0");


  const AppendFirstNumber = (number) => {
    SetFirstNumber(prevFirstNumber => {
      if (prevFirstNumber === "0") {
        return "" + number;
      } else {
        return prevFirstNumber + number;
      }
    });
  };

  const AppendSecondNumber = (number) => {
    SetSecondNumber(prevSecondNumber => {
      if (prevSecondNumber === "0") {
        return "" + number;
      } else {
        return prevSecondNumber + number;
      }
    });
  };

  const CalculateAnswer = () => {
    let firstValue = parseFloat(firstNumber);
    let secondValue = parseFloat(secondNumber);

    if (operator === "+") {
      SetAnswer((firstValue + secondValue).toString());
    } else if (operator === "-") {
      SetAnswer((firstValue - secondValue).toString());
    } else if (operator === "*") {
      SetAnswer((firstValue * secondValue).toString());
    } else if (operator === "÷") {
      SetAnswer((firstValue / secondValue).toFixed());
    }
  };

  
  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => AppendFirstNumber(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => SetFirstNumber("0")}>Clear</button>
          <button onClick={() => SetFirstNumber(storedValue)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
        {["+", "-", "*", "÷"].map((op) => (
            <button key={op} onClick={() => SetOperator(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => AppendSecondNumber(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => SetSecondNumber("0")}>Clear</button>
          <button onClick={() => SetSecondNumber(storedValue)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
        <button onClick={CalculateAnswer}>=</button>
        <button onClick={() => SetStoredValue(answer)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
