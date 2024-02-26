import "./App.css"
import { useState } from "react"


function App() {
  const [firstNumber, setFirstNumber] = useState('0')
  const [secondNumber, setSecondNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(0)
  const [storedAnswer, setStoredAnswear] = useState(0)

  const setNumber = (calcuator, number) =>{
    if (calcuator === 'left'){
      if(firstNumber === '0'){
        setFirstNumber(number)
      }else{
        setFirstNumber(firstNumber + number)
      }
    } 
    else {
      if(secondNumber === '0'){
        setSecondNumber(number)
      }
      else{
        setSecondNumber(secondNumber + number)
      }
    }
  } 

  const calculate = () => {
    let res = ''
    console.log(operator)
    if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
      if (operator === '÷'){
        res = firstNumber + '/' + secondNumber
      } else {
        res = firstNumber + operator + secondNumber
      }
      setResult(eval(res))
    } else {
      setResult('')
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => setNumber('left', '1')}>1</button>
          <button onClick={() => setNumber('left', '2')}>2</button>
          <button onClick={() => setNumber('left', '3')}>3</button>
          <button onClick={() => setNumber('left', '4')}>4</button>
          <button onClick={() => setNumber('left', '5')}>5</button>
          <button onClick={() => setNumber('left', '6')}>6</button>
          <button onClick={() => setNumber('left', '7')}>7</button>
          <button onClick={() => setNumber('left', '8')}>8</button>
          <button onClick={() => setNumber('left', '9')}>9</button>
          <button onClick={() => setNumber('left', '0')}>0</button>
          <button onClick={() => setFirstNumber('0')}>Clear</button>
          <button onClick={() => setFirstNumber(storedAnswer)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => setNumber('right', '1')}>1</button>
          <button onClick={() => setNumber('right', '2')}>2</button>
          <button onClick={() => setNumber('right', '3')}>3</button>
          <button onClick={() => setNumber('right', '4')}>4</button>
          <button onClick={() => setNumber('right', '5')}>5</button>
          <button onClick={() => setNumber('right', '6')}>6</button>
          <button onClick={() => setNumber('right', '7')}>7</button>
          <button onClick={() => setNumber('right', '8')}>8</button>
          <button onClick={() => setNumber('right', '9')}>9</button>
          <button onClick={() => setNumber('right', '0')}>0</button>
          <button onClick={() => setSecondNumber('0')}>Clear</button>
          <button onClick={() => setSecondNumber(storedAnswer)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculate}>=</button>
          <button onClick={() => setStoredAnswear(result.toString())}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
