import "./App.css"
import { useState } from "react"
import NumberPanel from "./components/NumberPanel"
import OperatorPanel from "./components/OperatorPanel"
import Calculate from "./components/Calculate"

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState(0)
  return (
    <div className="calculator">
      <NumberPanel num={num1} setNum={setNum1} />
      <OperatorPanel operator={operator} setOperator={setOperator} />
      <NumberPanel num={num2} setNum={setNum2} />
      <Calculate num1={num1} num2={num2} operator={operator} result={result} setResult={setResult}/>
    </div>
  )
}

export default App
