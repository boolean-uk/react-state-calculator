import "./App.css";
import { useState } from "react";

// we will need 4 different states for the calculator to work
// first: updates first number OUTPUT a
// second: assign the operation OUTPUT OPERATION (+ - * /)
// thrid: updates second number OUTPUT b
// last: gives result >> combines all and gives result a OPERATION b and returns a result

// initial states
// 1st block 0

const initialCountOne = 1;
const initialCountTwo = 2;
const initialCountThree = 3;
const initialCountFour = 4;
const initialCountFive = 5;
const initialCountSix = 6;
const initialCountSeven = 7;
const initialCountEight = 8;
const initialCountNine = 9;
const initialCountZero = 0;
const initialCountClear = 0;

// 2nd block +
// 3rd block 0
// 4th block 0

// on click events will be modifying each state individually

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const handleResult = () => {
    let newResult = 0;
    if (operator === "+") {
      newResult = count1 + count2;
      setResult(newResult);
    }
    if (operator === "-") {
      newResult = count1 - count2;
      setResult(newResult);
    }
    if (operator === "*") {
      newResult = count1 * count2;
      setResult(newResult);
    }
    if (operator === "÷") {
      newResult = count1 / count2;
      setResult(newResult);
    }
  };

  return (
    <div className="calculator">
      {console.log(`count here`, count1)}
      {console.log(`operator here`, operator)}

      <div className="panel">
        <p placeholder="0">{count1}</p>
        <div className="numbers">
          <button onClick={() => setCount1(initialCountOne)}>1</button>
          <button onClick={() => setCount1(initialCountTwo)}>2</button>
          <button onClick={() => setCount1(initialCountThree)}>3</button>
          <button onClick={() => setCount1(initialCountFour)}>4</button>
          <button onClick={() => setCount1(initialCountFive)}>5</button>
          <button onClick={() => setCount1(initialCountSix)}>6</button>
          <button onClick={() => setCount1(initialCountSeven)}>7</button>
          <button onClick={() => setCount1(initialCountEight)}>8</button>
          <button onClick={() => setCount1(initialCountNine)}>9</button>
          <button onClick={() => setCount1(initialCountZero)}>0</button>
          <button onClick={() => setCount1(initialCountClear)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{count2}</p>
        <div className="numbers">
          <button onClick={() => setCount2(initialCountOne)}>1</button>
          <button onClick={() => setCount2(initialCountTwo)}>2</button>
          <button onClick={() => setCount2(initialCountThree)}>3</button>
          <button onClick={() => setCount2(initialCountFour)}>4</button>
          <button onClick={() => setCount2(initialCountFive)}>5</button>
          <button onClick={() => setCount2(initialCountSix)}>6</button>
          <button onClick={() => setCount2(initialCountSeven)}>7</button>
          <button onClick={() => setCount2(initialCountEight)}>8</button>
          <button onClick={() => setCount2(initialCountNine)}>9</button>
          <button onClick={() => setCount2(initialCountZero)}>0</button>
          <button onClick={() => setCount2(initialCountClear)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
