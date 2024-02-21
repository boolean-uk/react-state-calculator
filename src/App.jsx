import "./App.css";
import { useState } from "react";

function App() {
  const [first, setFirst] = useState("0");
  const [second, setSecond] = useState("0");
  const [sign, setSign] = useState("+");
  const [result, setResult] = useState(0);
  const [store, setStore] = useState("");

  const firstUpdate = (val, res = false) => {
    if (res) {
      setFirst("");
      setFirst(val);
    } else if (val === "." && first.indexOf(".") !== 0) {
      if (first === "0") {
        setFirst("0.");
      }
      if (first !== "0" && first.indexOf(".") < 0) {
        setFirst(first + ".");
      }
    } else if (first[0] === "0" && first[1] !== "." && val !== "") {
      setFirst(val);
    } else if (val === "") {
      setFirst("0");
    } else {
      if (val !== ".") {
        setFirst(first + val);
      }
    }
  };

  const getResult = () => {
    if (sign === "+") {
      setResult(Number(first) + Number(second));
    } else if (sign === "-") {
      setResult(Number(first) - Number(second));
    } else if (sign === "*") {
      setResult(Number(first) * Number(second));
    } else if (sign === "÷") {
      setResult(Number(first) / Number(second));
    }
  };

  const secondUpdate = (val, res = false) => {
    if (res) {
      setSecond("");
      setSecond(val);
    } else if (val === "." && second.indexOf(".") !== 0) {
      if (second === "0") {
        setSecond("0.");
      }
      if (second !== "0" && second.indexOf(".") < 0) {
        setSecond(second + ".");
      }
    } else if (second[0] === "0" && second[1] !== "." && val !== "") {
      setSecond(val);
    } else if (val === "") {
      setSecond("0");
    } else {
      if (val !== ".") {
        setSecond(second + val);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          <button onClick={() => firstUpdate("1")}>1</button>
          <button onClick={() => firstUpdate("2")}>2</button>
          <button onClick={() => firstUpdate("3")}>3</button>
          <button onClick={() => firstUpdate("4")}>4</button>
          <button onClick={() => firstUpdate("5")}>5</button>
          <button onClick={() => firstUpdate("6")}>6</button>
          <button onClick={() => firstUpdate("7")}>7</button>
          <button onClick={() => firstUpdate("8")}>8</button>
          <button onClick={() => firstUpdate("9")}>9</button>
          <button onClick={() => firstUpdate("0")}>0</button>
          <button onClick={() => firstUpdate(".")}>.</button>
          <button onClick={() => firstUpdate("")}>Clear</button>
          <button onClick={() => firstUpdate(store, true)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{sign}</p>
        <div className="numbers">
          <button onClick={() => setSign("+")}>+</button>
          <button onClick={() => setSign("-")}>-</button>
          <button onClick={() => setSign("*")}>*</button>
          <button onClick={() => setSign("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{second}</p>
        <div className="numbers">
          <button onClick={() => secondUpdate("1")}>1</button>
          <button onClick={() => secondUpdate("2")}>2</button>
          <button onClick={() => secondUpdate("3")}>3</button>
          <button onClick={() => secondUpdate("4")}>4</button>
          <button onClick={() => secondUpdate("5")}>5</button>
          <button onClick={() => secondUpdate("6")}>6</button>
          <button onClick={() => secondUpdate("7")}>7</button>
          <button onClick={() => secondUpdate("8")}>8</button>
          <button onClick={() => secondUpdate("9")}>9</button>
          <button onClick={() => secondUpdate("0")}>0</button>
          <button onClick={() => secondUpdate(".")}>.</button>
          <button onClick={() => secondUpdate("")}>Clear</button>
          <button onClick={() => secondUpdate(store, true)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => getResult()}>=</button>
          <button onClick={() => setStore(result)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
