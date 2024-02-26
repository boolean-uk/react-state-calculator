import React, { useState } from "react";
import "./App.css";

function App() {
  const [numberPanelOne, setNumberPanelOne] = useState("0");
  const [numberPanelTwo, setNumberPanelTwo] = useState("0");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);
  const [store, setStore] = useState(null);
  const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operations = ["+", "-", "*", "÷"];

  const displayNumberPanelOne = (num) => {
    if (numberPanelOne === "0") {
      setNumberPanelOne(num.toString());
    } else {
      setNumberPanelOne(numberPanelOne + num);
    }
  };

  const displayNumberPanelTwo = (num) => {
    if (numberPanelTwo === "0") {
      setNumberPanelTwo(num.toString());
    } else {
      setNumberPanelTwo(numberPanelTwo + num);
    }
  };

  const displayOperation = (op) => {
    setOperation(op);
  };

  const calculateResult = () => {
    const num1 = parseInt(numberPanelOne);
    const num2 = parseInt(numberPanelTwo);

    switch (operation) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "÷":
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
        break;
    }
  };
  const handleStore = () => {
    setStore(result);
  };

  const handleRecallPanelOne = () => {
    if (store !== null) {
      setNumberPanelOne(store);
    }
  };
  const handleRecallPanelTwo = () => {
    if (store !== null) {
      setNumberPanelTwo(store);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberPanelOne}</p>
        <div className="numbers">
          {arrayNumbers.map((num) => (
            <button key={num} onClick={() => displayNumberPanelOne(num)}>
              {num}
            </button>
          ))}
          <button onClick={()=> setNumberPanelOne("0")}>Clear</button>
          <button onClick={() => handleRecallPanelOne()}>Recall</button>

        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {operations.map((op) => (
            <button key={op} onClick={() => displayOperation(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{numberPanelTwo}</p>
        <div className="numbers">
          {arrayNumbers.map((num) => (
            <button key={num} onClick={() => displayNumberPanelTwo(num)}>
              {num}
            </button>
          ))}
          <button onClick={()=>setNumberPanelTwo("0")}>Clear</button>
          <button onClick={() => handleRecallPanelTwo()}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculateResult}>=</button>
        </div>
        <div>
          <button onClick={() => handleStore()}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
