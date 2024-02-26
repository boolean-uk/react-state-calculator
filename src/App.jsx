import "./App.css"
import { useState } from 'react'

function App() {
  
  // useStates
  const [numberOne, setNumberOne] = useState('0')
  const [operator, setOperator] = useState('+')
  const [numberTwo, setNumberTwo] = useState('0')
  const [answer, setAnswer] = useState('0')

  const handleClick1 = (event) => {
    // Ensure the clicked element is a button before proceeding.
    if (event.target.tagName === 'BUTTON') {
      if (event.target.innerText === 'Clear'){
        setNumberOne('0')
      }
      else{
        setNumberOne(event.target.innerText)
      }
    }
  }
  const handleClick2 = (event) => {
    // Ensure the clicked element is a button before proceeding.
    if (event.target.tagName === 'BUTTON') {
        setOperator(event.target.innerText)
      }
  }
  
  const handleClick3 = (event) => {
    // Ensure the clicked element is a button before proceeding.
    if (event.target.tagName === 'BUTTON') {
      if (event.target.innerText === 'Clear'){
        setNumberTwo('0')
      }
      else{
        setNumberTwo(event.target.innerText)
      }
    }
  }

  const handleClick4 = (event) => {
    // Ensure the clicked element is a button before proceeding.
    if (event.target.tagName === 'BUTTON') {
      if(operator === '-') {
        setAnswer(Number(numberOne) - Number(numberTwo))
      }
      else if(operator === '+') {
        setAnswer(Number(numberOne) + Number(numberTwo))
      }
      else if(operator === '*') {
        setAnswer(Number(numberOne) * Number(numberTwo))
      }
      else {
        setAnswer((Number(numberOne) / Number(numberTwo)).toFixed(5))
      }
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberOne}</p>
        <div className="numbers" onClick = {handleClick1}>
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
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick = {handleClick2}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberTwo}</p>
        <div className="numbers" onClick = {handleClick3}>
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
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer" onClick = {handleClick4}>
        <p>{answer}</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
