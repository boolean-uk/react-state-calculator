import { useState } from "react";
import "./App.css";

function App() {
  const [FirstNum, setFirstNum] = useState(0);
  const [SecondNum, setSecondNum] = useState(0);
  const [Operators, setOperator] = useState("+");
  const [answer, setAnswer] = useState(0);

  const calc = () => {
    let Value;

    Operators === "+"
      ? (Value = FirstNum + SecondNum)
      : Operators === "-"
      ? (Value = FirstNum - SecondNum)
      : Operators === "÷"
      ? (Value = FirstNum / SecondNum)
      : Operators === "*"
      ? (Value = FirstNum * SecondNum)
      : (Value = 0);

    FirstNum + SecondNum === 0 && Operators === "÷"
      ? setAnswer("Error")
      : setAnswer(Value);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{FirstNum}</p>
        <div className="numbers">
          <button onClick={() => setFirstNum(1)}>1</button>
          <button onClick={() => setFirstNum(2)}>2</button>
          <button onClick={() => setFirstNum(3)}>3</button>
          <button onClick={() => setFirstNum(4)}>4</button>
          <button onClick={() => setFirstNum(5)}>5</button>
          <button onClick={() => setFirstNum(6)}>6</button>
          <button onClick={() => setFirstNum(7)}>7</button>
          <button onClick={() => setFirstNum(8)}>8</button>
          <button onClick={() => setFirstNum(9)}>9</button>
          <button onClick={() => setFirstNum(0)}>0</button>
          <button onClick={() => setFirstNum(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{Operators}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{SecondNum}</p>
        <div className="numbers">
          <button onClick={() => setSecondNum(1)}>1</button>
          <button onClick={() => setSecondNum(2)}>2</button>
          <button onClick={() => setSecondNum(3)}>3</button>
          <button onClick={() => setSecondNum(4)}>4</button>
          <button onClick={() => setSecondNum(5)}>5</button>
          <button onClick={() => setSecondNum(6)}>6</button>
          <button onClick={() => setSecondNum(7)}>7</button>
          <button onClick={() => setSecondNum(8)}>8</button>
          <button onClick={() => setSecondNum(9)}>9</button>
          <button onClick={() => setSecondNum(0)}>0</button>
          <button onClick={() => setSecondNum(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calc}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
