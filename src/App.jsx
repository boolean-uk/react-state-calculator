import { useState } from "react"
import "./App.css"
import Numbers from "./Numbers"
import Operator from "./Operator"
import Answer from "./Anwser"

function App() {
  const [leftNumber, setLeftNumber] = useState(5)
  const [operator, setOperator] = useState((a, b) => (a, b) => Number(a) + Number(b))
  const [rightNumber, setRightNumber] = useState(0)
  const [ans, setAns] = useState(0)

  return (
    <div className="calculator">
      <Numbers
        currentNumber = {leftNumber}
        setNumber = {setLeftNumber}
        ans = {ans}/>
      <Operator setOperator={setOperator}/>

      <Numbers
        currentNumber = {rightNumber}
        setNumber = {setRightNumber}
        ans = {ans}/>

      <Answer leftNumber={leftNumber} rightNumber={rightNumber} operator={operator} setAns = {setAns}/>

    </div>
  )
}

export default App
