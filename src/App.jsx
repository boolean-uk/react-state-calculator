import "./App.css"
import { useState } from "react"

function App() {

  const [numOne, setNumOne] = useState(0)
  const [numTwo, setNumTwo] = useState(0)
  const [operator, setOperator] = useState('')
  const [answer, setAnswer] = useState('')

  function handleNumClick1(e) {
    if (numOne === 0) {
      setNumOne(e.target.value)
    } else if (!numOne.includes(0)) {
    setNumOne(numOne + e.target.value)
    }
  }
  
  function handleNumClick2(e) {
    if (numTwo === 0) {
      setNumTwo(e.target.value)
    } else if (!numTwo.includes(0)) {
    setNumTwo(numTwo + e.target.value)
    }
  }

  function handleOperatorClick(e) {
    setOperator(e.target.value)
  }

  function handleClearClick() {
    setNumOne(0)
    setNumTwo(0)
    setOperator('')
    setAnswer('')
  }

  function handleEqualsClick() {
    if (operator === "+") {
      setAnswer(Number(numOne) + Number(numTwo))
    } else if (operator === "-") {
      setAnswer(Number(numOne) - Number(numTwo))
    } else if (operator === "*") {
      setAnswer(Number(numOne) * Number(numTwo))
    } else if (numOne === '0' && numTwo === '0' && operator === '/') {
      setAnswer('Really?!')
    } else if (operator === "/") {
      setAnswer(Number(numOne) / Number(numTwo))
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={handleNumClick1}value='1'>1</button>
          <button onClick={handleNumClick1}value='2'>2</button>
          <button onClick={handleNumClick1}value='3'>3</button>
          <button onClick={handleNumClick1}value='4'>4</button>
          <button onClick={handleNumClick1}value='5'>5</button>
          <button onClick={handleNumClick1}value='6'>6</button>
          <button onClick={handleNumClick1}value='7'>7</button>
          <button onClick={handleNumClick1}value='8'>8</button>
          <button onClick={handleNumClick1}value='9'>9</button>
          <button onClick={handleNumClick1}value='0'>0</button>
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperatorClick}value='+'>+</button>
          <button onClick={handleOperatorClick}value='-'>-</button>
          <button onClick={handleOperatorClick}value='*'>*</button>
          <button onClick={handleOperatorClick}value='/'>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={handleNumClick2}value='1'>1</button>
          <button onClick={handleNumClick2}value='2'>2</button>
          <button onClick={handleNumClick2}value='3'>3</button>
          <button onClick={handleNumClick2}value='4'>4</button>
          <button onClick={handleNumClick2}value='5'>5</button>
          <button onClick={handleNumClick2}value='6'>6</button>
          <button onClick={handleNumClick2}value='7'>7</button>
          <button onClick={handleNumClick2}value='8'>8</button>
          <button onClick={handleNumClick2}value='9'>9</button>
          <button onClick={handleNumClick2}value='0'>0</button>
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
