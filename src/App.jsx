import "./App.css";
import { useState } from "react";

function App() {
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState("0");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);
  const [storedResult, setStoredResult] = useState("");

  const INPUTVALUES = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "Clear",
    "Recall",
  ];

  const firstValueUpdate = (val, res = false) => {
    if (res) {
      setFirstValue("");
      setFirstValue(val);
    } else if (val === "." && firstValue.indexOf(".") !== 0) {
      if (firstValue === "0") {
        setFirstValue("0.");
      }
      if (firstValue !== "0" && firstValue.indexOf(".") < 0) {
        setFirstValue(firstValue + ".");
      }
    } else if (firstValue[0] === "0" && firstValue[1] !== "." && val !== "") {
      setFirstValue(val);
    } else if (val === "") {
      setFirstValue("0");
    } else {
      if (val !== ".") {
        setFirstValue(firstValue + val);
      }
    }
  };

  const computeResult = () => {
    if (operation === "+") {
      setResult(Number(firstValue) + Number(secondValue));
    } else if (operation === "-") {
      setResult(Number(firstValue) - Number(secondValue));
    } else if (operation === "*") {
      setResult(Number(firstValue) * Number(secondValue));
    } else if (operation === "÷") {
      setResult(Number(firstValue) / Number(secondValue));
    }
  };

  const secondValueUpdate = (val, res = false) => {
    if (res) {
      setSecondValue("");
      setSecondValue(val);
    } else if (val === "." && secondValue.indexOf(".") !== 0) {
      if (secondValue === "0") {
        setSecondValue("0.");
      }
      if (secondValue !== "0" && secondValue.indexOf(".") < 0) {
        setSecondValue(secondValue + ".");
      }
    } else if (secondValue[0] === "0" && secondValue[1] !== "." && val !== "") {
      setSecondValue(val);
    } else if (val === "") {
      setSecondValue("0");
    } else {
      if (val !== ".") {
        setSecondValue(secondValue + val);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstValue}</p>
        <div className="numbers">
          {INPUTVALUES.map((val) => {
            if (val === "Recall") {
              return (
                <button
                  key={val}
                  onClick={() => firstValueUpdate(storedResult, true)}
                >
                  {val}
                </button>
              );
            }
            if (val === "Clear") {
              return (
                <button key={val} onClick={() => firstValueUpdate("")}>
                  {val}
                </button>
              );
            }
            return (
              <button key={val} onClick={() => firstValueUpdate(val)}>
                {val}
              </button>
            );
          })}
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
        <p>{secondValue}</p>
        <div className="numbers">
          {INPUTVALUES.map((val) => {
            if (val === "Recall") {
              return (
                <button
                  key={val}
                  onClick={() => secondValueUpdate(storedResult, true)}
                >
                  {val}
                </button>
              );
            }
            if (val === "Clear") {
              return (
                <button key={val} onClick={() => secondValueUpdate("")}>
                  {val}
                </button>
              );
            }
            return (
              <button key={val} onClick={() => secondValueUpdate(val)}>
                {val}
              </button>
            );
          })}
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => computeResult()}>=</button>
          <button onClick={() => setStoredResult(result)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
