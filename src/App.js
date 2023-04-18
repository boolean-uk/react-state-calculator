import "./App.css"
import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState("0")
  const [number2, setNumber2] = useState("0")
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState(0)
  const [answer, setStoreAnswer] = useState(0)

  const assignNumber1 = (event) => {
    if (number1 === '0') {
      setNumber1(event.target.innerText)
      if (event.target.innerText === '.'){
        setNumber1(number1 + '.')
      }
    } else {
      if (event.target.innerText === '.') {
        if (number1.includes('.') == false) {
          setNumber1(number1 + '.')
        }
      } else {
        setNumber1(number1 + event.target.innerText)
      }
    }
    if (event.target.innerText === 'Clear') {
      setNumber1("0")
    }
    if (event.target.innerText === 'Recall') {
      setNumber1(answer.toString())
    }
  }


  const assignNumber2 = (event) => {
    if (number2 === '0') {
      setNumber2(event.target.innerText)
      if (event.target.innerText === '.'){
        setNumber2(number2 + '.')
      }
    } else {
      if (event.target.innerText === '.') {
        if (number2.includes('.') == false) {
          setNumber2(number2 + '.')
        }
      } else {
        setNumber2(number2 + event.target.innerText)
      }
    }
    if (event.target.innerText === 'Clear') {
      setNumber2("0")
    }
    if (event.target.innerText === 'Recall') {
      setNumber2(answer.toString())
    }
  }


  const assignOperator = (event) => {
    setOperator(event.target.innerText)
  }


  const assignResult = (event) => {
    if (operator === '+') {
      setResult(Number(number1) + Number(number2))
    } else if (operator === '-') {
      setResult(Number(number1) - Number(number2))
    } else if (operator === '*') {
      setResult(Number(number1) * Number(number2))
    } else {
      setResult(Number(number1) / Number(number2))
    }
  }

  
  const storeAnswer = (event) => {
    setStoreAnswer(result)
  }


  return (
    <div className="calculator">
        <div className="panel">
          <p>{number1}</p>
          <div className="numbers">
            <button onClick = {assignNumber1}>1</button>
            <button onClick = {assignNumber1}>2</button>
            <button onClick = {assignNumber1}>3</button>
            <button onClick = {assignNumber1}>4</button>
            <button onClick = {assignNumber1}>5</button>
            <button onClick = {assignNumber1}>6</button>
            <button onClick = {assignNumber1}>7</button>
            <button onClick = {assignNumber1}>8</button>
            <button onClick = {assignNumber1}>9</button>
            <button onClick = {assignNumber1}>0</button>
            <button onClick = {assignNumber1}>Clear</button>
            <button onClick = {assignNumber1}>Recall</button>
            <button onClick = {assignNumber1}>.</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick = {assignOperator}>+</button>
            <button onClick = {assignOperator}>-</button>
            <button onClick = {assignOperator}>*</button>
            <button onClick = {assignOperator}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{number2}</p>
          <div className="numbers">
            <button onClick = {assignNumber2}>1</button>
            <button onClick = {assignNumber2}>2</button>
            <button onClick = {assignNumber2}>3</button>
            <button onClick = {assignNumber2}>4</button>
            <button onClick = {assignNumber2}>5</button>
            <button onClick = {assignNumber2}>6</button>
            <button onClick = {assignNumber2}>7</button>
            <button onClick = {assignNumber2}>8</button>
            <button onClick = {assignNumber2}>9</button>
            <button onClick = {assignNumber2}>0</button>
            <button onClick = {assignNumber2}>Clear</button>
            <button onClick = {assignNumber2}>Recall</button>
            <button onClick = {assignNumber2}>.</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <button onClick = {storeAnswer}>store</button>
          <div>
            <button onClick = {assignResult}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
