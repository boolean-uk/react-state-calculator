import "./App.css"
import { useState } from "react"

function App() {

  const [numOne, setNumOne] = useState(0)
  const [operator, setOperator] = useState("+")
  const [numTwo, setNumTwo] = useState(0)
  const [answer, setAnswer] = useState(0)

 const handleNumOne = (click) => {
  const inputNumber = click.target.innerText

  if (numOne === 0) {
    setNumOne(inputNumber)
  } else {
    setNumOne(numOne + inputNumber)
  }
 }

 const handleNumTwo = (click) => {
  const inputNumber = click.target.innerText

  if (numTwo === 0) {
    setNumTwo(inputNumber)
  } else {
    setNumTwo(numTwo + inputNumber)
  }
 }

  //calculation
  function calculate() {
    JSON.parse(numOne)
    JSON.parse(numTwo)

    if (operator === "+") {
      setAnswer( numOne + numTwo)
    }
    else if (operator === "-") {
      setAnswer(numOne - numTwo)
    } else if (operator === "*") {
      setAnswer(numOne * numTwo)
    }
    else if (operator === "÷") {
      setAnswer(numOne / numTwo)
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={handleNumOne}>1</button>
          <button onClick={handleNumOne}>2</button>
          <button onClick={handleNumOne}>3</button>
          <button onClick={handleNumOne}>4</button>
          <button onClick={handleNumOne}>5</button>
          <button onClick={handleNumOne}>6</button>
          <button onClick={handleNumOne}>7</button>
          <button onClick={handleNumOne}>8</button>
          <button onClick={handleNumOne}>9</button>
          <button onClick={handleNumOne}>0</button>
          <button onClick={() => setNumOne(0)}>Clear</button>
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
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={handleNumTwo}>1</button>
          <button onClick={handleNumTwo}>2</button>
          <button onClick={handleNumTwo}>3</button>
          <button onClick={handleNumTwo}>4</button>
          <button onClick={handleNumTwo}>5</button>
          <button onClick={handleNumTwo}>6</button>
          <button onClick={handleNumTwo}>7</button>
          <button onClick={handleNumTwo}>8</button>
          <button onClick={handleNumTwo}>9</button>
          <button onClick={handleNumTwo}>0</button>
          <button onClick={() => setNumTwo(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
