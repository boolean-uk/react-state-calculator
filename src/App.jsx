import { useState } from "react"
import "./App.css"

function App() {
  const [inputNum1, setInputNum1] = useState(0)
  const [operator, setOperator] = useState("+")
  const [inputNum2, setInputNum2] = useState(0)
  const [outputNum, setOutputNum] = useState(0)

  function handleNum1Click(event) {
    setInputNum1(event.target.innerText)
  }
  
  function handleNum2Click(event){
    setInputNum2(event.target.innerText)
  }
  
  function handleOperatorClick(event) {
    setOperator(event.target.innerText)
  }
  
  function calculate() {
    switch(operator) {
      case "+":
        setOutputNum(Number(inputNum1) + Number(inputNum2))
        break;
      case "-":
        setOutputNum(Number(inputNum1) - Number(inputNum2))
        break;
      case "*":
        setOutputNum(Number(inputNum1) * Number(inputNum2))
        break;
      case "÷":
        setOutputNum(Number(inputNum1) / Number(inputNum2))
        break;
      default:
        setOutputNum(0);
        break;
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{inputNum1}</p>
        <div className="numbers">
          <button onClick={handleNum1Click}>1</button>
          <button onClick={handleNum1Click}>2</button>
          <button onClick={handleNum1Click}>3</button>
          <button onClick={handleNum1Click}>4</button>
          <button onClick={handleNum1Click}>5</button>
          <button onClick={handleNum1Click}>6</button>
          <button onClick={handleNum1Click}>7</button>
          <button onClick={handleNum1Click}>8</button>
          <button onClick={handleNum1Click}>9</button>
          <button onClick={handleNum1Click}>0</button>
          <button onClick={() => setInputNum1(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperatorClick}>+</button>
          <button onClick={handleOperatorClick}>-</button>
          <button onClick={handleOperatorClick}>*</button>
          <button onClick={handleOperatorClick}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{inputNum2}</p>
        <div className="numbers">
          <button onClick={handleNum2Click}>1</button>
          <button onClick={handleNum2Click}>2</button>
          <button onClick={handleNum2Click}>3</button>
          <button onClick={handleNum2Click}>4</button>
          <button onClick={handleNum2Click}>5</button>
          <button onClick={handleNum2Click}>6</button>
          <button onClick={handleNum2Click}>7</button>
          <button onClick={handleNum2Click}>8</button>
          <button onClick={handleNum2Click}>9</button>
          <button onClick={handleNum2Click}>0</button>
          <button onClick={() => setInputNum2(0)}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{outputNum}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
