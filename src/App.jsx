import "./App.css";
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [operationType, setOperationType] = useState("+");
  const [result, setResult] = useState("0");
  const [savedResults, setSavedResults] = useState([]);

  function calculate() {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    let res;
    switch (operationType) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "÷":
        res = a - b;
        break;

      default:
        break;
    }
    setResult(res);
    return res;
  }
  function inputNumber(curVal, addVal) {
    let returnVal;
    if (curVal.slice(-1) == "." && addVal === ".") return curVal;
    if (curVal === "0") {
      returnVal = addVal;
    } else {
      returnVal = curVal + addVal;
    }
    return returnVal;
  }

  function saveResult() {
    const resCalc = calculate();
    const res = {
      a: firstNumber,
      b: secondNumber,
      operation: operationType,
      result: resCalc,
    };
    setSavedResults([...savedResults, res]);
  }

  function OpenSaved(O) {
    console.log(O);
    setFirstNumber(O.a);
    setOperationType(O.operation);
    setSecondNumber(O.b);
    setResult(O.result);
  }
  console.log(savedResults);
  return (
    <>
      <div className="calculator center">
        <div className="panel ">
          <p>{firstNumber}</p>
          <div className="numbers">
            {Array.from({ length: 10 }, (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setFirstNumber(inputNumber(firstNumber, index.toString()))
                }
              >
                {index}
              </button>
            ))}
            <button onClick={() => setFirstNumber("0")}>Clear</button>
            <button
              onClick={() => setFirstNumber(inputNumber(firstNumber, "."))}
            >
              .
            </button>
          </div>
        </div>

        <div className="panel">
          <p>{operationType}</p>
          <div className="numbers">
            <button onClick={() => setOperationType("+")}>+</button>
            <button onClick={() => setOperationType("-")}>-</button>
            <button onClick={() => setOperationType("*")}>*</button>
            <button onClick={() => setOperationType("÷")}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondNumber}</p>
          <div className="numbers">
            {Array.from({ length: 10 }, (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setSecondNumber(inputNumber(secondNumber, index.toString()))
                }
              >
                {index}
              </button>
            ))}
            <button onClick={() => setSecondNumber("0")}>Clear</button>
            <button
              onClick={() => setSecondNumber(inputNumber(secondNumber, "."))}
            >
              .
            </button>
          </div>
        </div>
        <div className="panel answer">
          <p>= {result}</p>
          <div>
            <button onClick={() => calculate()}>=</button>
          </div>
        </div>
      </div>
      <div className="center2">
        <button onClick={() => saveResult()}>Save State</button>
      </div>
      <div className="center3">
        {savedResults.map((O, index) => (
          <div className="stored-result-item" key={index}>
            <p>{`Saved: ${O.a}${O.operation}${O.b}=${O.result}`}</p>
            <button onClick={(e) => OpenSaved(O)}>Open this result</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
