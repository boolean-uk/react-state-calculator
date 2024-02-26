import { useState } from 'react'
import "./App.css"

function App() {
  const [leftNum, setLeftNum] = useState(0)
  const [operation, setOperation] = useState('-')
  const [rightNum, setRightNum] = useState(0)
  const [result, setResult] = useState(0)

  const handleClick = (event, section) => {
    switch (section) {
      case 1:
        handleLeftClick(event); break;
      case 2:
        handleOperationClick(event); break; 
      case 3: 
        handleRightClick(event); break;
      case 4: 
        handleResultClick(); break;
    }
  }

  const handleLeftClick = (event) => {
    if (event.target.textContent === 'Clear')
      setLeftNum(0)

    else if(leftNum == 0) 
      setLeftNum(event.target.textContent)
    else 
      setLeftNum(leftNum + event.target.textContent)
  }

  const handleOperationClick = (event) => {
    setOperation(event.target.textContent)
  }

  const handleRightClick = (event) => {
    if (event.target.textContent === 'Clear')
      setRightNum(0)

    else if(rightNum == 0) 
      setRightNum(event.target.textContent)
    else 
      setRightNum(rightNum + event.target.textContent)
  }

  const handleResultClick = () => {
    switch (operation) {
      case '+': setResult(parseInt(leftNum) + parseInt(rightNum)); break;
      case '-': setResult(leftNum - rightNum); break;
      case '*': setResult(leftNum * rightNum); break;
      case '÷': setResult(leftNum / rightNum); break;
      default: setResult(0)
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
          <button onClick={event => handleClick(event, 1)}>Clear</button>
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
          <button onClick={event => handleClick(event, 3)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={event => handleClick(event, 4)}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
