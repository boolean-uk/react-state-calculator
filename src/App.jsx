import "./App.css"

import { useState } from 'react'

function App() {

  const [firstNum, setFirstNum] = useState('')
  const [operator, setOperator] = useState('+')
  const [secondNum, setSecondNum] = useState('')
  const [result, setResult] = useState('')

  console.log(firstNum)
  console.log(secondNum)
  const [resultSave, setResultSave] = useState('')

  const decimal = (string) => {
    if (!string.includes('.'))
    {
      return string + '.'
    }
    return string
  }

  const addZero = (string) => {
    if (string !== '0' && string !== '')
    {
      return string + '0'
    }
    return string
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum || 0}</p>
        <div className="numbers">
          <button onClick={() => setFirstNum(firstNum + '1')}>1</button>
          <button onClick={() => setFirstNum(firstNum + '2')}>2</button>
          <button onClick={() => setFirstNum(firstNum + '3')}>3</button>
          <button onClick={() => setFirstNum(firstNum + '4')}>4</button>
          <button onClick={() => setFirstNum(firstNum + '5')}>5</button>
          <button onClick={() => setFirstNum(firstNum + '6')}>6</button>
          <button onClick={() => setFirstNum(firstNum + '7')}>7</button>
          <button onClick={() => setFirstNum(firstNum + '8')}>8</button>
          <button onClick={() => setFirstNum(firstNum + '9')}>9</button>
          <button onClick={() => setFirstNum(addZero(firstNum))}>0</button>
          <button onClick={() => setFirstNum(decimal(firstNum))}>.</button>
          <button onClick={() => setFirstNum(resultSave)}>recall</button>
          <button onClick={() => setFirstNum('')}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum || 0}</p>
        <div className="numbers">
          <button onClick={() => setSecondNum(secondNum + '1')}>1</button>
          <button onClick={() => setSecondNum(secondNum + '2')}>2</button>
          <button onClick={() => setSecondNum(secondNum + '3')}>3</button>
          <button onClick={() => setSecondNum(secondNum + '4')}>4</button>
          <button onClick={() => setSecondNum(secondNum + '5')}>5</button>
          <button onClick={() => setSecondNum(secondNum + '6')}>6</button>
          <button onClick={() => setSecondNum(secondNum + '7')}>7</button>
          <button onClick={() => setSecondNum(secondNum + '8')}>8</button>
          <button onClick={() => setSecondNum(secondNum + '9')}>9</button>
          <button onClick={() => setSecondNum(addZero(secondNum))}>0</button>
          <button onClick={() => setSecondNum(decimal(secondNum))}>.</button>
          <button onClick={() => setSecondNum(resultSave)}>recall</button>
          <button onClick={() => setSecondNum('')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result || 0}</p>
        <div>
          <button onClick={() => setResult(eval((firstNum || 0) + operator + (secondNum || 0)))}>=</button>
          <button onClick={() => setResultSave(result)}>Store {result}</button>
        </div>
      </div>
    </div>
  )
}

export default App
