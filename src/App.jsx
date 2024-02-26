import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);
  const [stored, setStored] = useState(0);

  const handleClick = (clickedNum) => {
    if (num1 === 0) {
      setNum1(clickedNum);
    } else {
      setNum1((prevNum) => prevNum.toString() + clickedNum.toString());
    }
  };

  const handleClick2 = (clickedNum) => {
    if (num2 === 0) {
      setNum2(clickedNum);
    } else {
      setNum2((prevNum) => prevNum.toString() + clickedNum.toString());
    }
  };

  const handleOperator = (operator) => {
    setOperator(operator);
  };

  const calculateResult = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    switch (operator) {
      case "+":
        setResult(parsedNum1 + parsedNum2);
        break;
      case "-":
        setResult(parsedNum1 - parsedNum2);
        break;
      case "*":
        setResult(parsedNum1 * parsedNum2);
        break;
      case "÷":
        setResult(parsedNum1 / parsedNum2);
        break;
      default:
        setResult(0);
        break;
    }
  };

  const handleClear = () => {
    setNum1(0);
  };

  const handleClear2 = () => {
    setNum2(0);
  };

  const handleStored = () => {
    setStored(result);
  };

  const handleDecimal = () => {
    if (!num1.toString().includes(".")) {
      setNum1(num1 + ".");
    }
  };

  const handleDecimal2 = () => {
    if (!num2.toString().includes(".")) {
      setNum2(num2 + ".");
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num1) => (
            <button key={num1} onClick={() => handleClick(num1)}>
              {num1}
            </button>
          ))}
          <button onClick={() => handleDecimal()}>.</button>
          <button onClick={() => handleClear()}>Clear</button>
          <button onClick={() => setNum1(stored)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((operator) => (
            <button key={operator} onClick={() => handleOperator(operator)}>
              {operator}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num2) => (
            <button key={num2} onClick={() => handleClick2(num2)}>
              {num2}
            </button>
          ))}
          <button onClick={() => handleDecimal2()}>.</button>
          <button onClick={() => handleClear2()}>Clear</button>
          <button onClick={() => setNum2(stored)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleStored()}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
