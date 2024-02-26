import { useState } from "react"
import "./App.css"

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operators = ['+', '-', '*', '/']

function App() {
  // UseState for each part of the calculator
  const [firstNumber, setFirstNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [secondNumber, setSecondNumber] = useState('0')
  const [result, setResult] = useState('0')
  const [storedValue, setStoredValue] = useState('0')

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          {/* Display all calculator face bottons and add the onclick functionality */}
          {buttons.map(string => 
            <button key={string} 
              onClick={() => {
                if (firstNumber === '0') {setFirstNumber(string)} 
                else {setFirstNumber(firstNumber + string)}
              }}>{string}</button>
          )}
          <button onClick={() => setFirstNumber(storedValue)}>Stored</button>
          <button onClick={() => setFirstNumber('0')}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {operators.map(string => 
            <button key={string} onClick={() => setOperator(string)}>{string}</button>
          )}
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          {buttons.map(string => 
            <button key={string} 
              onClick={() => {
                if (secondNumber === '0') {setSecondNumber(string)} 
                else {setSecondNumber(secondNumber + string)}
              }}>{string}</button>
          )}
          <button onClick={() => setSecondNumber(storedValue)}>Stored</button>
          <button onClick={() => setSecondNumber('0')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => {
            /* Evaluate the equation string -> show two decimals if result is a float */
            const answer = eval(firstNumber+operator+secondNumber)
            setResult(Number.isInteger(answer) ? answer : answer.toFixed(2))
          }}>=</button>
          <button onClick={() => setStoredValue(result)}>Store Value</button>
        </div>
      </div>
    </div>
  )
}

export default App
