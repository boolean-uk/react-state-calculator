import { useState } from "react";
import "./App.css";

const App = () => {
  const [leftNumber, setLeftNumber] = useState("0");
  const [rightNumber, setRightNumber] = useState("0");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  const handleLeftNumber = (num) => {
    if (leftNumber.startsWith("0")) {
      setLeftNumber(leftNumber.concat(num).replace("0", ""));
    } else {
      setLeftNumber(leftNumber.concat(num));
    }
  };

  const handleRightNumber = (num) => {
    if (rightNumber.startsWith("0")) {
      setRightNumber(rightNumber.concat(num).replace("0", ""));
    } else {
      setRightNumber(rightNumber.concat(num));
    }

  };

  const handleOperationSign = (sign) => {
    if (sign === "+") {
      setOperation("+");
    }

    if (sign === "-") {
      setOperation("-");
    }

    if (sign === "*") {
      setOperation("*");
    }

    if (sign === "÷") {
      setOperation("÷");
    }
  };

  const handleCompute = () => {
    if (operation === "+") {
      const total = Number(leftNumber) + Number(rightNumber);
      setResult(total);
    }

    if (operation === "-") {
      const total = Number(leftNumber) - Number(rightNumber);
      setResult(total);
    }

    if (operation === "*") {
      const total = Number(leftNumber) * Number(rightNumber);
      setResult(total);
    }

    if (operation === "÷") {
      const total = Number(leftNumber) / Number(rightNumber);
      setResult(total);
    }
  };

  const handleClear = () => {
    setLeftNumber("0");
    setRightNumber("0");
    setResult(0);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNumber}</p>
        <div className="numbers">
          <button onClick={() => handleLeftNumber("1")}>1</button>
          <button onClick={() => handleLeftNumber("2")}>2</button>
          <button onClick={() => handleLeftNumber("3")}>3</button>
          <button onClick={() => handleLeftNumber("4")}>4</button>
          <button onClick={() => handleLeftNumber("5")}>5</button>
          <button onClick={() => handleLeftNumber("6")}>6</button>
          <button onClick={() => handleLeftNumber("7")}>7</button>
          <button onClick={() => handleLeftNumber("8")}>8</button>
          <button onClick={() => handleLeftNumber("9")}>9</button>
          <button onClick={() => handleLeftNumber("0")}>0</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => handleOperationSign("+")}>+</button>
          <button onClick={() => handleOperationSign("-")}>-</button>
          <button onClick={() => handleOperationSign("*")}>*</button>
          <button onClick={() => handleOperationSign("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightNumber}</p>
        <div className="numbers">
          <button onClick={() => handleRightNumber("1")}>1</button>
          <button onClick={() => handleRightNumber("2")}>2</button>
          <button onClick={() => handleRightNumber("3")}>3</button>
          <button onClick={() => handleRightNumber("4")}>4</button>
          <button onClick={() => handleRightNumber("5")}>5</button>
          <button onClick={() => handleRightNumber("6")}>6</button>
          <button onClick={() => handleRightNumber("7")}>7</button>
          <button onClick={() => handleRightNumber("8")}>8</button>
          <button onClick={() => handleRightNumber("9")}>9</button>
          <button onClick={() => handleRightNumber("0")}>0</button>
          {/* <button onClick={() => handleClear}>Clear</button> */}
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleCompute}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
