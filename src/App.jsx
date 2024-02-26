import "./App.css"
import { useState } from "react"


function App() {
  const [leftNumber, setLeftNumber] = useState('0')
  const [rightNumber, setRightNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(0)
  const [storedAnswer, setStoredAnswear] = useState(0)

  const setNumber = (calcuator, number) =>{

    
    //Left panel

    if (calcuator === 'left'){
      if (!leftNumber.includes(".")){
        if(leftNumber === '0' && number !== "."){
          setLeftNumber(number)
        }
        else{
          setLeftNumber(leftNumber + number)
        }
      }

      else {
        if(number !== '.'){
          console.log(number)
          setLeftNumber(leftNumber + number)
        }
      }
    } 

    //Right panel

    else{
      if (!rightNumber.includes(".")){
        if(rightNumber === '0' && number !== "."){
          setRightNumber(number)
        }
        else{
          setRightNumber(rightNumber + number)
        }
      }

      else {
        if(number !== '.'){
          console.log(number)
          setRightNumber(rightNumber + number)
        }
      }
    }
  } 

  const calculate = () => {
    let res = ''
    console.log(operator)
    if (leftNumber !== '' && operator !== '' && rightNumber !== ''){
      if (operator === '÷'){
        res = leftNumber + '/' + rightNumber
      } else {
        res = leftNumber + operator + rightNumber
      }
      setResult(eval(res))
    } else {
      setResult('')
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNumber}</p>
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
          <button onClick={() => setNumber('left', '.')}>.</button>
          <button onClick={() => setLeftNumber('0')}>Clear</button>
          <button onClick={() => setLeftNumber(storedAnswer)}>Recall</button>
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
        <p>{rightNumber}</p>
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
          <button onClick={() => setNumber('right', '.')}>.</button>
          <button onClick={() => setRightNumber('0')}>Clear</button>
          <button onClick={() => setRightNumber(storedAnswer)}>Recall</button>
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
