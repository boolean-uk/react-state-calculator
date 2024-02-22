import { useState } from "react"
import "./App.css"

function App() {
const [firstNumber, setFirstNumber] = useState(0);
const [secondNumber, setSecondNumber] = useState(0);

const [operator, setOperator] = useState("");

const [calculate, setCalculate] = useState(0);

const Calculate = () => {
  let result = eval(firstNumber + operator + secondNumber)
  setCalculate(result)
}

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => setFirstNumber(1)}>1</button>
          <button onClick={() => setFirstNumber(2)}>2</button>
          <button onClick={() => setFirstNumber(3)}>3</button>
          <button onClick={() => setFirstNumber(4)}>4</button>
          <button onClick={() => setFirstNumber(5)}>5</button>
          <button onClick={() => setFirstNumber(6)}>6</button>
          <button onClick={() => setFirstNumber(7)}>7</button>
          <button onClick={() => setFirstNumber(8)}>8</button>
          <button onClick={() => setFirstNumber(9)}>9</button>
          <button onClick={() => setFirstNumber(0)}>0</button>
          <button onClick={() => setFirstNumber(0)}>Clear</button>
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
          <button onClick={() => setSecondNumber(1)}>1</button>
          <button onClick={() => setSecondNumber(2)}>2</button>
          <button onClick={() => setSecondNumber(3)}>3</button>
          <button onClick={() => setSecondNumber(4)}>4</button>
          <button onClick={() => setSecondNumber(5)}>5</button>
          <button onClick={() => setSecondNumber(6)}>6</button>
          <button onClick={() => setSecondNumber(7)}>7</button>
          <button onClick={() => setSecondNumber(8)}>8</button>
          <button onClick={() => setSecondNumber(9)}>9</button>
          <button onClick={() => setSecondNumber(0)}>0</button>
          <button onClick={() => setSecondNumber(0)}>Clear</button>
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
