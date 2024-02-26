import "./App.css"
import { useState } from "react"

function App() {
  const [calculated, setCalculated] = useState('0')
  const [leftValue, setLeftValue] = useState('0')
  const [rightValue, setRightValue] = useState('0')
  const [operator, setOperator] = useState('')
  const [storedValue, setStoredValue] = useState('')

  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const handleCalculate = () => {
    let result = 0;
    let a = parseFloat(leftValue)
    let b = parseFloat(rightValue)
    switch (operator) {
      case "+":
        result = a +b
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b !== 0) {
          result = a / b;
        } else {
          alert("Error: Division by zero");
          return
        }
      break;
      default:
        result = 0;
        break;
    }
    setCalculated(result);
  }

  const handleStore = () =>{
    setStoredValue(calculated)
    console.log(storedValue)
  }

  const handleRecall = (value) => {
    if (value === 'left') {
      setLeftValue(storedValue.toString());
    } else if (value === 'right') {
      setRightValue(storedValue.toString());
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftValue}</p>
        <div className="numbers">{
         values.map((value) => (
          <button onClick={
            () => setLeftValue(
              (leftValue === '0' ? '' : leftValue) + value)}>{value}</button>
          ))}
          <button onClick={() => setLeftValue(leftValue + (leftValue.includes('.') ? '' : '.'))}>.</button>
          <button className="left-value-btn" onClick={() => setLeftValue('0')}>Clear</button>
          <button onClick={() => handleRecall('left')}>Recall</button>
          
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
        <div className="numbers">{values.map((value) => (<button onClick={() => setRightValue((rightValue === '0' ? '' : rightValue) + value)}>{value}</button>))}
          <button onClick={() => setRightValue(rightValue + (rightValue.includes('.') ? '' : '.'))}>.</button>
          <button className="right-value-btn" onClick={() => setRightValue('0')}>Clear</button>
          <button onClick={() => handleRecall('right')}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{calculated}</p>
        <div>
          <button onClick={handleCalculate}>=</button>
          <button onClick={handleStore}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
