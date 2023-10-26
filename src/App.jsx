import React, { useState } from 'react'
/*import Decimal from 'decimal.js'  i imported this because it doesn't handle decimal so i install first on the terminal npm install decimal.js */
import "./App.css"

function App() {
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState('') 
  //const isZeroDisplayed = display === '0';


  /*const handleNumberClick = (number) => {
    if (isZeroDisplayed) {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }*/

  const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }
  
  const handleClearClick = () => {
    setDisplay('0')
    setOperation('')
  }

  const handleOperationClick = (operator) => {
    if (operation === '') {
      setOperation(operator)
      setDisplay(display + ' ' + operator + ' ')
    }
  }

  const handleEqualsClick = () => {
    if (operation !== '') {
      const parts = display.split(' ')
      if (parts.length === 3) {
        const num1 = parseFloat(parts[0]) // this can be change to Decimal 
        const num2 = parseFloat(parts[2]) // same here 
        switch (operation) {
          case '+':
            setDisplay((num1 + num2).toString()) 
            break
          case '-':
            setDisplay((num1 - num2).toString()) 
            break
          case '*':
            setDisplay((num1 * num2).toString())
            break
          case '.':
            setDisplay((num1 . num2).toString())
            break
          case '÷':
            if (num2 !== 0) {
              setDisplay((num1 / num2).toString())
            } else {
              setDisplay('Error')
            }
            break
          default:
            break
        }
        setOperation('')
      }
    }
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ['+', '-', '*', '÷' , '.'];

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display}</p>
        <div className="numbers">
          {numbers.map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {operators.map((operator) => (
            <button key={operator} onClick={() => handleOperationClick(operator)}>
              {operator}
            </button>
          ))}
        </div>
      </div>
      
      <div className="panel">
        <p>0</p>
        <div className="numbers">
          {numbers.map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
