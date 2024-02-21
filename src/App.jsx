import { useState } from "react"
import "./App.css"

function App() {
  const [numberLeft, setNumberLeft] = useState(0);
  const [numberRight, setNumberRight] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumberClickLeft = (e) => {
    const clickedNumber = parseInt(e.target.innerText);
    setNumberLeft((prevNumber) => prevNumber * 10 + clickedNumber);
  };

  const handleNumberClickRight = (e) => {
    const clickedNumber = parseInt(e.target.innerText);
    setNumberRight((prevNumber) => prevNumber * 10 + clickedNumber);
  };

  const handleClick = (e) => {
    const operator = e.target.innerText;
    if (operator === "=") {
      setResult(numberLeft + numberRight);
    } else if (operator === "Clear") {
      setNumberLeft(0);
      setNumberRight(0);
      setResult(0);
    } else if (operator === "+") {
      setResult(numberLeft + numberRight);
      setNumberLeft(0);
      setNumberRight(0);
    } else if (operator === "-") {
      setResult(numberLeft - numberRight);
      setNumberLeft(0);
      setNumberRight(0);
    } else if (operator === "*") {
      setResult(numberLeft * numberRight);
      setNumberLeft(0);
      setNumberRight(0);
    } else {
      setResult(numberLeft + numberRight);
      setNumberLeft(0);
      setNumberRight(0);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberLeft}</p>
        <div className="numbers">
          {Array.from(Array(10).keys()).map((num) => (
            <button key={num} onClick={handleNumberClickLeft}>
              {num}
            </button>
          ))}
          <button onClick={handleClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          <button onClick={handleClick}>+</button>
          <button onClick={handleClick}>-</button>
          <button onClick={handleClick}>*</button>
          <button onClick={handleClick}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberRight}</p>
        <div className="numbers">
          {Array.from(Array(10).keys()).map((num) => (
            <button key={num} onClick={handleNumberClickRight}>
              {num}
            </button>
          ))}
          <button onClick={handleClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleClick}>=</button>
          <button onClick={handleClick}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
