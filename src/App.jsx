import { useState } from 'react'
import "./App.css"

// State variables to store calculator data
function CalculatorApp() {
  const [result, setResult] = useState('')
  const [operation, setOperation] = useState('')
  const [firstOperand, setFirstOperand] = useState('')
  const [secondOperand, setSecondOperand] = useState('')

  // Function to handle multiple operands -- extension 1
  const getOperand = (number) => {
    if (operation === '') {
      if (firstOperand === '0') {
        setFirstOperand(number)
      } else {
        setFirstOperand(firstOperand + number)
      }
    } else {
      if (secondOperand === '0') {
        setSecondOperand(number)
      } else {
        setSecondOperand(secondOperand + number)
      }
    }
  }

  //Function to enable decimal calculations -- extension 2
  const addDecimal = () => {
    if (operation === '') {
      if (!firstOperand.includes('.')) {
        setFirstOperand(firstOperand + '.');
      }
    } else {
      if (!secondOperand.includes('.')) {
        setSecondOperand(secondOperand + '.');
      }
    }
  }

  const clearSelectionOne = () => {
    setFirstOperand('')
  }

  const clearSelectionTwo = () => {
    setSecondOperand('')
  }

  const setOperator = (selection) => {
    {
      setOperation(selection)
    }
  }

  // Function to format opereands and set operation component of calculator 
  const getResult = () => {
    if (operation !== '' && secondOperand !== '') {
      const num1 = parseFloat(firstOperand)
      const num2 = parseFloat(secondOperand)

      let result = '';
      switch (operation) {
        case '+':
          result = num1 + num2
          break
        case '-':
          result = num1 - num2
          break
        case '*':
          result = num1 * num2
          break;
        case '/':
          result = num1 / num2
          break;
        default:
          result = ''
      }

      // Update result and clear operands and operation for the next calculation 
      setResult(result.toString())
      setFirstOperand(result.toString())
      setSecondOperand('')
      setOperation('')
    }
  }

  // Calculator component 
  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstOperand}</p>
        <div className="numbers">
          <button onClick={() => getOperand('1')}>1</button>
          <button onClick={() => getOperand('2')}>2</button>
          <button onClick={() => getOperand('3')}>3</button>
          <button onClick={() => getOperand('4')}>4</button>
          <button onClick={() => getOperand('5')}>5</button>
          <button onClick={() => getOperand('6')}>6</button>
          <button onClick={() => getOperand('7')}>7</button>
          <button onClick={() => getOperand('8')}>8</button>
          <button onClick={() => getOperand('9')}>9</button>
          <button onClick={() => getOperand('0')}>0</button>
          <button onClick={clearSelectionOne}>Clear</button>
          <button onClick={addDecimal}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("/")}>/</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondOperand}</p>
        <div className="numbers">
          <button onClick={() => getOperand('1')}>1</button>
          <button onClick={() => getOperand('2')}>2</button>
          <button onClick={() => getOperand('3')}>3</button>
          <button onClick={() => getOperand('4')}>4</button>
          <button onClick={() => getOperand('5')}>5</button>
          <button onClick={() => getOperand('6')}>6</button>
          <button onClick={() => getOperand('7')}>7</button>
          <button onClick={() => getOperand('8')}>8</button>
          <button onClick={() => getOperand('9')}>9</button>
          <button onClick={() => getOperand('0')}>0</button>
          <button onClick={clearSelectionTwo}>Clear</button>
          <button onClick={addDecimal}>.</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={getResult}>=</button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorApp;
