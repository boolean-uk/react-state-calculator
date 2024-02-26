import { useState } from "react"
import "./App.css"
import NumberPanel from "./Components/NumberPanel"
import OperatorPanel from "./Components/OperatorPanel"
import AnswerPanel from "./Components/AnswerPanel"

function App() {
  const [firstNumber, setFirstNumber] = useState("0")
  const [operator, setOperator] = useState('+')
  const [secondNumber, setSecondNumber] = useState("0")
  const [answer, setAnswer] = useState("0")
  const [storedValue, setStoredValue] = useState("0")

  return (

    <div className="calculator">
      <NumberPanel 
        number={firstNumber} 
        setNumber={setFirstNumber} 
        storedValue={storedValue}
      />
      <OperatorPanel 
        operator={operator} 
        setOperator={setOperator}
      />
      <NumberPanel 
        number={secondNumber} 
        setNumber={setSecondNumber} 
        storedValue={storedValue}
      />
      <AnswerPanel 
        firstNumber={firstNumber} 
        secondNumber={secondNumber} 
        operator={operator} 
        answer={answer} 
        setAnswer={setAnswer} 
        setStoredValue={setStoredValue}
      />
    </div>
  )
}

export default App
