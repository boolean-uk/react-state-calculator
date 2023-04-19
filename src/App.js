import "./App.css"
import { useState } from "react"

import Number1 from "./Number1.js"
import Operators from "./Operators"
import Number2 from "./Number2.js"
import Answer from "./Answer.js"

// clickEquals()

function App() {

  const [num1, setNum1] = useState('0')
  const [operator, setOperator] = useState('+')
  const [num2, setNum2] = useState('0')
  const [answer, setAnswer] = useState('0')

  const handleClick = (event) => {

    const num1 = parseInt(num1)
    const num2 = parseInt(num2)

  }

  return (
    <div className="calculator">
      <Number1 num1 ={num1} setNum1={setNum1}/>
      <Operators operator={operator} setOperator={setOperator}/>
      <Number2 num2 ={num2} setNum2={setNum2}/>
      <Answer num1={num1} num2={num2} operator={operator} answer={answer} setAnswer={setAnswer} />
    </div>
  )
}

export default App
