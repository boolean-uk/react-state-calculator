import { useState } from "react"
import "./App.css"

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [operator, setOperator] = useState('+')
  const [secondNumber, setSecondNumber] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [storedValue, setStoredValue] = useState(0)

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
        <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 1 : parseInt("" + firstNumber + 1))}>1</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 2 : parseInt("" + firstNumber + 2))}>2</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 3 : parseInt("" + firstNumber + 3))}>3</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 4 : parseInt("" + firstNumber + 4))}>4</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 5 : parseInt("" + firstNumber + 5))}>5</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 6 : parseInt("" + firstNumber + 6))}>6</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 7 : parseInt("" + firstNumber + 7))}>7</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 8 : parseInt("" + firstNumber + 8))}>8</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 9 : parseInt("" + firstNumber + 9))}>9</button>
          <button>.</button>
          <button onClick={() => setFirstNumber(
            firstNumber === 0 ? 0 : parseInt("" + firstNumber + 0))}>0</button>
          <button onClick={() => setFirstNumber(0)}>Clear</button>
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
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 1 : parseInt("" + secondNumber + 1))}>1</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 2 : parseInt("" + secondNumber + 2))}>2</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 3 : parseInt("" + secondNumber + 3))}>3</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 4 : parseInt("" + secondNumber + 4))}>4</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 5 : parseInt("" + secondNumber + 5))}>5</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 6 : parseInt("" + secondNumber + 6))}>6</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 7 : parseInt("" + secondNumber + 7))}>7</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 8 : parseInt("" + secondNumber + 8))}>8</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 9 : parseInt("" + secondNumber + 9))}>9</button>
          <button>.</button>
          <button onClick={() => setSecondNumber(
            secondNumber === 0 ? 0 : parseInt("" + secondNumber + 0))}>0</button>
          <button onClick={() => setSecondNumber(0)}>Clear</button>
          <button onClick={() => setSecondNumber(storedValue)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => 
            setAnswer(
              operator === '+' ? firstNumber + secondNumber : 
              operator === '-' ? firstNumber - secondNumber :
              operator === '*' ? firstNumber * secondNumber :
              operator === '÷' ? firstNumber / secondNumber :
              0 )}>=</button>
          <button onClick={() => setStoredValue(answer)}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
