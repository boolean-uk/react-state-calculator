import "./App.css";
import { useState } from "react";
import { NumPad } from './components/NumPad'
import { Operator } from "./components/Operator";
import { Result } from "./components/Result";


// we will need 4 different states for the calculator to work
// first: updates first number OUTPUT a
// second: assign the operation OUTPUT OPERATION (+ - * /)
// thrid: updates second number OUTPUT b
// last: gives result >> combines all and gives result a OPERATION b and returns a result

// initial states
// 1st block 0
// 2nd block +
// 3rd block 0
// 4th block 0

// on click events will be modifying each state individually
// we still need to work on double digits


function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);
  const [save, setSave] = useState(0)

  // <FirstDigit />


  const handleResult = () => {
    let newResult = 0;
    if (operator === "+") {
      newResult = parseInt(count1) + parseInt(count2);
      setResult(newResult);
    }
    if (operator === "-") {
      newResult = parseInt(count1) - parseInt(count2);
      setResult(newResult);
    }
    if (operator === "*") {
      newResult = parseInt(count1) * parseInt(count2);
      setResult(newResult);
    }
    if (operator === "÷") {
      newResult = parseInt(count1) / parseInt(count2);
      setResult(newResult);
    }

  };

  

  function saveResult () {
      console.log(result);
      setSave(result)
    }

    function displaySaved () {
      setCount1((result))
    }
    function displaySavedTwo () {
      setCount2((result))
    }


  return (
    <div className="calculator">
      <NumPad count={count1} setCount={setCount1} displaySaved ={displaySaved}/>

      <Operator operator={operator} setOperator={setOperator}/>

      <NumPad count={count2} setCount={setCount2} displaySaved ={displaySavedTwo}/>


      <Result result={result} handleResult={handleResult} saveResult={saveResult}/>
{/* 
      <div className="panel answer">
        <p>{result}</p>

        <div>
          <button onClick={handleResult}>=</button>
          <button onClick={saveResult}>&#9829;</button>
        </div>
      </div> */}

    </div>
  );
}

export default App;
