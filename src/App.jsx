import "./App.css"
import { useState } from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState("0")
  const [firstNumberDecimal, setFirstNumberDecimal] = useState(false)
  const [secondNumber, setSecondNumber] = useState("0")
  const [secondNumberDecimal, setSecondNumberDecimal] = useState(false)
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState(0)
  const [storedResult, setStoredResult] = useState(-1)

  const ChangeNumber = (e) => {
    const parentId = e.target.parentNode.id
    const number = parentId === "firstPanel" ? firstNumber : secondNumber
    const setNumber = parentId === "firstPanel" ? setFirstNumber : setSecondNumber
    const setDecimal = parentId === "firstPanel" ? setFirstNumberDecimal : setSecondNumberDecimal

    if (e.target.innerText === "Clear") {
      setNumber("0")
      setDecimal(false)
    } else {
      if (number === "0") {
        setNumber(e.target.innerText)
      } else {
        setNumber(number + e.target.innerText)
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
        calculationValue = parseFloat(firstNumber) + parseFloat(secondNumber)
        break
      case "-":
        calculationValue = parseFloat(firstNumber) - parseFloat(secondNumber)
        break
      case "*":
        calculationValue = parseFloat(firstNumber) * parseFloat(secondNumber)
        break
      case "÷":
        calculationValue = parseFloat(firstNumber) / parseFloat(secondNumber)
        break
    }
    setResult(+calculationValue.toFixed(8))
  }

  const StoreResult = () => {
    setStoredResult(result)
  }

  const RecallNumber = (num) => {
    if (storedResult !== -1) {
      if (num === 1) {
        setFirstNumber(storedResult)
        if (storedResult.toString().includes(".")) {
          setFirstNumberDecimal(true)
        }
      }
      if (num === 2) {
        setSecondNumber(storedResult)
        if (storedResult.toString().includes(".")) {
          setSecondNumberDecimal(true)
        }
      }
    }
  }

  const AddDecimal = (num) => {
    if (num === 1 && !firstNumberDecimal) {
      setFirstNumber(firstNumber + ".")
      setFirstNumberDecimal(true)
    }
    if (num === 2 && !secondNumberDecimal) {
      setSecondNumber(secondNumber + ".")
      setSecondNumberDecimal(true)
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers" id="firstPanel">
          <button onClick={(e) => ChangeNumber(e)}>1</button>
          <button onClick={(e) => ChangeNumber(e)}>2</button>
          <button onClick={(e) => ChangeNumber(e)}>3</button>
          <button onClick={(e) => ChangeNumber(e)}>4</button>
          <button onClick={(e) => ChangeNumber(e)}>5</button>
          <button onClick={(e) => ChangeNumber(e)}>6</button>
          <button onClick={(e) => ChangeNumber(e)}>7</button>
          <button onClick={(e) => ChangeNumber(e)}>8</button>
          <button onClick={(e) => ChangeNumber(e)}>9</button>
          <button onClick={(e) => ChangeNumber(e)}>0</button>
          <button onClick={() => AddDecimal(1)}>.</button>
          <button onClick={(e) => ChangeNumber(e)}>Clear</button>
          <button onClick={() => RecallNumber(1)}>Recall</button>
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
        <div className="numbers" id="secondPanel">
          <button onClick={(e) => ChangeNumber(e)}>1</button>
          <button onClick={(e) => ChangeNumber(e)}>2</button>
          <button onClick={(e) => ChangeNumber(e)}>3</button>
          <button onClick={(e) => ChangeNumber(e)}>4</button>
          <button onClick={(e) => ChangeNumber(e)}>5</button>
          <button onClick={(e) => ChangeNumber(e)}>6</button>
          <button onClick={(e) => ChangeNumber(e)}>7</button>
          <button onClick={(e) => ChangeNumber(e)}>8</button>
          <button onClick={(e) => ChangeNumber(e)}>9</button>
          <button onClick={(e) => ChangeNumber(e)}>0</button>
          <button onClick={() => AddDecimal(2)}>.</button>
          <button onClick={(e) => ChangeNumber(e)}>Clear</button>
          <button onClick={() => RecallNumber(2)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => EvaluateResult()}>=</button>
          <button onClick={() => StoreResult()}> Store result</button>
        </div>
      </div>
    </div>
  )
}

export default App
