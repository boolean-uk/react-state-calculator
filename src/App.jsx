import { useState } from "react"
import "./App.css"

function App() {
  const [num1, setNum1] = useState(0)
  const [operation, setOperation] = useState('+')
  const [num2, setNum2] = useState(0)
  const [sum, setSum] = useState(0)

  function applyOperation(){
    setSum(eval(`${num1} ${operation} ${num2}`))
  }
  
  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          <button onClick={() => setNum1(1)}>1</button>
          <button onClick={() => setNum1(2)}>2</button>
          <button onClick={() => setNum1(3)}>3</button>
          <button onClick={() => setNum1(4)}>4</button>
          <button onClick={() => setNum1(5)}>5</button>
          <button onClick={() => setNum1(6)}>6</button>
          <button onClick={() => setNum1(7)}>7</button>
          <button onClick={() => setNum1(8)}>8</button>
          <button onClick={() => setNum1(9)}>9</button>
          <button onClick={() => setNum1(0)}>0</button>
          <button onClick={() => setNum1(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => setOperation("+")}>+</button>
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick={() => setOperation("*")}>*</button>
          <button onClick={() => setOperation("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          <button onClick={() => setNum2(1)}>1</button>
          <button onClick={() => setNum2(2)}>2</button>
          <button onClick={() => setNum2(3)}>3</button>
          <button onClick={() => setNum2(4)}>4</button>
          <button onClick={() => setNum2(5)}>5</button>
          <button onClick={() => setNum2(6)}>6</button>
          <button onClick={() => setNum2(7)}>7</button>
          <button onClick={() => setNum2(8)}>8</button>
          <button onClick={() => setNum2(9)}>9</button>
          <button onClick={() => setNum2(0)}>0</button>
          <button onClick={() => setNum2(0)}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={applyOperation}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App
