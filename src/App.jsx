import "./App.css";
import { useState } from "react";

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
              if (leftCalcValue === "0") {
                newLeftCalcValue("1");
              } else {
                newLeftCalcValue(leftCalcValue + "1");
              }
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("2");
              } else {
                newLeftCalcValue(leftCalcValue + "2");
              }
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("3");
              } else {
                newLeftCalcValue(leftCalcValue + "3");
              }
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("4");
              } else {
                newLeftCalcValue(leftCalcValue + "4");
              }
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("5");
              } else {
                newLeftCalcValue(leftCalcValue + "5");
              }
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("6");
              } else {
                newLeftCalcValue(leftCalcValue + "6");
              }
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("7");
              } else {
                newLeftCalcValue(leftCalcValue + "7");
              }
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("8");
              } else {
                newLeftCalcValue(leftCalcValue + "8");
              }
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("9");
              } else {
                newLeftCalcValue(leftCalcValue + "9");
              }
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              if (leftCalcValue === "0") {
                newLeftCalcValue("0");
              } else {
                newLeftCalcValue(leftCalcValue + "0");
              }
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
              if (rightCalcValue === "0") {
                newRightCalcValue("1");
              } else {
                newRightCalcValue(rightCalcValue + "1");
              }
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("2");
              } else {
                newRightCalcValue(rightCalcValue + "2");
              }
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("3");
              } else {
                newRightCalcValue(rightCalcValue + "3");
              }
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("4");
              } else {
                newRightCalcValue(rightCalcValue + "4");
              }
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("5");
              } else {
                newRightCalcValue(rightCalcValue + "5");
              }
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("6");
              } else {
                newRightCalcValue(rightCalcValue + "6");
              }
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("7");
              } else {
                newRightCalcValue(rightCalcValue + "7");
              }
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("8");
              } else {
                newRightCalcValue(rightCalcValue + "8");
              }
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("9");
              } else {
                newRightCalcValue(rightCalcValue + "9");
              }
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              if (rightCalcValue === "0") {
                newRightCalcValue("0");
              } else {
                newRightCalcValue(rightCalcValue + "0");
              }
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              newRightCalcValue("0");
            }}
          >
            Clear
          </button>
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
