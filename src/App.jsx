import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("0");
  const [operation, setOperation] = useState("+");
  const [num2, setNum2] = useState("0");
  const [sum, setSum] = useState(0);

  function applyOperation() {
    setSum(eval(`${parseInt(num1)} ${operation} ${parseInt(num2)}`));
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => {
                if ((num1 + num.toString()).startsWith("0")) {
                  setNum1(num.toString());
                } else {
                  setNum1(num1 + num.toString());
                }
              }}
            >
              {num}
            </button>
          ))}
          <button onClick={() => setNum1("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => setOperation("+")}>+</button>
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick={() => setOperation("*")}>*</button>
          <button onClick={() => setOperation("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => {
                if ((num2 + num.toString()).startsWith("0")) {
                  setNum2(num.toString());
                } else {
                  setNum2(num2 + num.toString());
                }
              }}
            >
              {num}
            </button>
          ))}
          <button onClick={() => setNum2("0")}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={applyOperation}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
