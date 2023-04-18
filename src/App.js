import { useState } from "react"
import "./App.css"
import Answer from "./components/Answer"
import Number1 from "./components/Number1"
import Number2 from "./components/Number2"
import Operator from "./components/Operator"


function App() { 
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('+')
  const [answer, setAnswer] = useState(0)
  const [storedAnswer, setStoredAnswer] = useState()



  return (
    <div className="calculator">
        
        <Number1 num1={num1} setNum1={setNum1} storedAnswer={storedAnswer}/>
        
        <Operator operator={operator} setOperator={setOperator}/>

        <Number2 num2={num2} setNum2={setNum2} storedAnswer={storedAnswer}/>

        <Answer num1={num1} setNum1={setNum1} num2={num2} setNum2={setNum2} operator={operator} setOperator={setOperator} answer={answer} setAnswer={setAnswer} storedAnswer={storedAnswer} setStoredAnswer={setStoredAnswer}/>
        
    </div>
  )
}

export default App
