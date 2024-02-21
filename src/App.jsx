import { useState } from "react"
import "./App.css"
import Numbers from "./Numbers"
import Operator from "./Operator"
import Answer from "./Anwser"

function App() {
  const [firstnumber, newfirstNumber] = useState(5)
  const [operator, newOperator] = useState((a, b) => (a, b) => Number(a) + Number(b))
  const [secondnumber, newsecondNumber] = useState(0)
  const [ans, newAns] = useState(0)

  return (
    <div className="calculator">
      <Numbers state={[firstnumber, newfirstNumber]} ans = {ans}/>
      <Operator state={[operator, newOperator]}/>

      <Numbers state={[secondnumber, newsecondNumber]} ans = {ans}/>
      <Answer firstNumber={firstnumber} secondNumber={secondnumber} Operator={operator} ans = {newAns}/>

    </div>
  )
}

export default App
