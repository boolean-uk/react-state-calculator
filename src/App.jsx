import { useState } from "react"
import "./App.css"
//Saving the inputs
//get input
//calculate stuff
//Input number 1 
//Operators
//Inputer number 2
//Output number
//Use states
function App() {
  const [inputNum1, setInputNum1] = useState(0)
  const [operator, setOperator] = useState("+")
  const [inputNum2, setInputNum2] = useState(0)
  const [outputNum, setOutputNum] = useState(0)

  function num1Click(event) {
    setInputNum1(event.target.innerText)
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{inputNum1}</p>
        <div className="numbers">
          <button onClick={num1Click}>1</button>
          <button onClick={num1Click}>2</button>
          <button onClick={num1Click}>3</button>
          <button onClick={num1Click}>4</button>
          <button onClick={num1Click}>5</button>
          <button onClick={num1Click}>6</button>
          <button onClick={num1Click}>7</button>
          <button onClick={num1Click}>8</button>
          <button onClick={num1Click}>9</button>
          <button onClick={num1Click}>0</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{inputNum2}</p>
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
        <p>{outputNum}</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
