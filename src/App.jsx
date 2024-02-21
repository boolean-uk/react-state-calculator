import { useState } from "react"
import "./App.css"

function App() {

  const [firstNumber, setFirstNumber] = useState(0)
  const [operation, setOperation] = useState('+')
  const [secondNumber, setSecondNumber] = useState(0)
  const [answerNumber, setAnswer] = useState(0)

  const changeFirstNumber = (number) =>
  {
    if (number === null) setFirstNumber(0)
    else if (firstNumber === 0) setFirstNumber(number)
    else setFirstNumber(firstNumber.toString() + number.toString())
  }

  const changeOperation = (op) =>
  {
    setOperation(op)
  }

  const changeSecondNumber = (number) =>
  {
    if (number === null) setSecondNumber(0)
    else if (secondNumber === 0) setSecondNumber(number)
    else setSecondNumber(secondNumber.toString() + number.toString())
  }

  const calculate = () =>
  {
    if (operation === '+') setAnswer(parseInt(firstNumber) + parseInt(secondNumber))
    if (operation === '-') setAnswer(parseInt(firstNumber) - parseInt(secondNumber))
    if (operation === '*') setAnswer(parseInt(firstNumber) * parseInt(secondNumber))
    if (operation === '÷') setAnswer(parseInt(firstNumber) / parseInt(secondNumber))
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => changeFirstNumber(1)}>1</button>
          <button onClick={() => changeFirstNumber(2)}>2</button>
          <button onClick={() => changeFirstNumber(3)}>3</button>
          <button onClick={() => changeFirstNumber(4)}>4</button>
          <button onClick={() => changeFirstNumber(5)}>5</button>
          <button onClick={() => changeFirstNumber(6)}>6</button>
          <button onClick={() => changeFirstNumber(7)}>7</button>
          <button onClick={() => changeFirstNumber(8)}>8</button>
          <button onClick={() => changeFirstNumber(9)}>9</button>
          <button onClick={() => changeFirstNumber(0)}>0</button>
          <button onClick={() => changeFirstNumber(null)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => changeOperation('+')}>+</button>
          <button onClick={() => changeOperation('-')}>-</button>
          <button onClick={() => changeOperation('*')}>*</button>
          <button onClick={() => changeOperation('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => changeSecondNumber(1)}>1</button>
          <button onClick={() => changeSecondNumber(2)}>2</button>
          <button onClick={() => changeSecondNumber(3)}>3</button>
          <button onClick={() => changeSecondNumber(4)}>4</button>
          <button onClick={() => changeSecondNumber(5)}>5</button>
          <button onClick={() => changeSecondNumber(6)}>6</button>
          <button onClick={() => changeSecondNumber(7)}>7</button>
          <button onClick={() => changeSecondNumber(8)}>8</button>
          <button onClick={() => changeSecondNumber(9)}>9</button>
          <button onClick={() => changeSecondNumber(0)}>0</button>
          <button onClick={() => changeSecondNumber(null)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answerNumber}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
