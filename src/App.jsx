import { useState } from "react";
import "./App.css"

function App() {
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [operator, setOperator] = useState('+');
  const [answer, setAnswer] = useState('0');

  const [storedValues, setStoredValues] = useState([])

  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
  const operators = ['+', '-', '*', '÷']

  const getNewValue = (value, newValue) => {
    if (newValue === '.' && value.includes('.')) {
      return value
    } else if (newValue === '.') {
      return value + newValue
    }

    if (newValue === '0' && value.includes('.')) {
      return value + newValue
    } else if (value === '0') {
      return newValue
    }
    
    return value + newValue
  }


  const calculateAnswer = () => {
    let a = parseFloat(firstValue)
    let b = parseFloat(secondValue)
    let result = 0

    if (operator === '+') {
      result = a + b
    }
    if (operator === '-') {
      result = a - b
    }
    if (operator === '*') {
      result = a * b
    }
    if (operator === '÷') {
      result = a / b
    }


    if (result % 1 === 0) {
      result = result.toFixed(0)
      return setAnswer(result)
    }

    setAnswer(result.toFixed(Math.max(a.toString().split('.')[1]?.length || 0, b.toString().split('.')[1]?.length || 0)))
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstValue}</p>
        <div className="numbers">
          {values.map((value, index) => <button key={index} onClick={() => setFirstValue(getNewValue(firstValue, value))}>{value}</button>)}
          <button onClick={() => setFirstValue('0')}>Clear</button>
          <button onClick={() => setFirstValue(storedValues[storedValues.length - 1])}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {operators.map((value, index) => <button key={index} onClick={() => setOperator(value)}>{value}</button>)}
        </div>
      </div>

      <div className="panel">
        <p>{secondValue}</p>
        <div className="numbers">
        {values.map((value, index) => <button key={index} onClick={() => setSecondValue(getNewValue(secondValue, value))}>{value}</button>)}
          <button onClick={() => setSecondValue('0')}>Clear</button>
          <button onClick={() => setSecondValue(storedValues[storedValues.length - 1])}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calculateAnswer}>=</button>
          <button onClick={() => setStoredValues([...storedValues, answer])}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
