import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("+");
  const [secondNumber, setSecondNumber] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [storedAnswer, setStoredAnswer] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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
          {numbers.map((num) => (
            <button key={num} onClick={() => handleFirstNumber(num)}>
              {num}
            </button>
          ))}
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
          {numbers.map((num) => (
            <button key={num} onClick={() => handleSecondNumber(num)}>
              {num}
            </button>
          ))}
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
