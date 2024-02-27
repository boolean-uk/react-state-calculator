import "./App.css"
import React, { useState } from 'react';

function App() {
  const [calcOneNumber, setCalcOneNumber] = useState('0');
  const [calcTwoNumber, setCalcTwoNumber] = useState('0');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('0');

  return (
    <div className="calculator">
      <div className="panel">
        <p>{calcOneNumber}</p>
        <div className="numbers">
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 1))}>1</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 2))}>2</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 3))}>3</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 4))}>4</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 5))}>5</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 6))}>6</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 7))}>7</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 8))}>8</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 9))}>9</button>
          <button onClick={() => setCalcOneNumber(setNumber(calcOneNumber, 0))}>0</button>
          <button onClick={() => setCalcOneNumber('0')}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{calcTwoNumber}</p>
        <div className="numbers">
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 1))}>1</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 2))}>2</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 3))}>3</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 4))}>4</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 5))}>5</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 6))}>6</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 7))}>7</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 8))}>8</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 9))}>9</button>
          <button onClick={() => setCalcTwoNumber(setNumber(calcTwoNumber, 0))}>0</button>
          <button onClick={() => setCalcTwoNumber('0')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => setResult(calculateResult(calcOneNumber, calcTwoNumber, operator))}>=</button>
        </div>
      </div>
    </div>
  )
}

function setNumber(current, number){
  return current === '0' ? number.toString() : current + number.toString()
}

function calculateResult(numOne, numTwo, operator){
  switch(operator){
    case '+': return (Number(numOne) + Number(numTwo)).toString()
    case '-': return (Number(numOne) - Number(numTwo)).toString()
    case '*': return (Number(numOne) * Number(numTwo)).toString()
    case '÷': return (Number(numOne) / Number(numTwo)).toString()
    default: return 'Error'
  }
  
}


export default App
