import "./App.css";

// create state for value1
import { useState } from "react";
// create state for action
// create state for secondValue
// create state for result

function App() {
  let [value1, setValue1] = useState(0);
  let [action, setAction] = useState("");
  let [secondValue, setValue2] = useState(0);
  let [result, setResult] = useState(0);

  function handleValue1() {
    setValue1((value1 = 1));
  }
  function handleValue2() {
    setValue1((value1 = 2));
  }
  function handleValue3() {
    setValue1((value1 = 3));
  }
  function handleValue4() {
    setValue1((value1 = 4));
  }
  function handleValue5() {
    setValue1((value1 = 5));
  }
  function handleValue6() {
    setValue1((value1 = 6));
  }
  function handleValue7() {
    setValue1((value1 = 7));
  }
  function handleValue8() {
    setValue1((value1 = 8));
  }
  function handleValue9() {
    setValue1((value1 = 9));
  }
  function handleValue0() {
    setValue1((value1 = 0));
  }
  function handleClear() {
    setValue1((value1 = 0));
  }
  // second value
  function secondValue1() {
    setValue2((secondValue = 1));
  }
  function secondValue2() {
    setValue2((secondValue = 2));
  }
  function secondValue3() {
    setValue2((secondValue = 3));
  }
  function secondValue4() {
    setValue2((secondValue = 4));
  }
  function secondValue5() {
    setValue2((secondValue = 5));
  }
  function secondValue6() {
    setValue2((secondValue = 6));
  }
  function secondValue7() {
    setValue2((secondValue = 7));
  }
  function secondValue8() {
    setValue2((secondValue = 8));
  }
  function secondValue9() {
    setValue2((secondValue = 9));
  }
  function secondValue0() {
    setValue2((secondValue = 0));
  }
  function secondClear() {
    setValue2((secondValue = 0));
  }
  // symbols
  function additionSymbol() {
    setAction((action = "+"));
  }
  function subSymbol() {
    setAction((action = "-"));
  }
  function multipleSymbol() {
    setAction((action = "*"));
  }
  function dividedSymbol() {
    setAction((action = "/"));
  }

  function finalResult() {
    if (action === "+") {
      setResult((result = value1 + secondValue));
    }
    if (action === "-") {
      setResult((result = value1 - secondValue));
    }
    if (action === "*") {
      setResult((result = value1 * secondValue));
    }
    if (action === "/") {
      setResult((result = value1 / secondValue));
    }
  }
  return (
    <div className="calculator">
      <div className="panel">
        <p>{value1}</p>
        <div className="numbers">
          {/* create event listners for the buttons */}
          <button onClick={handleValue1}>1</button>
          <button onClick={handleValue2}>2</button>
          <button onClick={handleValue3}>3</button>
          <button onClick={handleValue4}>4</button>
          <button onClick={handleValue5}>5</button>
          <button onClick={handleValue6}>6</button>
          <button onClick={handleValue7}>7</button>
          <button onClick={handleValue8}>8</button>
          <button onClick={handleValue9}>9</button>
          <button onClick={handleValue0}>0</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{action}</p>
        <div className="numbers">
          {/* create event listners for the buttons */}
          <button onClick={additionSymbol}>+</button>
          <button onClick={subSymbol}>-</button>
          <button onClick={multipleSymbol}>*</button>
          <button onClick={dividedSymbol}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondValue}</p>
        <div className="numbers">
          {/* create event listners for the buttons */}
          <button onClick={secondValue1}>1</button>
          <button onClick={secondValue2}>2</button>
          <button onClick={secondValue3}>3</button>
          <button onClick={secondValue4}>4</button>
          <button onClick={secondValue5}>5</button>
          <button onClick={secondValue6}>6</button>
          <button onClick={secondValue7}>7</button>
          <button onClick={secondValue8}>8</button>
          <button onClick={secondValue9}>9</button>
          <button onClick={secondValue0}>0</button>
          {/* add event listener to clear button to set as 0 */}
          <button onClick={secondClear}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          {/* create the event listener as render sum */}
          <button onClick={finalResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
