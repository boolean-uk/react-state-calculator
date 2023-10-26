import "./App.css"
import { useState } from "react"

function App() {

  const [number, setNumber] = useState('0')
  const [operator, setOperator] = useState('')
  const [numberTwo, setNumberTwo] = useState('0');
  const [total, setTotal] = useState('0')

  const handleNumber = (event) => {
    if (number === '0') {
      setNumber(event.target.innerText)
    } else {
      setNumber(number + event.target.innerText)
    }
  }

  const handleOperator = (event) => setOperator(event.target.innerText)

  const handleNumberTwo = (event) => {
    if (numberTwo === '0') {
      setNumberTwo(event.target.innerText)
    } else {
      setNumberTwo(numberTwo + event.target.innerText)
    }
  }

  const handleTotal = () => {
    let firstNumber = parseFloat(number)
    let secondNumber = parseFloat(numberTwo)
    let sum = 0
    if (operator === "+") {
      console.log(firstNumber)
      sum = firstNumber + secondNumber
    } else if (operator === "-") {
      sum = firstNumber - secondNumber
    } else if (operator === "*") {
      sum = firstNumber * secondNumber
    }else if (operator === "/") {
      sum = firstNumber / secondNumber
    }
    setTotal(sum.toFixed(4))
  }

      return (
        <div className="calculator">
          <div className="panel">
            <p>{number}</p>
            <div className="numbers">
              <button onClick={handleNumber}>1</button>
              <button onClick={handleNumber}>2</button>
              <button onClick={handleNumber}>3</button>
              <button onClick={handleNumber}>4</button>
              <button onClick={handleNumber}>5</button>
              <button onClick={handleNumber}>6</button>
              <button onClick={handleNumber}>7</button>
              <button onClick={handleNumber}>8</button>
              <button onClick={handleNumber}>9</button>
              <button onClick={handleNumber}>0</button>
              <button onClick={handleNumber}>.</button>
              <button onClick={() => setNumber('0')}>Clear</button>
              <button>Recall</button>
            </div>
          </div>

          <div className="panel">
            <p>{operator}</p>
            <div className="numbers">
              <button onClick={handleOperator}>+</button>
              <button onClick={handleOperator}>-</button>
              <button onClick={handleOperator}>*</button>
              <button onClick={handleOperator}>÷</button>
            </div>
          </div>

          <div className="panel">
            <p>{numberTwo}</p>
            <div className="numbers">
              <button value={'1'} onClick={handleNumberTwo}>1</button>
              <button value={'2'} onClick={handleNumberTwo}>2</button>
              <button value={'3'} onClick={handleNumberTwo}>3</button>
              <button value={'4'} onClick={handleNumberTwo}>4</button>
              <button value={'5'} onClick={handleNumberTwo}>5</button>
              <button value={'6'} onClick={handleNumberTwo}>6</button>
              <button value={'7'} onClick={handleNumberTwo}>7</button>
              <button value={'8'} onClick={handleNumberTwo}>8</button>
              <button value={'9'} onClick={handleNumberTwo}>9</button>
              <button value={'0'} onClick={handleNumberTwo}>0</button>
              <button value={'0'} onClick={handleNumberTwo}>.</button>
              <button onClick={() => setNumberTwo('0')}>Clear</button>
              <button>Recall</button>
            </div>
          </div>
          <div className="panel answer">
            <p>{total}</p>
            <div>
              <button onClick={handleTotal}>=</button>
              <button>Store</button>
            </div>
          </div>
        </div>
      )
    }

    export default App
