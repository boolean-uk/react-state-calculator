import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("+");
  const [secondNumber, setSecondNumber] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [storedAnswer, setStoredAnswer] = useState(0);

  const handleFirstNumber = (value) => {
    if (value === "Recall") {
      setFirstNumber(storedAnswer);
    } else if ((firstNumber === 0 && value === 0) || value === "Clear") {
      setFirstNumber(0);
    } else if (firstNumber === 0) {
      setFirstNumber(value);
    } else {
      setFirstNumber(`${firstNumber}${value}`);
    }
  };

  const handleOperator = (operator) => {
    setOperator(operator);
  };

  const handleSecondNumber = (value) => {
    if (value === "Recall") {
      setSecondNumber(storedAnswer);
    } else if ((secondNumber === 0 && value === 0) || value === "Clear") {
      setSecondNumber(0);
    } else if (secondNumber === 0) {
      setSecondNumber(value);
    } else {
      setSecondNumber(`${secondNumber}${value}`);
    }
  };

  const calculate = () => {
    setAnswer(eval(`${firstNumber} ${operator} ${secondNumber}`));
  };

  const store = () => {
    setStoredAnswer(answer);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => handleFirstNumber(1)}>1</button>
          <button onClick={() => handleFirstNumber(2)}>2</button>
          <button onClick={() => handleFirstNumber(3)}>3</button>
          <button onClick={() => handleFirstNumber(4)}>4</button>
          <button onClick={() => handleFirstNumber(5)}>5</button>
          <button onClick={() => handleFirstNumber(6)}>6</button>
          <button onClick={() => handleFirstNumber(7)}>7</button>
          <button onClick={() => handleFirstNumber(8)}>8</button>
          <button onClick={() => handleFirstNumber(9)}>9</button>
          <button onClick={() => handleFirstNumber(0)}>0</button>
          <button onClick={() => handleFirstNumber("Clear")}>Clear</button>
          <button onClick={() => handleFirstNumber("Recall")}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={() => handleOperator("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => handleSecondNumber(1)}>1</button>
          <button onClick={() => handleSecondNumber(2)}>2</button>
          <button onClick={() => handleSecondNumber(3)}>3</button>
          <button onClick={() => handleSecondNumber(4)}>4</button>
          <button onClick={() => handleSecondNumber(5)}>5</button>
          <button onClick={() => handleSecondNumber(6)}>6</button>
          <button onClick={() => handleSecondNumber(7)}>7</button>
          <button onClick={() => handleSecondNumber(8)}>8</button>
          <button onClick={() => handleSecondNumber(9)}>9</button>
          <button onClick={() => handleSecondNumber(0)}>0</button>
          <button onClick={() => handleSecondNumber("Clear")}>Clear</button>
          <button onClick={() => handleSecondNumber("Recall")}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
          <button onClick={() => store()}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
