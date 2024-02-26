import { useState } from 'react'
import "./App.css"


function App() {

  const [firstNumber, setFirstNumber] = useState(0)
  const [calculationSign, setCalculationSign] = useState('+')
  const [secondNumber, setSecondNumber] = useState(0)
  const [result, setResult] = useState(0)

  const buttonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const clickedFirstNumber = (value) => {
    //append to first number
    const stringNumbers = firstNumber.toString() + value.toString()
    const intNumbers = parseInt(stringNumbers)
    setFirstNumber(intNumbers)
  }

  const clickedFirstClear = () => {
    setFirstNumber(0)
  }

  const clickedSecondNumber = (value) => {
    const stringNumbers = secondNumber.toString() + value.toString()
    const intNumbers = parseInt(stringNumbers)
    setSecondNumber(intNumbers)
  }

  const clickedSecondClear = () => {
    setSecondNumber(0)
  }

  const calculate = () => {
    //räkna ut och setResult
    switch (calculationSign) {
      case '+':
        setResult(firstNumber + secondNumber)
        break;
      case '-':
        setResult(firstNumber - secondNumber)
        break;
      case '*':
        setResult(firstNumber * secondNumber)
        break;
      case '÷':
        setResult(firstNumber / secondNumber)
        break;
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          {buttonValues.map((value) => (
            <button key={value} onClick={() => clickedFirstNumber(value)}>
              {value}
            </button>
          ))}
          <button onClick={clickedFirstClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{calculationSign}</p>
        <div className="numbers">
          <button onClick={() => setCalculationSign('+')}>+</button>
          <button onClick={() => setCalculationSign('-')}>-</button>
          <button onClick={() => setCalculationSign('*')}>*</button>
          <button onClick={() => setCalculationSign('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          {buttonValues.map((value) => (
            <button key={value} onClick={() => clickedSecondNumber(value)}>
              {value}
            </button>
          ))}
          <button onClick={clickedSecondClear}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
