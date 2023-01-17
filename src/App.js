import "./App.css";


import { useState } from "react";

function App() {
  let [value1, setValue1] = useState(0);
  let [action, setAction] = useState("");
  let [secondValue, setValue2] = useState(0);
  let [result, setResult] = useState(0);


  const handleValue1 = (click) => {
    const inputValue = click.target.innerText

    if(value1 === 0) {
      setValue1(inputValue)
      console.log(setValue1)
    }else {
      setValue1(value1 + inputValue)
    }

  }

  const handleValue2 = (click) => {
    const inputValue = click.target.innerText

    if(secondValue === 0) {
      setValue2(inputValue)
      console.log(setValue2)
    }else {
      setValue2(secondValue + inputValue) 
    }
  }
  // clear button
  function handleClear() {
    setValue1(value1 = 0);
  }

  function secondClear() {
    setValue2(secondValue = 0);
  }
  // symbols
  function additionSymbol() {
    setAction(action = "+");
  }
  function subSymbol() {
    setAction(action = "-");
  }
  function multipleSymbol() {
    setAction(action = "*");
  }
  function dividedSymbol() {
    setAction(action = "/");
  }

  function finalResult() {
    if (action === "+") {
      setResult(parseInt(value1) + parseInt(secondValue));
    }
    if (action === "-") {
      setResult(value1 - secondValue);
    }
    if (action === "*") {
      setResult(value1 * secondValue);
    }
    if (action === "/") {
      setResult(value1 / secondValue);
    }
  
  }
  return (
    <div className="calculator">
      <div className="panel">
        <p>{value1}</p>
        <div className="numbers">
          {/* create event listners for the buttons */}
          <button onClick={handleValue1}>1</button>
          <button onClick={handleValue1}>2</button>
          <button onClick={handleValue1}>3</button>
          <button onClick={handleValue1}>4</button>
          <button onClick={handleValue1}>5</button>
          <button onClick={handleValue1}>6</button>
          <button onClick={handleValue1}>7</button>
          <button onClick={handleValue1}>8</button>
          <button onClick={handleValue1}>9</button>
          <button onClick={handleValue1}>0</button>
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
          <button onClick={handleValue2 }>1</button>
          <button onClick={handleValue2 }>2</button>
          <button onClick={handleValue2 }>3</button>
          <button onClick={handleValue2 }>4</button>
          <button onClick={handleValue2 }>5</button>
          <button onClick={handleValue2 }>6</button>
          <button onClick={handleValue2 }>7</button>
          <button onClick={handleValue2 }>8</button>
          <button onClick={handleValue2 }>9</button>
          <button onClick={handleValue2 }>0</button>
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
