import "./App.css"
import { useState } from 'react'
import Numpad from "./components/Numpad"

function App() { 
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [symbol, setSymbol] = useState('+')
const [result, setResult] = useState(0)
const [storedNumber, setStoredNumber] = useState(0)

const handlerSymbol = (event) => {
  const value = event.target.innerText
  setSymbol(value)
}

const calculate = () => {
  const number1 = parseFloat(num1)
  const number2 = parseFloat(num2)
  let result = 0
  // result = eval(num1 + symbol + num2)
  if (symbol === '+') {
    result = number1 + number2
  } else if (symbol === '-') {
    result = number1 - number2
  } else if (symbol === '*') {
    result = number1 * number2
  } else if (symbol === '÷') {
    result = number1 / number2
  }
  setResult(result)
}

const store = () => {
  setStoredNumber(result)
}

  return (
    <div className="calculator">
      <Numpad num={num1} setNum={setNum1} storedNumber={storedNumber}/>
        <div className="panel">
          <p>{symbol}</p>
          <div className="numbers">
            <button onClick={handlerSymbol}>+</button>
            <button onClick={handlerSymbol}>-</button>
            <button onClick={handlerSymbol}>*</button>
            <button onClick={handlerSymbol}>÷</button>
          </div>
        </div>
        <Numpad num={num2} setNum={setNum2} storedNumber={storedNumber}/>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={calculate}>=</button>
            <button id="store-btn" onClick={store}>Store</button>
          </div>
        </div>
    </div>
  )
}

export default App
