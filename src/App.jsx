import "./App.css"
import { useState } from 'react'


function App() {

  const [numOne, setNumOne] = useState(0)

  const [numTwo, setNumTwo] = useState(0)

  const [operatorUsed, setOperator] = useState("+")

  const [sumFinal, setSum] = useState(0)

  function calc ()
  {
    switch (operatorUsed) {
      case "+":
        return numOne + numTwo
      case "-":
        return numOne - numTwo
      case "*":
        return numOne * numTwo
      case "÷":
        return numOne / numTwo
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button className="button-1" onClick={() => setNumOne(1)}>1</button>
          <button className="button-2" onClick={() => setNumOne(2)}>2</button>
          <button className="button-3" onClick={() => setNumOne(3)}>3</button>
          <button className="button-4" onClick={() => setNumOne(4)}>4</button>
          <button className="button-5" onClick={() => setNumOne(5)}>5</button>
          <button className="button-6" onClick={() => setNumOne(6)}>6</button>
          <button className="button-7" onClick={() => setNumOne(7)}>7</button>
          <button className="button-8" onClick={() => setNumOne(8)}>8</button>
          <button className="button-9" onClick={() => setNumOne(9)}>9</button>
          <button className="button-0" onClick={() => setNumOne(0)}>0</button>
          <button className="button-clear" onClick={() => setNumOne(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operatorUsed}</p>
        <div className="numbers">
          <button className="button+" onClick={() => setOperator("+")}>+</button>
          <button className="button-" onClick={() => setOperator("-")}>-</button>
          <button className="button*" onClick={() => setOperator("*")}>*</button>
          <button className="button/" onClick={() => setOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
        <button className="button-1" onClick={() => setNumTwo(1)}>1</button>
          <button className="button-2" onClick={() => setNumTwo(2)}>2</button>
          <button className="button-3" onClick={() => setNumTwo(3)}>3</button>
          <button className="button-4" onClick={() => setNumTwo(4)}>4</button>
          <button className="button-5" onClick={() => setNumTwo(5)}>5</button>
          <button className="button-6" onClick={() => setNumTwo(6)}>6</button>
          <button className="button-7" onClick={() => setNumTwo(7)}>7</button>
          <button className="button-8" onClick={() => setNumTwo(8)}>8</button>
          <button className="button-9" onClick={() => setNumTwo(9)}>9</button>
          <button className="button-0" onClick={() => setNumTwo(0)}>0</button>
          <button className="button-clear" onClick={() => setNumTwo(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{sumFinal}</p>
        <div>
          <button className="button-sum" onClick={() => setSum(calc())}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
