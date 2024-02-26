import React, {useState} from 'react'

import "./App.css"

function App() {
const [displayVal, setDisplayVal] = useState('0')
const [firstOp, setFirstOp] = useState('')
const [operator, setOperator] = useState('')
const [secondOp, setSecondOp] = useState('')

const handleButtonClick = (value) => {
  if (value === 'Clear') {
    setDisplayVal('0')
    setFirstOp('')
    setOperator('')
    setSecondOp('')
  }
  else if (value === '=') {
    if (firstOp && operator && secondOp) {
    let res = 0  
    try {
      //
      switch(operator) {
        case '+':
        res = parseFloat(firstOp) + parseFloat(secondOp) 
        break
        case '-':
        res = parseFloat(firstOp) - parseFloat(secondOp) 
        break
        case '*':
        res = parseFloat(firstOp) * parseFloat(secondOp) 
        break
        case '÷':
        res = parseFloat(firstOp) / parseFloat(secondOp)
        break 

      }
      //res =  eval(`${firstOp} ${operator} ${secondOp}`);
      setDisplayVal(res.toString())
      setFirstOp(res.toString())
      setOperator('')
      setSecondOp('')
    }
    catch (e) {
      setDisplayVal('Error' + e)
    }
   }
  }
  else if (['+', '-', '*', '÷'].includes(value)) {
    setOperator(value);
  }
  else {
    if (!operator) {
      setFirstOp((prevValue) => (prevValue === '0' ? value : prevValue + value));
      setDisplayVal((prevValue) => (prevValue === '0' ? value : prevValue + value));
    } else {
      setSecondOp((prevValue) => prevValue + value);
      setDisplayVal((prevValue) => prevValue + value);
    }
  }
}
  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstOp}</p>
        <div className="numbers">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear'].map((value) => (
            <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {['+', '-', '*', '÷'].map((value) => ( 
            <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{secondOp}</p>
        <div className="numbers">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear'].map((value) => (
            <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
          ))}
        </div>
      </div>

      
      <div className="panel answer">
        <p>{displayVal}</p>
        <div>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
