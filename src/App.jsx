import { useState } from "react"
import "./App.css"

function App() {
const [firstNum, setFirstNum] = useState('0')
const [operation, setOperation] = useState('+')
const [secondNum, setSecondNum] = useState('0')
const [result, setResult] = useState('0')

const [store, setStore] = useState('')

// FIRST PANEL
function firstNumFull(e) {
  if (firstNum === '0') {
    setFirstNum(e.target.innerText)
  }
  else {
    setFirstNum(firstNum + e.target.innerText)
  }
}

// SECOND PANEL
function secondNumFull(e) {
  if (secondNum === '0') {
    setSecondNum(e.target.innerText)
  }
  else {
    setSecondNum(secondNum + e.target.innerText)
  }
}

// RESULT PANEL
function displayResult() {
  if (operation === '+') {
    setResult(parseFloat(firstNum) + parseFloat(secondNum))
  }
  else if ( operation === '-') {
    setResult(parseFloat(firstNum) - parseFloat(secondNum))
  }
  else if ( operation === '*') {
    setResult(parseFloat(firstNum) * parseFloat(secondNum))
  }
  else if ( operation === '÷') {
    setResult(parseFloat(firstNum) / parseFloat(secondNum))
  }
}

// EXTENSION 2
function saveStoreNum() {
  setStore(result)
}

function recallFirstNum() {
  setFirstNum(store)
}

function recallSecondNum() {
  setSecondNum(store)
}

// EXTENSION 3
function addDecimalFirstNum(e) {
  if (!firstNum.includes('.')) {
    setFirstNum(firstNum + e.target.innerText)
  }
}

function addDecimalSecondNum(e) {
  if (!secondNum.includes('.')) {
    setSecondNum(secondNum + e.target.innerText)
  }
}

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button onClick={e => firstNumFull(e)}>1</button>
          <button onClick={e => firstNumFull(e)}>2</button>
          <button onClick={e => firstNumFull(e)}>3</button>
          <button onClick={e => firstNumFull(e)}>4</button>
          <button onClick={e => firstNumFull(e)}>5</button>
          <button onClick={e => firstNumFull(e)}>6</button>
          <button onClick={e => firstNumFull(e)}>7</button>
          <button onClick={e => firstNumFull(e)}>8</button>
          <button onClick={e => firstNumFull(e)}>9</button>
          <button onClick={e => firstNumFull(e)}>0</button>
          <button onClick={() => setFirstNum('0')}>Clear</button>
          <button onClick={e => addDecimalFirstNum(e)}>.</button>
          <button onClick={() => recallFirstNum()}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={e => setOperation(e.target.innerText)}>+</button>
          <button onClick={e => setOperation(e.target.innerText)}>-</button>
          <button onClick={e => setOperation(e.target.innerText)}>*</button>
          <button onClick={e => setOperation(e.target.innerText)}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={e => secondNumFull(e)}>1</button>
          <button onClick={e => secondNumFull(e)}>2</button>
          <button onClick={e => secondNumFull(e)}>3</button>
          <button onClick={e => secondNumFull(e)}>4</button>
          <button onClick={e => secondNumFull(e)}>5</button>
          <button onClick={e => secondNumFull(e)}>6</button>
          <button onClick={e => secondNumFull(e)}>7</button>
          <button onClick={e => secondNumFull(e)}>8</button>
          <button onClick={e => secondNumFull(e)}>9</button>
          <button onClick={e => secondNumFull(e)}>0</button>
          <button onClick={() => setSecondNum('0')}>Clear</button>
          <button onClick={e => addDecimalSecondNum(e)}>.</button>
          <button onClick={() => recallSecondNum()}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => displayResult()}>=</button>
          <button onClick={() => saveStoreNum()}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
