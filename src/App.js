import { useState } from "react";

import "./App.css";

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [symbol, setSymbol] = useState("+");
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setNumberResult] = useState(0);

  const handleInputOne = (event) => {
    const numberButton = event.target.innerText;
    setNumberOne(numberButton);
  };

  const handleInputSymbol = (event) => {
    const symbolButton = event.target.innerText;
    setSymbol(symbolButton);
  };

  const handleInputTwo = (event) => {
    const numberButton = event.target.innerText;
    setNumberTwo(numberButton);
  };

  const clearOne = () => {
    setNumberOne(0);
  };

  const clearTwo = () => {
    setNumberTwo(0);
  };

  const handleInputResult = (event) => {
    switch (symbol) {
      case "+":
        setNumberResult(Number(numberOne) + Number(numberTwo));
        break;
      case "-":
        setNumberResult(Number(numberOne) - Number(numberTwo));
        break;
      case "*":
        setNumberResult(Number(numberOne) * Number(numberTwo));
        break;
      case "÷":
        setNumberResult(Number(numberOne) / Number(numberTwo));
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberOne}</p>
        <div className="numbers">
          <button onClick={handleInputOne}>1</button>
          <button onClick={handleInputOne}>2</button>
          <button onClick={handleInputOne}>3</button>
          <button onClick={handleInputOne}>4</button>
          <button onClick={handleInputOne}>5</button>
          <button onClick={handleInputOne}>6</button>
          <button onClick={handleInputOne}>7</button>
          <button onClick={handleInputOne}>8</button>
          <button onClick={handleInputOne}>9</button>
          <button onClick={handleInputOne}>0</button>
          <button onClick={clearOne}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button onClick={handleInputSymbol}>+</button>
          <button onClick={handleInputSymbol}>-</button>
          <button onClick={handleInputSymbol}>*</button>
          <button onClick={handleInputSymbol}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberTwo}</p>
        <div className="numbers">
          <button onClick={handleInputTwo}>1</button>
          <button onClick={handleInputTwo}>2</button>
          <button onClick={handleInputTwo}>3</button>
          <button onClick={handleInputTwo}>4</button>
          <button onClick={handleInputTwo}>5</button>
          <button onClick={handleInputTwo}>6</button>
          <button onClick={handleInputTwo}>7</button>
          <button onClick={handleInputTwo}>8</button>
          <button onClick={handleInputTwo}>9</button>
          <button onClick={handleInputTwo}>0</button>
          <button onClick={clearTwo}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleInputResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
