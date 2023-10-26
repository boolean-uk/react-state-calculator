// 1. When the user presses a numbered button on either of the panels, the display above should be updated to show that number.

// 2. When user presses the clear button, the display should be set back to 0

// 3. When the user presses one of the operation buttons (+, -,*,÷) the operation display should be updated to show that operation.

// 4. When the user presses the equals button the answer display should be updated to show the result of the calculation.

import { useState } from "react"
import "./App.css"

function App() {

  // State
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('+')
  const [secondNumber, setSecondNumber] = useState('0')

  

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button value="1" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>1</button>
          <button value="2" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>2</button>
           <button value="3" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>3</button>
           <button value="4" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>4</button>
           <button value="5" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>5</button>
           <button value="6" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>6</button>
           <button value="7" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>7</button>
           <button value="8" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>8</button>
          <button value="9" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>9</button>
           <button value="0" onClick={(e) => setFirstNumber(firstNumber + e.target.value)}>0</button>
          <button value='' onClick={(e)=> setClear(clear + e.target.value)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
           <button value="+" onClick={(e)=> setFirstNumber(Number(firstNumber) + Number (secondNumber))}>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button value='1' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>1</button>
        <button value='2' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>2</button>
          <button value='3' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>3</button>
          <button value='4' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>4</button>
         <button value='5' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>5</button>
          <button value='6' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>6</button>
          <button value='7' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>7</button>
          <button value='8' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>8</button>
          <button value='9' onClick={(e)=> setSecondNumber(secondNumber + e.target.value)}>9</button>
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
