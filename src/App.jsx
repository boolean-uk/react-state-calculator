import React, { useState } from 'react';
import './App.css';

function App() {
  const [first, setFirst] = useState("0");
  const [second, setSecond] = useState("0");
  const [sign, setSign] = useState("+");
  const [result, setResult] = useState(0);
  const [store, setStore] = useState("");

  const updateValue = (value, isSecond) => {
    // Handle clear operation (empty string)
    if (value === "") {
      if (isSecond) {
        setSecond("0");
      } else {
        setFirst("0");
      }
      return;
    }
  
    // Prevent multiple leading zeros
    if (value === "0" && (isSecond ? second === "0" : first === "0")) {
      return; // Ignore additional leading zeros
    }
  
    // Prevent multiple decimals
    if (value === "." && (isSecond ? second.includes(".") : first.includes("."))) {
      return; // Ignore additional decimal points
    }
  
    // Replace leading zero with input (except for decimal point)
    if (isSecond && second === "0" && value !== ".") {
      setSecond(value);
      return;
    } else if (!isSecond && first === "0" && value !== ".") {
      setFirst(value);
      return;
    }
  
    // Append input if no previous conditions apply
    if (isSecond) {
      setSecond(prev => prev + value);
    } else {
      setFirst(prev => prev + value);
    }
  };

  const handleRecallFirst = () => {
    if (first === "0" && second === "0") {
      setFirst(store);
    } else {
      setFirst(store);
      setSecond('');
    }

  };

  const handleRecallSecond = () => {
    if (first === "0" && second === "0") {
      setFirst(store);
    } else {
      setFirst('');
      setSecond(store);
    }

  };
  

  const getResult = () => {
    let num1 = parseFloat(first);
    let num2 = parseFloat(second);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;

    let res;
    switch (sign) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "÷":
        if (num2 === 0) {
          res = "Error";
        } else {
          res = num1 / num2;
        }
        break;
      default:
        break;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].map((number) => (
            <button key={number} onClick={() => updateValue(number, false)}>
              {number}
            </button>
          ))}
          <button onClick={() => setFirst("")}>Clear</button>
          <button onClick={handleRecallFirst}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{sign}</p>
        <div className="numbers">
          {['+', '-', '*', '÷'].map((operation) => (
            <button key={operation} onClick={() => setSign(operation)}>
              {operation}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{second}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].map((number) => (
            <button key={number} onClick={() => updateValue(number, true)}>
              {number}
            </button>       
          ))}
          <button onClick={() => setSecond("")}>Clear</button>
          <button onClick={handleRecallSecond}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={getResult}>=</button>
          <button onClick={() => setStore(result)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
