// 1. When the user presses a numbered button on either of the panels, the display above should be updated to show that number.

// 2. When user presses the clear button, the display should be set back to 0

// 3. When the user presses one of the operation buttons (+, -,*,÷) the operation display should be updated to show that operation.

// 4. When the user presses the equals button the answer display should be updated to show the result of the calculation.

import { useState } from "react";
import "./App.css";

function App() {
  // State
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [operation, setOperation] = useState("+");
  const [answer, setAnswer] = useState("0");

  const displayNumber = (value) => {
    // if it's the first time("0") then replace the zero else add the number to the previous
    setFirstNumber(firstNumber === "0" ? value : firstNumber + value);
  };

  const displayNumberTwo = (value) => {
    setSecondNumber(secondNumber === "0" ? value : secondNumber + value);
  };

  const calculate = () => {
    const stringToNumberFirst = Number(firstNumber);
    const stringToNumberSecond = Number(secondNumber);
    if (operation === "+") {
      setAnswer(stringToNumberFirst + stringToNumberSecond);
    } else if (operation === "-") {
      setAnswer(stringToNumberFirst - stringToNumberSecond);
    } else if (operation === "*") {
      setAnswer(stringToNumberFirst * stringToNumberSecond);
    } else {
      setAnswer(stringToNumberFirst / stringToNumberSecond);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={(e) => displayNumber("1")}>1</button>
          <button onClick={(e) => displayNumber("2")}>2</button>
          <button onClick={(e) => displayNumber("3")}>3</button>
          <button onClick={(e) => displayNumber("4")}>4</button>
          <button onClick={(e) => displayNumber("5")}>5</button>
          <button onClick={(e) => displayNumber("6")}>6</button>
          <button onClick={(e) => displayNumber("7")}>7</button>
          <button onClick={(e) => displayNumber("8")}>8</button>
          <button onClick={(e) => displayNumber("9")}>9</button>
          <button onClick={(e) => displayNumber("0")}>0</button>
          <button onClick={() => setFirstNumber("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => setOperation("+")}>+</button>
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick={() => setOperation("*")}>*</button>
          <button onClick={() => setOperation("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={(e) => displayNumberTwo("1")}>1</button>
          <button onClick={(e) => displayNumberTwo("2")}>2</button>
          <button onClick={(e) => displayNumberTwo("3")}>3</button>
          <button onClick={(e) => displayNumberTwo("4")}>4</button>
          <button onClick={(e) => displayNumberTwo("5")}>5</button>
          <button onClick={(e) => displayNumberTwo("6")}>6</button>
          <button onClick={(e) => displayNumberTwo("7")}>7</button>
          <button onClick={(e) => displayNumberTwo("8")}>8</button>
          <button onClick={(e) => displayNumberTwo("9")}>9</button>
          <button>0</button>
          <button onClick={() => setSecondNumber("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
