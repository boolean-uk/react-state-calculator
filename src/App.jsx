import React, {useState} from 'react'

import "./App.css"

function App() {
  //Using use states to assign vaues and their "set-methods"
const [displayVal, setDisplayVal] = useState('0')
const [firstOp, setFirstOp] = useState('')
const [operator, setOperator] = useState('')
const [secondOp, setSecondOp] = useState('')
//handles the clicks for all the buttons
const handleButtonClick = (value) => {
  //handles clear button
  if (value === 'Clear') {
    setDisplayVal('0')
    setFirstOp('')
    setOperator('')
    setSecondOp('')
  }
  //handles the equals button, by checking if the firstnumber, operator and secondnumber has been clicked.
  else if (value === '=') {
    if (firstOp && operator && secondOp) {
    let res = 0  
    try {
      //switch case for the calculations, has to be float for divisions
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
      //res =  eval(`${firstOp} ${operator} ${secondOp}`); This could also work, but i opt for switch case
      setDisplayVal(res.toString())
      setFirstOp(res.toString())
      setOperator('')
      setSecondOp('')
    }
    catch (e) {
      setDisplayVal('Error')
      console.log(e)
    }
   }
  }
  //sets operator
  else if (['+', '-', '*', '÷'].includes(value)) {
    setOperator(value);
  }
  else {
    //Extension 1 code, so if a 1 is clicked, and a 2 right after on the same panel -> 12
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
