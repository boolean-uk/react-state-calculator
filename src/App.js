import "./App.css"
import { useState } from 'react'

function App() {
  console.log("CALCULATOR REBOOT")
  
  // Box 1
  const [start_val, setNumber] = useState("")
  const clear = () => setNumber('')
  
  // Box 1 number input
  const number_Input = (event) =>{
    console.log('start',start_val)
    console.log('value from button',event.target.innerText)
    setNumber(start_val + event.target.innerText)
  }
  console.log('Box 1:', start_val)

  // Operator
  const [operator, setOperator] = useState("+")
  console.log("Operator:",operator)

  // Operator selection
  const whichOperator = (select) => {
    setOperator(select.target.innerText)
  }

  // Box 2
  const [second_val, setSecondNumber] = useState("")
  const clear_2 = () => setSecondNumber('')

  // Box 2 Number input
  const number_Input_2 = (event) =>{
    console.log('start',second_val)
    console.log('value from button',event.target.innerText)
    setSecondNumber(second_val + event.target.innerText)//
  }
  console.log('Box 2:', second_val)

  // Outcome
  const [result, setResult] = useState(0)
  // Calculate the outcome
  let outcome
  switch (operator) {
    case "+":
      outcome = parseInt(start_val) + parseInt(second_val);
      break;
    case "-":
      outcome = parseInt(start_val) - parseInt(second_val);
      break;
    case "*":
      outcome = parseInt(start_val) * parseInt(second_val);
      break;
    case "÷":
      outcome = parseInt(start_val) / parseInt(second_val);
      break;
  }
  console.log("Outcome:",outcome)
  // Update the result
  const updateResult = () => setResult(outcome)

  return (
    <div className="calculator">
        <div className="panel">
          <p className="start_value"> {start_val} </p>
          <div className="numbers">
            <button onClick={number_Input}>1</button>
            <button onClick={number_Input}>2</button>
            <button onClick={number_Input}>3</button>
            <button onClick={number_Input}>4</button>
            <button onClick={number_Input}>5</button>
            <button onClick={number_Input}>6</button>
            <button onClick={number_Input}>7</button>
            <button onClick={number_Input}>8</button>
            <button onClick={number_Input}>9</button>
            <button onClick={number_Input}>0</button>
            <button onClick={clear}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p> {operator} </p>
          <div className="numbers">
            <button onClick={whichOperator}>+</button>
            <button onClick={whichOperator}>-</button>
            <button onClick={whichOperator}>*</button>
            <button onClick={whichOperator}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p className="second_value">{second_val}</p>
          <div className="numbers">
            <button onClick={number_Input_2}>1</button>
            <button onClick={number_Input_2}>2</button>
            <button onClick={number_Input_2}>3</button>
            <button onClick={number_Input_2}>4</button>
            <button onClick={number_Input_2}>5</button>
            <button onClick={number_Input_2}>6</button>
            <button onClick={number_Input_2}>7</button>
            <button onClick={number_Input_2}>8</button>
            <button onClick={number_Input_2}>9</button>
            <button onClick={number_Input_2}>0</button>
            <button onClick={clear_2}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={updateResult}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App