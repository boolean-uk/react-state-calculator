import { useState } from "react";
import "./App.css";

function App() {
  const [displayV1, setDisplayV1] = useState("0");
  const [displayV2, setDisplayV2] = useState("0");
  const [operation, setOperation] = useState(null);
  const num1 = Number(displayV1);
  const [answer, setAnswer] = useState(0);
  const [storedValue, setStoredValue] = useState(0);
  const [isRecallActive, setIsRecallActive] = useState(false);

  const handleNumberButtonClick1 = (number) => {
    if (displayV1 === "0" && number === "0") {
      return;
    } else if (displayV1 === "0") {
      setDisplayV1(number);
    } else {
      setDisplayV1(displayV1 + number);
    }
  };

  const handleNumberButtonClick2 = (number) => {
    if (displayV2 === "0" && number === "0") {
      return;
    } else if (displayV2 === "0") {
      setDisplayV2(number);
    } else {
      setDisplayV2(displayV2 + number);
    }
  };

  const handleClearButtonClick = () => {
    setDisplayV1("0");
    setDisplayV2("0");
    setOperation(null);
    setAnswer(0);
  };

  const handleOperationButtonClick = (op) => {
    if (operation) {
      handleEqualsButtonClick();
      setDisplayV2("0"); // Reset displayV2 
    }
    setOperation(op);
  };

  const handleEqualsButtonClick = () => {
    const num2 = Number(displayV2);
    let result = 0;
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
        break;
    }
    setAnswer(result);
    setDisplayV1("0"); // Reset displayV1
    setOperation(null);
    setDisplayV2("0");
  };

  const handleStoreButtonClick = () => {
    setStoredValue(answer);
  };

  const handleRecallButtonClick = () => {
    if (isRecallActive) {
      setDisplayV1(storedValue.toString());
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{displayV1}</p>
        <div className="numbers">
          <button onClick={() => handleNumberButtonClick1("1")}>1</button>
          <button onClick={() => handleNumberButtonClick1("2")}>2</button>
          <button onClick={() => handleNumberButtonClick1("3")}>3</button>
          <button onClick={() => handleNumberButtonClick1("4")}>4</button>
          <button onClick={() => handleNumberButtonClick1("5")}>5</button>
          <button onClick={() => handleNumberButtonClick1("6")}>6</button>
          <button onClick={() => handleNumberButtonClick1("7")}>7</button>
          <button onClick={() => handleNumberButtonClick1("8")}>8</button>
          <button onClick={() => handleNumberButtonClick1("9")}>9</button>
          <button onClick={() => handleNumberButtonClick1("0")}>0</button>
          <button onClick={handleClearButtonClick}>Clear</button>
          {isRecallActive && (
            <button onClick={handleRecallButtonClick}>Recall</button>
          )}
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => handleOperationButtonClick("+")}>+</button>
          <button onClick={() => handleOperationButtonClick("-")}>-</button>
          <button onClick={() => handleOperationButtonClick("*")}>*</button>
          <button onClick={() => handleOperationButtonClick("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{displayV2}</p>
        <div className="numbers">
          <button onClick={() => handleNumberButtonClick2("1")}>1</button>
          <button onClick={() => handleNumberButtonClick2("2")}>2</button>
          <button onClick={() => handleNumberButtonClick2("3")}>3</button>
          <button onClick={() => handleNumberButtonClick2("4")}>4</button>
          <button onClick={() => handleNumberButtonClick2("5")}>5</button>
          <button onClick={() => handleNumberButtonClick2("6")}>6</button>
          <button onClick={() => handleNumberButtonClick2("7")}>7</button>
          <button onClick={() => handleNumberButtonClick2("8")}>8</button>
          <button onClick={() => handleNumberButtonClick2("9")}>9</button>
          <button onClick={() => handleNumberButtonClick2("0")}>0</button>
          <button onClick={handleClearButtonClick}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleEqualsButtonClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;