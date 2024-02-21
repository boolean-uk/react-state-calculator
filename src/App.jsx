import { useState } from "react"
import "./App.css"

function App() {
  const [numberLeft, setNumberLeft] = useState(0);
  const [numberRight, setNumberRight] = useState(0);
  const [result, setResult] = useState(0);

  const [operator, setOperator] = useState("");

  const [storeResult, setStoreResult] = useState(0);
  const [storeLeft, setStoreLeft] = useState(0);
  const [storeRight, setStoreRight] = useState(0);


  const handleNumberClickLeft = (e) => {
    const clickedNumber = e.target.innerText;
    if (clickedNumber === "." && numberLeft.toString().includes(".")) {
      return;
    }
    setNumberLeft((prevNumber) => parseFloat(prevNumber + clickedNumber));
  };

  const handleNumberClickRight = (e) => {
    const clickedNumber = e.target.innerText;
    if (clickedNumber === "." && numberRight.toString().includes(".")) {
      return;
    }
    setNumberRight((prevNumber) => parseFloat(prevNumber + clickedNumber));
  };

  const handleDecimalClickLeft = () => {
    if (!numberLeft.toString().includes(".")) {
      setNumberLeft((prevNumber) => prevNumber + ".");
    }
  };

  const handleDecimalClickRight = () => {
    if (!numberRight.toString().includes(".")) {
      setNumberRight((prevNumber) => prevNumber + ".");
    }
  };

  const handleStoreClick = () => {
    setResult(storeResult);
  }

  const handleStoreRightClick = () => {
    setNumberRight(storeRight);
  }

  const handleStoreLeftClick = () => {
    setNumberLeft(storeLeft);
  }

  function resetNumbers() {
    setNumberLeft(0);
    setNumberRight(0);
  }


  const handleClick = (e) => {
    const operator = e.target.innerText;
    if (operator === "+" || operator === "-" || operator === "*" || operator === "÷") {
      setOperator(operator);
    }
    setStoreLeft(numberLeft);
    setStoreRight(numberRight);
    if (operator === "=") {
      setResult(numberLeft + numberRight);
    } else if (operator === "Clear") {
      setResult(0);
    } else if (operator === "+") {
      setResult(numberLeft + numberRight);
      setStoreResult(numberLeft + numberRight)
    } else if (operator === "-") {
      setResult(numberLeft - numberRight);
      setStoreResult(numberLeft - numberRight)
    } else if (operator === "*") {
      setResult(numberLeft * numberRight);
      setStoreResult(numberLeft * numberRight)
    } else if (operator === "÷") {
      setResult(numberLeft / numberRight);
      setStoreResult(numberLeft / numberRight)
    } else {
      setResult(0);
      setStoreResult(0)
    }
    resetNumbers();
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberLeft}</p>
        <button onClick={handleStoreLeftClick}>Recall</button>
        <div className="numbers">
          {Array.from(Array(10).keys()).map((num) => (
            <button key={num} onClick={handleNumberClickLeft}>
              {num}
            </button>
          ))}
          <button onClick={handleDecimalClickLeft}>.</button>
          <button onClick={handleClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleClick}>+</button>
          <button onClick={handleClick}>-</button>
          <button onClick={handleClick}>*</button>
          <button onClick={handleClick}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberRight}</p>
        <button onClick={handleStoreRightClick}>Recall</button>
        <div className="numbers">
          {Array.from(Array(10).keys()).map((num) => (
            <button key={num} onClick={handleNumberClickRight}>
              {num}
            </button>
          ))}
          <button onClick={handleDecimalClickRight}>.</button>
          <button onClick={handleClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleClick}>=</button>
          <button onClick={handleStoreClick}>Recall</button>
        </div>
      </div>
    </div>
  );
}

export default App;
