import { useState } from "react"

import "./App.css"

function App() {
const [firstNum, setFirstNum] = useState('0')
const [operation, setOperation] = useState('+')
// const [secondNum, setSecondNum] = useState(0)
// const [result, setResult] = useState(0)

function firstNumFull(e) {
  if (firstNum === '0') {
    setFirstNum(e.target.innerText)
  }
  else {
    setFirstNum(firstNum + e.target.innerText)
  }
}

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers" onClick={e => firstNumFull(e)}>
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
        <p>{operation}</p>
        <div className="numbers" onClick={e => setOperation(e.target.innerText)}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>0</p>
        <div className="numbers">
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
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
