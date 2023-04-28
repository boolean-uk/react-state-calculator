import "./App.css"
import { useState } from 'react'


// we will need 4 different states for the calculator to work
// first: updates first number OUTPUT a
// second: assign the operation OUTPUT OPERATION (+ - * /)
// thrid: updates second number OUTPUT b
// last: gives result >> combines all and gives result a OPERATION b and returns a result 

// initial states 
// 1st block 0

const initialCountOne = 1
const initialCountTwo = 2
const initialCountThree = 3
const initialCountFour = 4
const initialCountFive = 5
const initialCountSix = 6
const initialCountSeven = 7
const initialCountEight = 8
const initialCountNine = 9
const initialCountZero = 0
const initialCountClear = 0

// 2nd block +
// 3rd block 0
// 4th block 0

// on click events will be modifying each state individually

function App() { 
  const [count, setCount] = useState(0)

  const handleOne = () => {
    setCount(initialCountOne)
  }
  const handleTwo = () => {
    setCount(initialCountTwo)
  }
  const handleThree = () => {
    setCount(initialCountThree)
  }
  const handleFour = () => {
    setCount(initialCountFour)
  }
  const handleFive = () => {
    setCount(initialCountFive)
  }
  const handleSix = () => {
    setCount(initialCountSix)
  }
  const handleSeven = () => {
    setCount(initialCountSeven)
  }
  const handleEight = () => {
    setCount(initialCountEight)
  }
  const handleNine = () => {
    setCount(initialCountNine)
  }
  const handleZero = () => {
    setCount(initialCountZero)
  }
  const handleClear = () => {
    setCount(initialCountClear)
  }





  return (
    <div className="calculator">
        <div className="panel">
      
          <p placeholder="0">{count}</p>
          <div className="numbers">
            <button onClick={handleOne}>1</button>
            <button onClick={handleTwo}>2</button>
            <button onClick={handleThree}>3</button>
            <button onClick={handleFour}>4</button>
            <button onClick={handleFive}>5</button>
            <button onClick={handleSix}>6</button>
            <button onClick={handleSeven}>7</button>
            <button onClick={handleEight}>8</button>
            <button onClick={handleNine}>9</button>
            <button onClick={handleZero}>0</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>+</p>
          <div className="numbers">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>0</p>
          <div>
            <button>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
