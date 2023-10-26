import { useState } from "react"
import "./App.css"


//TODO: add if() to have result = 0 if clear is pressed
//TODO: const add
//TODO: const subtract
//TODO: const multiply
//TODO: const divide
//TODO: const displaySelectedNumber


// extensions
//TODO: const appendNumbers
//TODO: If the user presses a number while '0' is displayed, the number should replace '0' on the display. Subsequent numbers, including 0, are appended on to the display as usual
//TODO: store
//TODO: decimals


function App() {

const [result, setResult] = useState(0)

const [numberLeft, setNumberLeft] = useState(0)
const handleDisplayOnClickLeft = () => setNumberLeft(event.target.innerText) 

const [numberRight, setNumberRight] = useState(0)
const handleDisplayOnClickRight = () => setNumberRight(event.target.innerText) 

const [operator, setOperator] = useState('')

const displayAdd = () => { 
  setOperator('+')
}
const displaySubtract = () =>{
  setOperator('-')
}
const displayMultiply = () => {
  setOperator('*')
}
const displayDivide = () => {
  setOperator('/')
}

// const add = () => {setResult(parseInt(numberLeft) + parseInt(numberRight))}
// const subtract = () => {setResult(parseInt(numberLeft) - parseInt(numberRight))}
// const multiply = () => {setResult(parseInt(numberLeft) * parseInt(numberRight))}
// const divide = () => {setResult(parseInt(numberLeft) / parseInt(numberRight))}

// const calculate = () => {
//   if
// }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberLeft}</p>
        <div className="numbers">
          <button onClick={handleDisplayOnClickLeft}>1</button>
          <button onClick={handleDisplayOnClickLeft}>2</button>
          <button onClick={handleDisplayOnClickLeft}>3</button>
          <button onClick={handleDisplayOnClickLeft}>4</button>
          <button onClick={handleDisplayOnClickLeft}>5</button>
          <button onClick={handleDisplayOnClickLeft}>6</button>
          <button onClick={handleDisplayOnClickLeft}>7</button>
          <button onClick={handleDisplayOnClickLeft}>8</button>
          <button onClick={handleDisplayOnClickLeft}>9</button>
          <button onClick={handleDisplayOnClickLeft}>0</button>
          <button onClick={handleDisplayOnClickLeft}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={displayAdd}>+</button>
          <button onClick={displaySubtract}>-</button>
          <button onClick={displayMultiply}>*</button>
          <button onClick={displayDivide}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberRight}</p>
        <div className="numbers">
          <button onClick={handleDisplayOnClickRight}>1</button>
          <button onClick={handleDisplayOnClickRight}>2</button>
          <button onClick={handleDisplayOnClickRight}>3</button>
          <button onClick={handleDisplayOnClickRight}>4</button>
          <button onClick={handleDisplayOnClickRight}>5</button>
          <button onClick={handleDisplayOnClickRight}>6</button>
          <button onClick={handleDisplayOnClickRight}>7</button>
          <button onClick={handleDisplayOnClickRight}>8</button>
          <button onClick={handleDisplayOnClickRight}>9</button>
          <button onClick={handleDisplayOnClickRight}>0</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
