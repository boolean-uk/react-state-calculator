import { useState } from 'react'
import "./App.css"

function App() {
  const [leftNum, setLeftNum] = useState('0')
  const [operation, setOperation] = useState('-')
  const [rightNum, setRightNum] = useState('0')
  const [result, setResult] = useState('0')
  const [store, setStore] = useState('0')

  // Takes care of clicks and executes a function based on the section
  const handleClick = (event, section) => {
    switch (section) {
      case 1: // Left side numbers
        handleLeftClick(event); break;
      case 2: // Operations in the middle
        setOperation(event.target.textContent); break;
      case 3: // Right side numbers
        handleRightClick(event); break;
      case 4: // =
        handleResultClick(); break;
      case 5:
        setStore(result); break;
    }
  }

  const handleLeftClick = (event) => {
    if (event.target.textContent === 'Clear')
      setLeftNum(0)
    else if (event.target.textContent === 'Recall')
      setLeftNum(store)
    // If leftNum is already 0, replace it with the new value
    else if(leftNum == '0' && event.target.textContent != '.') 
      setLeftNum(event.target.textContent)
    else // Append to the number
      if (event.target.textContent != '.' || leftNum.indexOf('.') < 0)
      setLeftNum(leftNum + event.target.textContent)
  }

  const handleRightClick = (event) => {
    if (event.target.textContent === 'Clear')
      setRightNum(0)
    else if (event.target.textContent === 'Recall')
      setRightNum(store)
    // If rightNum is already 0, replace it with the new value
    else if(rightNum == '0' && event.target.textContent != '.') 
      setRightNum(event.target.textContent)
    else // Append to the number
    if (event.target.textContent != '.' || rightNum.indexOf('.') < 0)
      setRightNum(rightNum + event.target.textContent)
  }

  const handleResultClick = () => {
    switch (operation) {
      case '+': setResult(parseFloat(leftNum) + parseFloat(rightNum)); break;
      case '-': setResult(leftNum - rightNum); break;
      case '*': setResult(leftNum * rightNum); break;
      case '÷': setResult(leftNum / rightNum); break;
      default: {
        console.log('Unrecognized operation: ' + operation)
        setResult(0) // Should not be possible to get here...
      }
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNum}</p>
        <div className="numbers">
          <button onClick={event => handleClick(event, 1)}>1</button>
          <button onClick={event => handleClick(event, 1)}>2</button>
          <button onClick={event => handleClick(event, 1)}>3</button>
          <button onClick={event => handleClick(event, 1)}>4</button>
          <button onClick={event => handleClick(event, 1)}>5</button>
          <button onClick={event => handleClick(event, 1)}>6</button>
          <button onClick={event => handleClick(event, 1)}>7</button>
          <button onClick={event => handleClick(event, 1)}>8</button>
          <button onClick={event => handleClick(event, 1)}>9</button>
          <button onClick={event => handleClick(event, 1)}>0</button>
          <button onClick={event => handleClick(event, 1)}>.</button>
          <button onClick={event => handleClick(event, 1)}>Clear</button>
          <button onClick={event => handleClick(event, 1)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={event => handleClick(event, 2)}>+</button>
          <button onClick={event => handleClick(event, 2)}>-</button>
          <button onClick={event => handleClick(event, 2)}>*</button>
          <button onClick={event => handleClick(event, 2)}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightNum}</p>
        <div className="numbers">
          <button onClick={event => handleClick(event, 3)}>1</button>
          <button onClick={event => handleClick(event, 3)}>2</button>
          <button onClick={event => handleClick(event, 3)}>3</button>
          <button onClick={event => handleClick(event, 3)}>4</button>
          <button onClick={event => handleClick(event, 3)}>5</button>
          <button onClick={event => handleClick(event, 3)}>6</button>
          <button onClick={event => handleClick(event, 3)}>7</button>
          <button onClick={event => handleClick(event, 3)}>8</button>
          <button onClick={event => handleClick(event, 3)}>9</button>
          <button onClick={event => handleClick(event, 3)}>0</button>
          <button onClick={event => handleClick(event, 3)}>.</button>
          <button onClick={event => handleClick(event, 3)}>Clear</button>
          <button onClick={event => handleClick(event, 3)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={event => handleClick(event, 4)}>=</button>
          <button onClick={event => handleClick(event, 5)}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
