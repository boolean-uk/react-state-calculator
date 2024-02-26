import { useState } from "react";
import "./App.css";

function App() {
  const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "*", "/"];

  const [number1, setNumber1] = useState("0");
  const [operator, setOperator] = useState("");
  const [number2, setNumber2] = useState("0");
  const [sum, setSum] = useState("0");

  const calculateSum = (number1, number2, op) => {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    switch (op) {
      case "+":
        setSum(number1 + number2);
        break;
      case "-":
        setSum(number1 - number2);
        break;
      case "*":
        setSum(number1 * number2);
        break;
      case "/":
        setSum(number1 / number2);
        break;
    }
  };

  const multipleNums = (newValue, current) => {
    if (current === "0") {
      return newValue.toString();
    } else {
      return current + newValue;
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number1}</p>
        <div className="numbers">
          {zeroToNine.map((number) => (
            <button
              key={number}
              onClick={
                () => setNumber1((previous) => multipleNums(number, previous))
              }
            >
              {number}
            </button>
          ))}
          <button onClick={() => setNumber1(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {operators.map((op) => (
            <button key={op} onClick={() => setOperator(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{number2}</p>
        <div className="numbers">
          {zeroToNine.map((number) => (
            <button
              key={number}
              onClick={() =>
                setNumber2((previous) => multipleNums(number, previous))
              }
            >
              {number}
            </button>
          ))}
          <button onClick={() => setNumber2(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={() => calculateSum(number1, number2, operator)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
