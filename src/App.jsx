import "./App.css"
import { useState } from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState("0")
  const [secondNumber, setSecondNumber] = useState("0")
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState(0)

  const ChangeFirstNumber = (e) => {
    if (e.target.innerText === "Clear") {
      setFirstNumber("0")
    } else {
      if (firstNumber === "0") {
        setFirstNumber(e.target.innerText)
      } else {
        setFirstNumber(firstNumber + e.target.innerText)
      }
    }
  }

  const ChangeSecondNumber = (e) => {
    if (e.target.innerText === "Clear") {
      setSecondNumber("0")
    } else {
      if (secondNumber === "0") {
        setSecondNumber(e.target.innerText)
      } else {
        setSecondNumber(secondNumber + e.target.innerText)
      }
    }
  }

  const ChangeOperator = (e) => {
    setOperator(e.target.innerText)
  }

  const EvaluateResult = () => {
    let calculationValue = 0
    switch (operator) {
      case "+":
        calculationValue = parseInt(firstNumber) + parseInt(secondNumber)
        break
      case "-":
        calculationValue = parseInt(firstNumber) - parseInt(secondNumber)
        break
      case "*":
        calculationValue = parseInt(firstNumber) * parseInt(secondNumber)
        break
      case "÷":
        calculationValue = parseInt(firstNumber) / parseInt(secondNumber)
        break
    }
    setResult(calculationValue)
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={(e) => ChangeFirstNumber(e)}>1</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>2</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>3</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>4</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>5</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>6</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>7</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>8</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>9</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>0</button>
          <button onClick={(e) => ChangeFirstNumber(e)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={(e) => ChangeOperator(e)}>+</button>
          <button onClick={(e) => ChangeOperator(e)}>-</button>
          <button onClick={(e) => ChangeOperator(e)}>*</button>
          <button onClick={(e) => ChangeOperator(e)}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={(e) => ChangeSecondNumber(e)}>1</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>2</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>3</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>4</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>5</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>6</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>7</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>8</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>9</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>0</button>
          <button onClick={(e) => ChangeSecondNumber(e)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => EvaluateResult()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
