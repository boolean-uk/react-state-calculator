import "./App.css"
import { useState } from 'react'

function App() { 

const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [symbol, setSymbol] = useState('+')
const [result, setResult] = useState(0) // TODO: remove
const [storedNumber, setStoredNumber] = useState(0)

const handlerNum1 = (event) => {
  const value = event.target.innerText
  if (num1 == 0) {
    setNum1(value)
  } else {
    setNum1(num1 + value)
  } 
}

const handlerNum2 = (event) => {
  const value = event.target.innerText
  if (num2 == 0){
    setNum2(value)
  } else {
    setNum2(num2 + value)
  }
}

const handlerClearNum1 = () => {
  setNum1(0)
}

const handlerClearNum2 = () => {
  setNum2(0)
}

const handlerSymbol = (event) => {
  const value = event.target.innerText
  setSymbol(value)
}

const calculate = () => {
  const int1 = parseInt(num1)
  const int2 = parseInt(num2)
  let result = 0
  if (symbol === '+') {
    result = int1 + int2
  } else if (symbol === '-') {
    result = int1 - int2
  } else if (symbol === '*') {
    result = int1 * int2
  } else if (symbol === '÷') {
    result = int1 / int2
  }
  setResult(result)
}

const store = () => {
  setStoredNumber(result)
}

const recallNum1 = () => {
  setNum1(storedNumber)
}

const recallNum2 = () => {
  setNum2(storedNumber)
}


  return (
    <div className="calculator">
        <div className="panel">
          <p>{num1}</p>
          <div className="numbers">
            <button onClick={handlerNum1}>1</button>
            <button onClick={handlerNum1}>2</button>
            <button onClick={handlerNum1}>3</button>
            <button onClick={handlerNum1}>4</button>
            <button onClick={handlerNum1}>5</button>
            <button onClick={handlerNum1}>6</button>
            <button onClick={handlerNum1}>7</button>
            <button onClick={handlerNum1}>8</button>
            <button onClick={handlerNum1}>9</button>
            <button onClick={handlerNum1}>0</button>
            <button onClick={handlerClearNum1}>Clear</button>
            <button onClick={recallNum1}>Recall</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{symbol}</p>
          <div className="numbers">
            <button onClick={handlerSymbol}>+</button>
            <button onClick={handlerSymbol}>-</button>
            <button onClick={handlerSymbol}>*</button>
            <button onClick={handlerSymbol}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{num2}</p>
          <div className="numbers">
            <button onClick={handlerNum2}>1</button>
            <button onClick={handlerNum2}>2</button>
            <button onClick={handlerNum2}>3</button>
            <button onClick={handlerNum2}>4</button>
            <button onClick={handlerNum2}>5</button>
            <button onClick={handlerNum2}>6</button>
            <button onClick={handlerNum2}>7</button>
            <button onClick={handlerNum2}>8</button>
            <button onClick={handlerNum2}>9</button>
            <button onClick={handlerNum2}>0</button>
            <button onClick={handlerClearNum2}>Clear</button>
            <button onClick={recallNum2}>Recall</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={calculate}>=</button>
            <button onClick={store}>Store</button>
          </div>
        </div>
    </div>
  )
}

export default App
