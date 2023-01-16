import "./App.css"
import { useState } from "react"

function App() { 

  let [num1, updateNum1] = useState('0')
  let [operation, updateOperation] = useState('+')
  let [num2, updateNum2] = useState('0')
  let [result, updateResult] = useState(0)
  let [storedResult, updateStoredResult] = useState(undefined)


  // const handleNum1 = (event) => {
  //   num1 = 0
  //   updateNum1(num1 = Number(event.target.innerText))
  // }
  const handleNum1 = (event) => {
    if (event.target.innerText === '.') {
      if (!num1.includes('.')) {
        if (num1 === '0') {
          updateNum1(num1 = '0' + event.target.innerText)
        } else {
          updateNum1(num1 + event.target.innerText)
        }
      }
    } else {
      if (num1 ==='0') {
        updateNum1(num1 = event.target.innerText)
      } else {
        updateNum1(num1 + event.target.innerText)
      }
    }
  }

  const resetNum1 = () => {
    updateNum1(num1 = '0')
  }

  const handleOperation = (event) => {
    updateOperation(operation = event.target.innerText)
  }

  // const handleNum2 = (event) => {
  //   num2 = 0
  //   updateNum2(num2 = Number(event.target.innerText))
  // }
  const handleNum2 = (event) => {
    if (event.target.innerText === '.') {
      if (!num2.includes('.')) {
        if (num2 === '0') {
          updateNum2(num2 = '0' + event.target.innerText)
        } else {
          updateNum2(num2 + event.target.innerText)
        }
      }
    } else {
      if (num2 ==='0') {
        updateNum2(num2 = event.target.innerText)
      } else {
        updateNum2(num2 + event.target.innerText)
      }
    }
  }

  const resetNum2 = () => {
    updateNum2(num2 = '0')
  }

  const handleResult = () => {
    updateResult(result = getResult(num1, operation, num2))
    resetNum1()
    resetNum2()
  }

  const getResult = (num1, operation, num2) => {
    switch(operation) {
      case '+' : return Number(num1) + Number(num2)
      case '-' : return Number(num1) - Number(num2)
      case '*' : return Number(num1) * Number(num2)
      case '÷' : return Number(num1) / Number(num2)
      default: console.log('pls select a operation')
    }
  }

  const handleStore = () => {
    updateStoredResult(storedResult = result)
  }

    const buttonStyle = storedResult === undefined ? {display: 'none'} : {display: 'inline-block'}

  return (
    <div className="calculator">
        <div className="panel">
          <p>{num1}</p>
          <div className="numbers">
            <button onClick={handleNum1}>1</button>
            <button onClick={handleNum1}>2</button>
            <button onClick={handleNum1}>3</button>
            <button onClick={handleNum1}>4</button>
            <button onClick={handleNum1}>5</button>
            <button onClick={handleNum1}>6</button>
            <button onClick={handleNum1}>7</button>
            <button onClick={handleNum1}>8</button>
            <button onClick={handleNum1}>9</button>
            <button onClick={handleNum1}>.</button>
            <button onClick={handleNum1}>0</button>
            <button onClick={resetNum1}>Clear</button>
            <button onClick={handleNum1} style={buttonStyle}>{storedResult}</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operation}</p>
          <div className="numbers">
            <button onClick={handleOperation}>+</button>
            <button onClick={handleOperation}>-</button>
            <button onClick={handleOperation}>*</button>
            <button onClick={handleOperation}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{num2}</p>
          <div className="numbers">
            <button onClick={handleNum2}>1</button>
            <button onClick={handleNum2}>2</button>
            <button onClick={handleNum2}>3</button>
            <button onClick={handleNum2}>4</button>
            <button onClick={handleNum2}>5</button>
            <button onClick={handleNum2}>6</button>
            <button onClick={handleNum2}>7</button>
            <button onClick={handleNum2}>8</button>
            <button onClick={handleNum2}>9</button>
            <button onClick={handleNum2}>.</button>
            <button onClick={handleNum2}>0</button>
            <button onClick={resetNum2}>Clear</button>
            <button onClick={handleNum2} style={buttonStyle}>{storedResult}</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={handleResult}>=</button>
            <button onClick={handleStore}>Store</button>
          </div>
        </div>
    </div>
  )
}

export default App
