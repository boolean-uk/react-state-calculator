import { useState } from "react"
import "./App.css"

function App() {
  const [leftNumber, setLeftNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [rightNumber, setRightNumber] = useState('0')
  const [answer, setAnswer] = useState('0')

  const numField = (value, targetField) => {
    switch (targetField) {
      case 'left':
        if (value === 'CLS')
          setLeftNumber('0')
        else
          setLeftNumber((leftNumber === '0' ? '' : leftNumber) + value)
        break
      case 'middle':
        console.log(value)
        setOperator(value)
        break
      case 'right':
        if (value === 'CLS')
          setRightNumber('0')
        else
          setRightNumber((rightNumber === '0' ? '' : rightNumber) + value)
        break
    }
  }

  const calculate = () => {
    var _outAnswer = 0

    switch (operator) {
      case '+':
        _outAnswer = Number(leftNumber) + Number(rightNumber)
        break
      case '-':
        _outAnswer = Number(leftNumber) - Number(rightNumber)
        break
      case '*':
        _outAnswer = Number(leftNumber) * Number(rightNumber)
        break
      case '÷':
        _outAnswer = Number(leftNumber) / Number(rightNumber)
        break
    }

    setAnswer(_outAnswer.toFixed(4))
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNumber}</p>
        <div className="numbers">
          <button onClick={() => numField(1, 'left')}>1</button>
          <button onClick={() => numField(2, 'left')}>2</button>
          <button onClick={() => numField(3, 'left')}>3</button>
          <button onClick={() => numField(4, 'left')}>4</button>
          <button onClick={() => numField(5, 'left')}>5</button>
          <button onClick={() => numField(6, 'left')}>6</button>
          <button onClick={() => numField(7, 'left')}>7</button>
          <button onClick={() => numField(8, 'left')}>8</button>
          <button onClick={() => numField(9, 'left')}>9</button>
          <button onClick={() => numField(0, 'left')}>0</button>
          <button onClick={() => numField('.', 'left')}>.</button>
          <button onClick={() => numField('CLS', 'left')}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => numField('+', 'middle')}>+</button>
          <button onClick={() => numField('-', 'middle')}>-</button>
          <button onClick={() => numField('*', 'middle')}>*</button>
          <button onClick={() => numField('÷', 'middle')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightNumber}</p>
        <div className="numbers">
          <button onClick={() => numField(1, 'right')}>1</button>
          <button onClick={() => numField(2, 'right')}>2</button>
          <button onClick={() => numField(3, 'right')}>3</button>
          <button onClick={() => numField(4, 'right')}>4</button>
          <button onClick={() => numField(5, 'right')}>5</button>
          <button onClick={() => numField(6, 'right')}>6</button>
          <button onClick={() => numField(7, 'right')}>7</button>
          <button onClick={() => numField(8, 'right')}>8</button>
          <button onClick={() => numField(9, 'right')}>9</button>
          <button onClick={() => numField(0, 'right')}>0</button>
          <button onClick={() => numField('.', 'right')}>.</button>
          <button onClick={() => numField('CLS', 'right')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
