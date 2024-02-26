import { useState } from "react";
import "./App.css";

function App() {
  const [pan1, setPan1] = useState("0");
  const [pan2, setPan2] = useState("0");
  const [total, setTotal] = useState("0");
  const [symbol, setSymbol] = useState("+");
  const [store, setStore] = useState(0);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

  function newSymbol(event) {
    setSymbol(event.target.value);
  }

  function clear1() {
    setPan1("0");
  }

  function clear2() {
    setPan2("0");
  }
  function addNumber1(event) {
    const number = event.target.value;
    if (number === ".") {
      if (!pan1.includes(".")) {
        console.log(pan1);
        setPan1(pan1 + number);
      }
    } else {
      if (pan1 === "0") {
        setPan1(number);
      } else {
        setPan1(pan1 + number);
      }
    }
  }
  function addNumber2(event) {
    const number = event.target.value;
    if (number === ".") {
      if (!pan2.includes(".")) {
        setPan2(pan2 + number);
      }
    } else {
      if (pan2 === "0") {
        setPan2(number);
      } else {
        setPan2(pan2 + number);
      }
    }
  }
  function buttons1(number) {
    return (
      <button key={number} onClick={addNumber1} value={number}>
        {number}
      </button>
    );
  }
  function buttons2(number) {
    return (
      <button key={number} onClick={addNumber2} value={number}>
        {number}
      </button>
    );
  }
  function recall(event) {
    console.log(event.target.value);
    const panel = event.target.value;
    if (panel === "1") {
      setPan1(store);
    }
    if (panel === "2") {
      setPan2(store);
    }
  }

  function calc() {
    let result = 0;
    const a = parseFloat(pan1);
    const b = parseFloat(pan2);

    switch (symbol) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "÷":
        result = a / b;
        break;
    }
    setTotal(result);
  }
  return (
    <div className="calculator">
      <div className="panel">
        <p>{pan1}</p>
        <div className="numbers">
          {num.map(buttons1)}
          <button onClick={clear1}>Clear</button>
          <button value={1} onClick={recall}>
            Recall
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button value={"+"} onClick={newSymbol}>
            +
          </button>
          <button value={"-"} onClick={newSymbol}>
            -
          </button>
          <button value={"*"} onClick={newSymbol}>
            *
          </button>
          <button value={"÷"} onClick={newSymbol}>
            ÷
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{pan2}</p>
        <div className="numbers">
          {num.map(buttons2)}
          <button onClick={clear2}>Clear</button>
          <button value={2} onClick={recall}>
            Recall
          </button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={calc}>=</button>
          <button onClick={() => setStore(total)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
