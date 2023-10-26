import { useState } from "react"
import "./App.css"


function App() {

// state-related consts:
const [result, setResult] = useState(0)
const [numberLeft, setNumberLeft] = useState('0')
const [numberRight, setNumberRight] = useState('0')
const [operator, setOperator] = useState('')
const [storedResult, setStoredResult] = useState(0)

//event-related consts:

//core: render the selected numbers or operators:
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

// core: do the calculation and render the result
const add = () => {setResult(Number(numberLeft) + Number(numberRight))}
const subtract = () => {setResult(Number(numberLeft) - Number(numberRight))}
const multiply = () => {setResult(Number(numberLeft) * Number(numberRight))}
const divide = () => {setResult(Number(numberLeft) / Number(numberRight))}

const calculate = () => {
  if (operator === "+") {
    add()
  }
  if (operator === "-") {
    subtract()
  }
  if (operator === "*") {
    multiply()
  }
  if (operator === "/") {
    divide()
  }

}

//extension 1: append numbers
const handleDisplayOnClickLeft = () => {
  if(numberLeft === 0 || numberLeft === '0') {
    setNumberLeft(event.target.innerText)  
   } else {
    setNumberLeft(numberLeft + event.target.innerText)
  }
} 

const handleDisplayOnClickRight = () => {
  if(numberRight === 0 || numberRight === '0') {
    setNumberRight(event.target.innerText)  
   } else {
    setNumberRight(numberRight + event.target.innerText)
  }
} 

// extension 2: store and recall results
const store = () => setStoredResult(result)
const recallNumToLeft  = () => setNumberLeft(storedResult)
const recallNumToRight  = () => setNumberRight(storedResult)

// extension 3: adding and using decimal separators

const addDecimalSeparatorLeft = () => {
  if (numberLeft.includes('.')){
    return
  }
    setNumberLeft(numberLeft + '.')
} 

const addDecimalSeparatorRight = () => {
  if (numberRight.includes('.')){
    return
  }
    setNumberRight(numberRight + '.')
} 

//html: core and extension
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
          <button onClick={addDecimalSeparatorLeft}>.</button>
          <button onClick={() => {setNumberLeft('0')}}>Clear</button>
          <button onClick={recallNumToLeft}>Recall</button>
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
          <button onClick={addDecimalSeparatorRight}>.</button>
          <button onClick={() => {setNumberRight('0')}}>Clear</button>
          <button onClick={recallNumToRight}>Recall</button>
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
