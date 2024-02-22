import { useState } from "react"
import "./App.css"

function App() {
  const [firstNumber, setFirstNumber] = useState("0")
  const [operator, setOperator] = useState('+')
  const [secondNumber, setSecondNumber] = useState("0")
  const [answer, setAnswer] = useState("0")
  const [storedValue, setStoredValue] = useState("0")

  const Calculate = () => {
    let firstValue = parseFloat(firstNumber)
    let secondValue = parseFloat(secondNumber)

    if (operator === '+') {
      setAnswer((firstValue + secondValue).toString())
    } else if (operator === '-') {
      setAnswer((firstValue - secondValue).toString())
    } else if (operator === '*') {
      setAnswer((firstValue * secondValue).toString())
    } else if (operator === '÷') {
      setAnswer((firstValue / secondValue).toFixed())
    }
  }

  const AppendToFirst = (number) => {
    if (firstNumber === "0") {
      setFirstNumber("" + number)
    } else {
      setFirstNumber("" + firstNumber + number)
    }
  }

  const AppendToSecond = (number) => {
    if (secondNumber === "0") {
      setSecondNumber("" + number)
    } else {
      setSecondNumber("" + secondNumber + number)
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">

          <button onClick={() => AppendToFirst(1)}>1</button>
          <button onClick={() => AppendToFirst(2)}>2</button>
          <button onClick={() => AppendToFirst(3)}>3</button>
          <button onClick={() => AppendToFirst(4)}>4</button>
          <button onClick={() => AppendToFirst(5)}>5</button>
          <button onClick={() => AppendToFirst(6)}>6</button>
          <button onClick={() => AppendToFirst(7)}>7</button>
          <button onClick={() => AppendToFirst(8)}>8</button>
          <button onClick={() => AppendToFirst(9)}>9</button>
          <button onClick={() => 
          {
            if (!firstNumber.includes(".")) 
              setFirstNumber(firstNumber + ".")
          }
          }>.</button>
          <button onClick={() => AppendToFirst(0)}>0</button>
          <button onClick={() => setFirstNumber("0")}>Clear</button>
          <button onClick={() => setFirstNumber(storedValue)}>Recall</button>
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
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => AppendToSecond(1)}>1</button>
          <button onClick={() => AppendToSecond(2)}>2</button>
          <button onClick={() => AppendToSecond(3)}>3</button>
          <button onClick={() => AppendToSecond(4)}>4</button>
          <button onClick={() => AppendToSecond(5)}>5</button>
          <button onClick={() => AppendToSecond(6)}>6</button>
          <button onClick={() => AppendToSecond(7)}>7</button>
          <button onClick={() => AppendToSecond(8)}>8</button>
          <button onClick={() => AppendToSecond(9)}>9</button>
          <button onClick={() => 
          {
            if (!secondNumber.includes(".")) 
              setFirstNumber(secondNumber + ".")
          }
          }>.</button>
          <button onClick={() => AppendToFirst(0)}>0</button>
          <button onClick={() => setSecondNumber("0")}>Clear</button>
          <button onClick={() => setSecondNumber(storedValue)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => Calculate()}>=</button>
          <button onClick={() => setStoredValue(answer)}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
