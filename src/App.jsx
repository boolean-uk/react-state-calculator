import { useState } from "react"
import "./App.css"

function App() {

  const [numberOne, setNumberOne] = useState('0')
  const [numberTwo, setNumberTwo] = useState('0')
  const [operator, setOperator] = useState('')
  const [answer, setAnswer] = useState('')
  const [storeData, setStoreData] = useState('')
  const [recall, setRecall] = useState('')

function handleFirstNumber(x) {
  if (numberOne === '0') {
    setNumberOne(x.target.value)
  } else if (!numberOne.includes('0')) {
    setNumberOne(numberOne + x.target.value)
  }
}

function handleSecondNumber(x) {
  if (numberTwo === '0') {
    setNumberTwo(x.target.value)
  } else if (!numberTwo.includes('0')) {
    setNumberTwo(numberTwo + x.target.value)
  }
}


function handleOperator(x) {
  setOperator(x.target.value)
}

function restore() {
  setNumberOne('0')
  setNumberTwo('0')
  setOperator('')
  setAnswer('')
}

function equals() {
  if (operator === '+') {
    setAnswer(Number(numberOne) + Number(numberTwo))
  } else if (operator === '-') {
    setAnswer(Number(numberOne) - Number(numberTwo))
  } else if (operator === '*') {
    setAnswer(Number(numberOne) * Number(numberTwo))
  } else if (operator === '/') {
    setAnswer(Number(numberOne) / Number(numberTwo))
  }
}

function storeAnswer() {
  setStoreData(answer)
  setNumberOne('0')
  setNumberTwo('0')
  setOperator('')
  setAnswer('')
}

function recallAnswer() {
  recall === '' ? setNumberOne(storeData) : setNumberOne(recall)
  setRecall(storeData)
  setNumberOne(storeData)
  setNumberTwo('0')
  setOperator('')
  setAnswer('')
}

function decimalHandleFirstNumber() {
  let decimal = '.'
  if(!numberOne.includes(decimal)) {
    setNumberOne(numberOne + decimal)
  } else if (numberOne.includes(decimal)) {
    setNumberOne(numberOne)
  }
}


function decimalHandleSecondNumber() {
  let decimal = '.'
  if(!numberTwo.includes(decimal)) {
    setNumberTwo(numberTwo + decimal)
  } else if (numberTwo.includes(decimal)) {
    setNumberTwo(numberTwo)
  }
}


  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberOne}</p>
        <div className="numbers">
          <button onClick={handleFirstNumber}value='1'>1</button>
          <button onClick={handleFirstNumber}value='2'>2</button>
          <button onClick={handleFirstNumber}value='3'>3</button>
          <button onClick={handleFirstNumber}value='4'>4</button>
          <button onClick={handleFirstNumber}value='5'>5</button>
          <button onClick={handleFirstNumber}value='6'>6</button>
          <button onClick={handleFirstNumber}value='7'>7</button>
          <button onClick={handleFirstNumber}value='8'>8</button>
          <button onClick={handleFirstNumber}value='9'>9</button>
          <button onClick={handleFirstNumber}value='0'>0</button>
          <button onClick={restore}>Clear</button>
          <button onClick={recallAnswer}>Recall</button>
          <button onClick={decimalHandleFirstNumber}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperator}value='+'>+</button>
          <button onClick={handleOperator}value='-'>-</button>
          <button onClick={handleOperator}value='*'>*</button>
          <button onClick={handleOperator}value='/'>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberTwo}</p>
        <div className="numbers">
          <button onClick={handleSecondNumber}value='1'>1</button>
          <button onClick={handleSecondNumber}value='2'>2</button>
          <button onClick={handleSecondNumber}value='3'>3</button>
          <button onClick={handleSecondNumber}value='4'>4</button>
          <button onClick={handleSecondNumber}value='5'>5</button>
          <button onClick={handleSecondNumber}value='6'>6</button>
          <button onClick={handleSecondNumber}value='7'>7</button>
          <button onClick={handleSecondNumber}value='8'>8</button>
          <button onClick={handleSecondNumber}value='9'>9</button>
          <button onClick={handleSecondNumber}value='0'>0</button>
          <button onClick={restore}>Clear</button>
          <button onClick={recallAnswer}>Recall</button>
          <button onClick={decimalHandleSecondNumber}>.</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={equals}>=</button>
          <button onClick={storeAnswer}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
