import { useState } from "react"
import "./App.css"

function App() {
const [firstNumber, setFirstNumber] = useState(0);
const [secondNumber, setSecondNumber] = useState(0);

const [operator, setOperator] = useState("");

const [calculate, setCalculate] = useState(0);

const Calculate = () => {
  let result;
  if(operator === "÷"){
    result = eval(firstNumber + "/" + secondNumber)
  }
  result = eval(firstNumber + operator + secondNumber)
  setCalculate(result)
}

const AppendToFirstNumber = (number) => {
  let firstNumberString = firstNumber.toString()
  let toAppend = number.toString()
  let newNumber = firstNumberString + toAppend

  let result = Number(newNumber)
  setFirstNumber(result)
}

const AppendToSecondNumber = (number) => {
  let secondNumberString = secondNumber.toString()
  let toAppend = number.toString()
  let newNumber = secondNumberString + toAppend

  let result = Number(newNumber)
  setSecondNumber(result)
}

const ClearFirst = () => {
  setFirstNumber(0)
}
const ClearSecond = () => {
  setSecondNumber(0)
}

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => AppendToFirstNumber(1)}>1</button>
          <button onClick={() => AppendToFirstNumber(2)}>2</button>
          <button onClick={() => AppendToFirstNumber(3)}>3</button>
          <button onClick={() => AppendToFirstNumber(4)}>4</button>
          <button onClick={() => AppendToFirstNumber(5)}>5</button>
          <button onClick={() => AppendToFirstNumber(6)}>6</button>
          <button onClick={() => AppendToFirstNumber(7)}>7</button>
          <button onClick={() => AppendToFirstNumber(8)}>8</button>
          <button onClick={() => AppendToFirstNumber(9)}>9</button>
          <button onClick={() => AppendToFirstNumber(0)}>0</button>
          <button onClick={() => ClearFirst()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => AppendToSecondNumber(1)}>1</button>
          <button onClick={() => AppendToSecondNumber(2)}>2</button>
          <button onClick={() => AppendToSecondNumber(3)}>3</button>
          <button onClick={() => AppendToSecondNumber(4)}>4</button>
          <button onClick={() => AppendToSecondNumber(5)}>5</button>
          <button onClick={() => AppendToSecondNumber(6)}>6</button>
          <button onClick={() => AppendToSecondNumber(7)}>7</button>
          <button onClick={() => AppendToSecondNumber(8)}>8</button>
          <button onClick={() => AppendToSecondNumber(9)}>9</button>
          <button onClick={() => AppendToSecondNumber(0)}>0</button>
          <button onClick={() => ClearSecond()}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{calculate}</p>
        <div>
          <button onClick={() => Calculate()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
