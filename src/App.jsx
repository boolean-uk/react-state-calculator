import "./App.css"
import { useState } from "react"

function App() {

  const initialLeftValue = []
  const initialRightValue = []

  const [calculated, setCalculated] = useState(0)
  const [leftValue, setLeftValue] = useState(0)
  const [rightValue, setRightValue] = useState(0)
  const [operator, setOperator] = useState("")

  const handleCalculate = () => {
    let result = 0;

    switch (operator) {
      case "+":
        result = leftValue + rightValue;
        break;
      case "-":
        result = leftValue - rightValue;
        break;
      case "*":
        result = leftValue * rightValue;
        break;
      case "/":
        if (rightValue !== 0) {
          result = leftValue / rightValue;
        } else {
          alert("Error: Division by zero");
          return
        }
        break
    }
    setCalculated(result);
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftValue}</p>
        <div className="numbers">
          <button className="left-value-btn" onClick={() => setLeftValue(1)}>1</button>
          <button className="left-value-btn" onClick={() => setLeftValue(2)}>2</button>
          <button className="left-value-btn" onClick={() => setLeftValue(3)}>3</button>
          <button className="left-value-btn" onClick={() => setLeftValue(4)}>4</button>
          <button className="left-value-btn" onClick={() => setLeftValue(5)}>5</button>
          <button className="left-value-btn" onClick={() => setLeftValue(6)}>6</button>
          <button className="left-value-btn" onClick={() => setLeftValue(7)}>7</button>
          <button className="left-value-btn" onClick={() => setLeftValue(8)}>8</button>
          <button className="left-value-btn" onClick={() => setLeftValue(9)}>9</button>
          <button className="left-value-btn" onClick={() => setLeftValue(0)}>0</button>
          <button className="left-value-btn" onClick={() => setLeftValue(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button className="operator-btn" onClick={() => setOperator("+")}>+</button>
          <button className="operator-btn" onClick={() => setOperator("-")}>-</button>
          <button className="operator-btn" onClick={() => setOperator("*")}>*</button>
          <button className="operator-btn" onClick={() => setOperator("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightValue}</p>
        <div className="numbers">
          <button className="right-value-btn" onClick={() => setRightValue(1)}>1</button>
          <button className="right-value-btn" onClick={() => setRightValue(2)}>2</button>
          <button className="right-value-btn" onClick={() => setRightValue(3)}>3</button>
          <button className="right-value-btn" onClick={() => setRightValue(4)}>4</button>
          <button className="right-value-btn" onClick={() => setRightValue(5)}>5</button>
          <button className="right-value-btn" onClick={() => setRightValue(6)}>6</button>
          <button className="right-value-btn" onClick={() => setRightValue(7)}>7</button>
          <button className="right-value-btn" onClick={() => setRightValue(8)}>8</button>
          <button className="right-value-btn" onClick={() => setRightValue(9)}>9</button>
          <button className="right-value-btn" onClick={() => setRightValue(0)}>0</button>
          <button className="right-value-btn" onClick={() => setRightValue(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{calculated}</p>
        <div>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
