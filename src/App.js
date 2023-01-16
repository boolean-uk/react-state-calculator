import "./App.css";
import { useState } from "react";

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [operator, setOperator] = useState("+");
  const [secondNum, setSecondNum] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "1");
              }
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "2");
              }
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "3");
              }
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "4");
              }
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "5");
              }
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "6");
              }
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "7");
              }
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "8");
              }
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("1");
              } else {
                setFirstNum(firstNum + "9");
              }
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              if (firstNum === "0") {
                setFirstNum("0");
              } else {
                setFirstNum(firstNum + "0");
              }
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setFirstNum("0");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button
            onClick={() => {
              setOperator("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setOperator("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setOperator("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              setOperator("÷");
            }}
          >
            ÷
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "1");
              }
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "2");
              }
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "3");
              }
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "4");
              }
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "5");
              }
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "6");
              }
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "7");
              }
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "8");
              }
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setSecondNum("1");
              } else {
                setSecondNum(secondNum + "9");
              }
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              if (secondNum === "0") {
                setFirstNum("0");
              } else {
                setSecondNum(secondNum + "0");
              }
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setSecondNum("0");
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
              const firstInt = parseInt(firstNum);
              const secondInt = parseInt(secondNum);
              if (operator === "+") {
                setResult(firstInt + secondInt);
              }
              if (operator === "-") {
                setResult(firstInt - secondInt);
              }

              if (operator === "*") {
                setResult(firstInt * secondInt);
              }
              if (operator === "÷") {
                setResult(firstInt / secondInt);
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
