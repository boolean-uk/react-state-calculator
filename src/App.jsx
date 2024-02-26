import { useState } from 'react'
import "./App.css"

function App() {

  const [firstNum, setFirstNum] = useState('0')
  const [operator, setOperator] = useState('+')
  const [secondNum, setSecondNum] = useState('0')
  const [answer, setAnswer] = useState('0')
  const [stored, setStored] = useState('0')

  const clickedFirst = (event) => {
    if(event.target.tagName === 'BUTTON') {
      if(event.target.innerText === 'Clear') {
        setFirstNum('0')
      } else if (firstNum === '0') {
        setFirstNum(event.target.innerText)
      } else if(event.target.innerText === '.' ) {
        if(firstNum.includes('.')) {
          // do nothing
        } else {
          setFirstNum(firstNum+event.target.innerText)
        }
      } else if(event.target.innerText !== '.') {
        setFirstNum(firstNum+event.target.innerText)
      }
    }
  }

  const clickedSecond = (event) => {
    if(event.target.tagName === 'BUTTON') {
      if(event.target.innerText === 'Clear') {
        setSecondNum('0')
      } else if (secondNum === '0') {
        setSecondNum(event.target.innerText)
      } else if(event.target.innerText === '.' ) {
        if(firstNum.includes('\.')) {
          // do nothing
        } else {
          setFirstNum(firstNum+event.target.innerText)
        }
      } else if(event.target.innerText !== '.') {
        setSecondNum(secondNum+event.target.innerText)
      }
    }
  }

  const clickedOperator = (event) => {
    if(event.target.tagName === 'BUTTON') {
      setOperator(event.target.innerText)
    }
  }

  const clickedAnswer = () => {
    let temp = 0
    if(operator === '+') {
      temp = parseFloat(firstNum) + parseFloat(secondNum)
    } else if(operator === '-') {
      temp = parseFloat(firstNum) - parseFloat(secondNum)
    } else if(operator === '÷') {
      temp = parseFloat(firstNum) / parseFloat(secondNum)
    } else if(operator === '*') {
      temp = parseFloat(firstNum) * parseFloat(secondNum)
    }
    if(Number.isInteger(temp)){
      setAnswer(temp)
    }else{
      setAnswer(parseFloat(temp).toFixed(2))
    }
  }

  const store = () => {
    setStored(answer)
  }

  const firstUseStored = () => {
    setFirstNum(stored)
  }
  const secondUseStored = () => {
    setSecondNum(stored)
  }

  const storedStyle = {
    fontSize: 15,
    color: 'grey',
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers" onClick={clickedFirst}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
          <button>Clear</button>
        </div>
        <div>
          <button onClick={firstUseStored}>Use Stored</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={clickedOperator}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers" onClick={clickedSecond}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
          <button>Clear</button>
        </div>
        <div>
        <button onClick={secondUseStored}>Use Stored</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={clickedAnswer}>=</button>
        </div>
        <div>
          <p style={storedStyle}>Stored: {stored}</p>
          <button onClick={store}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
