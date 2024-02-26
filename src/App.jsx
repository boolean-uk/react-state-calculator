import { useState } from 'react'
import "./App.css"


function App() {

  const [firstNumber, setFirstNumber] = useState(0)
  const [calculationSign, setCalculationSign] = useState('+')
  const [secondNumber, setSecondNumber] = useState(0)
  const [result, setResult] = useState(0)

  const buttonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const clickedFirstNumber = (value) => {
    console.log(`First Button ${value} clicked`);
    //visa nummer i boxen ovanför
    setFirstNumber(value)
  }

  const clickedFirstClear = () => {
    console.log("clicked first clear")
    setFirstNumber(0)
  }

  const clickedSecondNumber = (value) => {
    console.log(`Second Button ${value} clicked`);
    //visa nummer i boxen ovanför
    setSecondNumber(value)
  }

  const clickedSecondClear = () => {
    console.log("clicked second clear")
    setSecondNumber(0)
  }

  const add = () => {
    return firstNumber + secondNumber
  }

  const subtract = () => {
    return firstNumber - secondNumber
  }

  const multiply = () => {
    return firstNumber * secondNumber
  }

  const divide = () => {
    return firstNumber / secondNumber
  }

  const calculate = () => {
    //räkna ut
    let total = 0
    switch (calculationSign) {
      case '+':
        total = add();
        break;
      case '-':
        total = subtract();
        break;
      case '*':
        total = multiply;
        break;
      case '÷':
        total = divide();
        break;
    }
    //setResult
    setResult(total)
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
