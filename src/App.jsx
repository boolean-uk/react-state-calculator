import "./App.css"
import { useState } from "react"


function App() {
  const [firstNumber, setFirstNumber] = useState("0")
  const [operator, setOperator] = useState("+")
  const [secondNumber, setSecondNumber] = useState("0")
  const [result, setResult] = useState("0")

  const firstValue = (value) => {
    setFirstNumber(firstNumber === "0" ? value : firstNumber + value);
  }

  const secondValue = (value) => {
    setSecondNumber(secondNumber === "0" ? value : secondNumber + value)
  }

  const operation = () => {
    const numberOne = Number(firstNumber)
    const numberTwo = Number(secondNumber)

    if(operator === "+") {
      setResult(numberOne + numberTwo)
    } else if (operator === "-") {
      setResult(numberOne - numberTwo)
    } else if (operator === "*") {
      setResult(numberOne * numberTwo)
    } else {
      setResult(numberOne / numberTwo)
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={(e) => firstValue("1")}>1</button>
          <button onClick={(e) => firstValue("2")}>2</button>
          <button onClick={(e) => firstValue("3")}>3</button>
          <button onClick={(e) => firstValue("4")}>4</button>
          <button onClick={(e) => firstValue("5")}>5</button>
          <button onClick={(e) => firstValue("6")}>6</button>
          <button onClick={(e) => firstValue("7")}>7</button>
          <button onClick={(e) => firstValue("8")}>8</button>
          <button onClick={(e) => firstValue("8")}>9</button>
          <button onClick={(e) => firstValue("0")}>0</button>
          <button onClick={() => setFirstNumber("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
      <p>{operator}</p>
      <div className="numbers">
        <button onClick={() => setOperator("+")}>+</button>
        <button onClick={() => setOperator("-")}>-</button>
        <button onClick={() => setOperator("*")}>*</button>
        <button onClick={() => setOperator("/")}>÷</button>
      </div>
    </div>
      
    <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={(e) => secondValue("1")}>1</button>
          <button onClick={(e) => secondValue("2")}>2</button>
          <button onClick={(e) => secondValue("3")}>3</button>
          <button onClick={(e) => secondValue("4")}>4</button>
          <button onClick={(e) => secondValue("5")}>5</button>
          <button onClick={(e) => secondValue("6")}>6</button>
          <button onClick={(e) => secondValue("7")}>7</button>
          <button onClick={(e) => secondValue("8")}>8</button>
          <button onClick={(e) => secondValue("9")}>9</button>
          <button onClick={(e) => secondValue("0")}>0</button>
          <button onClick={() => setSecondNumber("0")}>Clear</button>
        </div>
      </div>
     
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={operation}>=</button>
        </div>
      </div>

    </div>
  )
}

export default App
