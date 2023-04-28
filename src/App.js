import "./App.css"
import { useState } from 'react'
import { Number1 } from "./components/Number1.js"
import { Answer } from "./components/Answer.js"


function App() { 

  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState('0')
  const [symbol, setSymbol] = useState('+')
  const [result, setResult] = useState(0)


  const symbolHandler = (event) => {
    const value = event.target.innerText
    setSymbol(value)
  }


  return (
    <div className="calculator">
        <Number1 num={num1} setNum={setNum1}/>
        
        <div className="panel">
          <p>{symbol}</p>
          <div className="numbers">
            <button onClick={symbolHandler}>+</button>
            <button onClick={symbolHandler}>-</button>
            <button onClick={symbolHandler}>*</button>
            <button onClick={symbolHandler}>÷</button>
          </div>
        </div>

        <Number1 num={num2} setNum={setNum2}/>

        <Answer symbol={symbol} num1={num1} num2={num2} result={result} setResult={setResult}/>
        </div>
  )
}

export default App
