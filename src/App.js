import "./App.css";
import { useState } from "react";

function App() {
  // STATE VARIABLES FOR RENDERING
  const [number, setNumPanelOne] = useState(0);
  const [numberRightSide, setNumPanelTwo] = useState(0);

  // STATE VARIABLES FOR CALCULATION
  const [symbolPanel, setSymbolPanel] = useState(null);
  const [result, setResult] = useState(0);
  const [storedAnswer, setStoredAnswer] = useState(0);

  const computeOperation = () => {
    // CALCULATION
    const num1 = parseInt(number);
    const num2 = parseInt(numberRightSide);

    switch (symbolPanel) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "÷":
        if (num2 == 0) {
          setResult("infinity");
        } else {
          setResult(num1 / num2);
        }
        break;
      case "*":
        setResult(num1 * num2);
        break;

      default:
        setResult("Unknown Error");
        break;
    }
  };

  // RENDERING
  function numberToUse(event) {
    if (number == 0) {
      setNumPanelOne(event.target.innerText);
    } else {
      setNumPanelOne(number + event.target.innerText);
    }
  }

  function numPanelTwo(event) {
    if (numberRightSide == 0) {
      setNumPanelTwo(event.target.innerText);
    } else {
      setNumPanelTwo(numberRightSide + event.target.innerText);
    }
  }

  function handleSymbolPanel(event) {
    const symbol = event.target.innerText;
    if (symbol === "+" || symbol === "-" || symbol === "÷" || symbol === "*") {
      setSymbolPanel(symbol);
    } else {
      setSymbolPanel("");
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number}</p>
        <div className="numbers">
          <button onClick={numberToUse}>1</button>
          <button onClick={numberToUse}>2</button>
          <button onClick={numberToUse}>3</button>
          <button onClick={numberToUse}>4</button>
          <button onClick={numberToUse}>5</button>
          <button onClick={numberToUse}>6</button>
          <button onClick={numberToUse}>7</button>
          <button onClick={numberToUse}>8</button>
          <button onClick={numberToUse}>9</button>
          <button onClick={numberToUse}>0</button>
          <button
            onClick={() => {
              setNumPanelOne(0);
            }}
          >
            Clear
          </button>
          <button
            onClick={(event) => {
              setNumPanelOne(storedAnswer);
            }}
          >
            Recall
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{symbolPanel}</p>
        <div className="numbers">
          <button onClick={handleSymbolPanel}>+</button>
          <button onClick={handleSymbolPanel}>-</button>
          <button onClick={handleSymbolPanel}>*</button>
          <button onClick={handleSymbolPanel}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberRightSide}</p>
        <div className="numbers">
          <button onClick={numPanelTwo}>1</button>
          <button onClick={numPanelTwo}>2</button>
          <button onClick={numPanelTwo}>3</button>
          <button onClick={numPanelTwo}>4</button>
          <button onClick={numPanelTwo}>5</button>
          <button onClick={numPanelTwo}>6</button>
          <button onClick={numPanelTwo}>7</button>
          <button onClick={numPanelTwo}>8</button>
          <button onClick={numPanelTwo}>9</button>
          <button onClick={numPanelTwo}>0</button>
          <button
            onClick={() => {
              setNumPanelTwo(0);
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              setNumPanelTwo(storedAnswer);
            }}
          >
            Recall
          </button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={computeOperation}>=</button>
          <button
            onClick={() => {
              setStoredAnswer(result);
            }}
          >
            Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
