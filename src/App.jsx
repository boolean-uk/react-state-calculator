import { useState } from "react"
import "./App.css"
import Numbers from "./Numbers"
import Operator from "./Operator"
import Answer from "./Anwser"

function App() {
  const [firstnumber, newfirstNumber] = useState(5)
  const [operator, newOperator] = useState((a, b) => console.log('Hallo'))
  const [secondnumber, newsecondNumber] = useState(0)

  return (
    <div className="calculator">
      <Numbers state={[firstnumber, newfirstNumber]}/>
      <Operator state={[operator, newOperator]}/>

      <Numbers state={[secondnumber, newsecondNumber]}/>
      <Answer firstNumber={firstnumber} secondNumber={secondnumber} Operator={operator}/>

    </div>
  )
}

export default App
