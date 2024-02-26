import "./App.css";
import { useState } from "react";

function newValue(currentVal, val) {
  if (currentVal === "0") {
    return val;
  } else {
    return currentVal + val;
  }
}

function App() {
  const [leftCalcValue, newLeftCalcValue] = useState("0");
  const [rightCalcValue, newRightCalcValue] = useState("0");
  const [operator, newOperator] = useState("+");
  const [result, newResult] = useState(0);

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftCalcValue}</p>
        <div className="numbers">
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "1"));
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "2"));
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "3"));
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "4"));
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "5"));
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "6"));
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "7"));
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "8"));
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "9"));
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              newLeftCalcValue(newValue(leftCalcValue, "0"));
            }}
          >
            0
          </button>
          <button onClick={() => newLeftCalcValue("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => newOperator("+")}>+</button>
          <button onClick={() => newOperator("-")}>-</button>
          <button onClick={() => newOperator("*")}>*</button>
          <button onClick={() => newOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightCalcValue}</p>
        <div className="numbers">
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "1"));
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "2"));
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "3"));
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "4"));
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "5"));
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "6"));
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "7"));
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "8"));
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "9"));
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              newRightCalcValue(newValue(rightCalcValue, "0"));
            }}
          >
            0
          </button>
          <button onClick={() => newRightCalcValue("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button
            onClick={() => {
              if (operator === "+") {
                newResult(
                  parseFloat(leftCalcValue) + parseFloat(rightCalcValue)
                );
              } else if (operator === "*") {
                newResult(
                  parseFloat(leftCalcValue) * parseFloat(rightCalcValue)
                );
              } else if (operator === "-") {
                newResult(
                  parseFloat(leftCalcValue) - parseFloat(rightCalcValue)
                );
              } else {
                newResult(
                  parseFloat(leftCalcValue) / parseFloat(rightCalcValue)
                );
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
