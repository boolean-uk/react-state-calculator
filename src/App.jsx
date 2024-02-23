import { useState } from "react"
import "./App.css"
import { NumberPanel } from "./Panels/NumberPanel"
import { OperationPanel } from "./Panels/OperationPanel"
import { EqualPanel } from "./Panels/EqualPanel"

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(null)
  
  return (
    <div className="calculator">
      <NumberPanel num={num1} setNum={setNum1}/>

      <OperationPanel operator={operator} setOperator={setOperator}/>

      <NumberPanel num={num2} setNum={setNum2}/>

      <EqualPanel num1={num1} num2={num2} operator={operator} result={result} setResult={setResult}/>
    </div>
  )
}

export default App
